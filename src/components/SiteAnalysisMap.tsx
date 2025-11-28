'use client'

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, LayersControl, WMSTileLayer } from 'react-leaflet'
import { Search, Loader2 } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

interface SiteAnalysisMapProps {
    onLocationSelect: (lat: number, lng: number) => void
}

function LocationMarker({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
    const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null)

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng)
            onLocationSelect(e.latlng.lat, e.latlng.lng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                Selected Location: <br />
                Lat: {position.lat.toFixed(4)} <br />
                Lng: {position.lng.toFixed(4)}
            </Popup>
        </Marker>
    )
}

function MapUpdater({ center }: { center: { lat: number; lng: number } | null }) {
    const map = useMap()
    useEffect(() => {
        if (center) {
            map.flyTo(center, 13)
        }
    }, [center, map])
    return null
}

export default function SiteAnalysisMap({ onLocationSelect }: SiteAnalysisMapProps) {
    // Default center (can be anywhere, using a neutral location like 20, 0 as per request)
    const defaultCenter = { lat: 20, lng: 0 }
    const defaultZoom = 2

    const [searchQuery, setSearchQuery] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!searchQuery.trim()) return

        setIsSearching(true)
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`)
            const data = await response.json()

            if (data && data.length > 0) {
                const { lat, lon } = data[0]
                const newLat = parseFloat(lat)
                const newLng = parseFloat(lon)

                const newCenter = { lat: newLat, lng: newLng }
                setSearchCenter(newCenter)

                // Trigger selection immediately
                onLocationSelect(newLat, newLng)
            } else {
                alert('Location not found')
            }
        } catch (error) {
            console.error('Search failed:', error)
            alert('Search failed. Please try again.')
        } finally {
            setIsSearching(false)
        }
    }

    return (
        <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-forest-100 z-0 group">
            {/* Search Bar Overlay */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a location (e.g., Portland, Oregon)..."
                        className="w-full pl-10 pr-4 py-3 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {isSearching ? (
                            <Loader2 className="w-5 h-5 animate-spin text-forest-600" />
                        ) : (
                            <Search className="w-5 h-5" />
                        )}
                    </div>
                </form>
            </div>

            <MapContainer
                center={defaultCenter}
                zoom={defaultZoom}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Standard (OpenStreetMap)">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name="Satellite (Esri World Imagery)">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name="Topography (OpenTopoMap)">
                        <TileLayer
                            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    {/* Water Layers */}
                    <LayersControl.Overlay name="Water: Hydro Reference">
                        <TileLayer
                            attribution='&copy; <a href="https://www.esri.com">Esri</a>'
                            url="https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Land: ESA WorldCover 2020">
                        <WMSTileLayer
                            url="https://services.terrascope.be/wms/v2"
                            layers="WORLDCOVER_2020_MAP"
                            format="image/png"
                            transparent={true}
                            attribution='&copy; <a href="https://esa-worldcover.org">ESA WorldCover</a>'
                        />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Soil: pH (SoilGrids)">
                        <WMSTileLayer
                            url="https://maps.isric.org/mapserv?map=/map/phh2o.map"
                            layers="phh2o_0-5cm_mean"
                            format="image/png"
                            transparent={true}
                            attribution='&copy; SoilGrids'
                        />
                    </LayersControl.Overlay>

                    {/* Climate Layers */}
                    <LayersControl.Overlay name="Climate: Solar Radiation (GHI)">
                        <WMSTileLayer
                            url="https://services.globalsolaratlas.info/wms/ciff_ghi"
                            layers="GHI"
                            format="image/png"
                            transparent={true}
                            attribution='&copy; <a href="https://globalsolaratlas.info">Global Solar Atlas</a>'
                        />
                    </LayersControl.Overlay>

                    {/* Köppen-Geiger WMS not publicly available, using Ecoregions as proxy for biodiversity */}
                    <LayersControl.Overlay name="Biodiversity: Ecoregions">
                        <TileLayer
                            attribution='&copy; <a href="https://www.worldwildlife.org">WWF</a>'
                            url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Ecoregions_World/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.Overlay>
                </LayersControl>

                <LocationMarker onLocationSelect={onLocationSelect} />
                <MapUpdater center={searchCenter} />
            </MapContainer>
        </div>
    )
}
