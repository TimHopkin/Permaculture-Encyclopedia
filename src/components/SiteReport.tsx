'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Loader2, Mountain, CloudRain, Sprout, Bug } from 'lucide-react'

interface AnalysisData {
    elevation?: {
        elevation: number
    }
    climate?: {
        avgRainfall: number
        avgTemp: number
    }
    soil?: {
        ph: number
        organicCarbon: number
    }
    biodiversity?: {
        speciesCount: number
    }
}

interface SiteReportProps {
    loading: boolean
    data: AnalysisData | null
    error: string | null
}

export default function SiteReport({ loading, data, error }: SiteReportProps) {
    if (loading) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-forest-600">
                <Loader2 className="w-12 h-12 animate-spin mb-4" />
                <p className="text-lg font-medium animate-pulse">Analyzing Site Data...</p>
                <p className="text-sm text-forest-400 mt-2">Fetching Elevation, Climate, Soil, and Biodiversity data</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-6 bg-red-50 rounded-xl border border-red-100 text-red-700">
                <h3 className="font-bold text-lg mb-2">Analysis Failed</h3>
                <p>{error}</p>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-gray-400 text-center border-2 border-dashed border-gray-200 rounded-xl">
                <Mountain className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-medium">Select a location on the map</p>
                <p className="text-sm mt-2">Click anywhere to generate a Permaculture Site Report</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-forest-100 p-6">
                <h2 className="text-2xl font-bold text-forest-800 mb-4 border-b border-forest-50 pb-2">Site Analysis Report</h2>

                <div className="grid gap-6">
                    {/* Elevation Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-forest-700 font-semibold">
                            <Mountain className="w-5 h-5" />
                            <h3>Topography</h3>
                        </div>
                        <div className="bg-forest-50/50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Elevation</p>
                            <p className="text-xl font-bold text-forest-900">{data.elevation?.elevation ?? 'N/A'} m</p>
                            {/* Future: Add slope calculation here */}
                        </div>
                    </div>

                    {/* Climate Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sky-700 font-semibold">
                            <CloudRain className="w-5 h-5" />
                            <h3>Climate</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-sky-50/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Annual Rainfall</p>
                                <p className="text-xl font-bold text-sky-900">{data.climate?.avgRainfall ?? 'N/A'} mm</p>
                            </div>
                            <div className="bg-orange-50/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Avg Temp</p>
                                <p className="text-xl font-bold text-orange-900">{data.climate?.avgTemp ?? 'N/A'} °C</p>
                            </div>
                        </div>
                    </div>

                    {/* Soil Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-earth-700 font-semibold">
                            <Sprout className="w-5 h-5" />
                            <h3>Soil Health</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-earth-50/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">pH Level</p>
                                <p className="text-xl font-bold text-earth-900">{data.soil?.ph ?? 'N/A'}</p>
                            </div>
                            <div className="bg-earth-50/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">Organic Carbon</p>
                                <p className="text-xl font-bold text-earth-900">{data.soil?.organicCarbon ?? 'N/A'} g/kg</p>
                            </div>
                        </div>
                    </div>

                    {/* Biodiversity Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-700 font-semibold">
                            <Bug className="w-5 h-5" />
                            <h3>Biodiversity</h3>
                        </div>
                        <div className="bg-green-50/50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Recorded Species (nearby)</p>
                            <p className="text-xl font-bold text-green-900">{data.biodiversity?.speciesCount ?? 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
