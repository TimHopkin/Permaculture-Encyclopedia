'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import SiteReport from '@/components/SiteReport'

// Dynamically import the map component to avoid SSR issues with Leaflet
const SiteAnalysisMap = dynamic(() => import('@/components/SiteAnalysisMap'), {
    ssr: false,
    loading: () => (
        <div className="h-[600px] w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400">
            Loading Map...
        </div>
    ),
})

export default function SiteAnalysisPage() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState<string | null>(null)

    const handleLocationSelect = async (lat: number, lng: number) => {
        setLoading(true)
        setError(null)
        setData(null)

        try {
            const response = await fetch(`/api/analyze?lat=${lat}&lng=${lng}`)
            if (!response.ok) {
                throw new Error('Failed to fetch analysis data')
            }
            const result = await response.json()
            setData(result)
        } catch (err) {
            console.error(err)
            setError('Could not retrieve data for this location. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-forest-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-forest-900 mb-4">
                        Global Permaculture Site Analysis
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Click anywhere on the map to instantly generate a comprehensive environmental report.
                        Understand your land's topography, climate, soil, and biodiversity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <SiteAnalysisMap onLocationSelect={handleLocationSelect} />
                        <div className="mt-4 text-sm text-gray-500 text-center">
                            Data sources: Open-Elevation, NASA POWER, SoilGrids, GBIF
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <SiteReport loading={loading} data={data} error={error} />
                    </div>
                </div>
            </div>
        </div>
    )
}
