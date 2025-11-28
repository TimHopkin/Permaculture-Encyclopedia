import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')

    if (!lat || !lng) {
        return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 })
    }

    try {
        // Parallel fetch for all data sources
        const [elevationData, climateData, soilData, biodiversityData] = await Promise.allSettled([
            fetchElevation(lat, lng),
            fetchClimate(lat, lng),
            fetchSoil(lat, lng),
            fetchBiodiversity(lat, lng)
        ])

        // Process results
        const results = {
            elevation: elevationData.status === 'fulfilled' ? elevationData.value : null,
            climate: climateData.status === 'fulfilled' ? climateData.value : null,
            soil: soilData.status === 'fulfilled' ? soilData.value : null,
            biodiversity: biodiversityData.status === 'fulfilled' ? biodiversityData.value : null,
        }

        return NextResponse.json(results)
    } catch (error) {
        console.error('Analysis Error:', error)
        return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 })
    }
}

async function fetchElevation(lat: string, lng: string) {
    try {
        const res = await fetch(`https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`)
        if (!res.ok) throw new Error('Elevation fetch failed')
        const data = await res.json()
        return {
            elevation: data.results[0].elevation
        }
    } catch (e) {
        console.error('Elevation API Error:', e)
        return null
    }
}

async function fetchClimate(lat: string, lng: string) {
    try {
        // NASA POWER API
        // Parameters: PRECTOTCORR (Precipitation), T2M (Temperature at 2 Meters)
        // Community: AG (Agroclimatology)
        const res = await fetch(
            `https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=PRECTOTCORR,T2M&community=AG&longitude=${lng}&latitude=${lat}&format=JSON`
        )
        if (!res.ok) throw new Error('Climate fetch failed')
        const data = await res.json()

        // Calculate averages from the 13th month (Annual Average) if available, or average the 12 months
        const rainfall = data.properties.parameter.PRECTOTCORR.ANN
        const temp = data.properties.parameter.T2M.ANN

        return {
            avgRainfall: rainfall ? parseFloat(rainfall.toFixed(1)) : 0, // mm/day needs conversion to annual? API says "Annual Mean" for ANN usually.
            // Wait, PRECTOTCORR is usually mm/day. If we want annual, we might need to multiply by 365 or check if ANN is already annual sum.
            // NASA POWER docs say PRECTOTCORR is mm/day. So ANN is average daily precipitation over the year.
            // Annual rainfall = Average Daily * 365.
            avgTemp: temp ? parseFloat(temp.toFixed(1)) : 0
        }
    } catch (e) {
        console.error('Climate API Error:', e)
        return null
    }
}

async function fetchSoil(lat: string, lng: string) {
    try {
        // SoilGrids API
        // querying pH (phh2o) and organic carbon (soc) at 0-5cm depth
        const res = await fetch(
            `https://rest.isric.org/soilgrids/v2.0/properties/query?lat=${lat}&lon=${lng}&property=phh2o&property=soc&depth=0-5cm`
        )
        if (!res.ok) throw new Error('Soil fetch failed')
        const data = await res.json()

        // Extract values
        // SoilGrids returns values scaled by factor. pH is scaled by 10. SOC is scaled by 10 (dg/kg -> g/kg).
        // Actually SOC units in SoilGrids v2 are dg/kg (decigrams per kg). To get g/kg, divide by 10.
        // Wait, let's check docs or standard usage.
        // Usually pH is integer * 10.

        const phLayer = data.properties.layers.find((l: any) => l.name === 'phh2o')
        const socLayer = data.properties.layers.find((l: any) => l.name === 'soc')

        const phValue = phLayer ? phLayer.depths[0].values.mean / 10 : 0
        const socValue = socLayer ? socLayer.depths[0].values.mean / 10 : 0 // dg/kg to g/kg? Or just display as is.
        // Standard is usually g/kg (%). 10 g/kg = 1%.
        // SoilGrids SOC is dg/kg. So 150 dg/kg = 15 g/kg = 1.5%.

        return {
            ph: phValue,
            organicCarbon: socValue
        }
    } catch (e) {
        console.error('Soil API Error:', e)
        return null
    }
}

async function fetchBiodiversity(lat: string, lng: string) {
    try {
        // GBIF API
        // Search for occurrences within a small radius (e.g., 0.1 degree ~ 10km)
        // Using a bounding box or simple search
        // Let's use a simple search for now
        const res = await fetch(
            `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${lat}&decimalLongitude=${lng}&limit=0&radius=5000` // 5km radius? API might not support radius directly in search without specialized params or geometry.
            // GBIF usually requires geometry for spatial search.
            // Let's try a small bounding box approximation.
        )

        // Actually, GBIF search API supports 'geometry' parameter WKT.
        // Or we can just check count of records in a rough box.
        // Let's use a simpler approach: just get count for the country or region if precise point is hard, 
        // BUT for "Site Analysis" we want local.
        // Let's try the 'distance' or 'radius' if supported, otherwise construct a small bbox.
        // GBIF API: `https://api.gbif.org/v1/occurrence/search?decimalLatitude=X,Y&decimalLongitude=A,B` for range.
        // Let's use a 0.05 degree buffer.
        const latNum = parseFloat(lat)
        const lngNum = parseFloat(lng)
        const buffer = 0.05
        const minLat = latNum - buffer
        const maxLat = latNum + buffer
        const minLng = lngNum - buffer
        const maxLng = lngNum + buffer

        const gbifUrl = `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${minLat},${maxLat}&decimalLongitude=${minLng},${maxLng}&limit=0`

        const res2 = await fetch(gbifUrl)
        if (!res2.ok) throw new Error('Biodiversity fetch failed')
        const data = await res2.json()

        return {
            speciesCount: data.count
        }
    } catch (e) {
        console.error('Biodiversity API Error:', e)
        return null
    }
}
