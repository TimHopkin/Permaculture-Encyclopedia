'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'

export default function BlogPost() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <Link href="/blog">
                        <Button variant="outline" className="group">
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Button>
                    </Link>

                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Rainwater Harvesting: Free Water for Your Garden
                        </h1>
                        <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">7 min read</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                <span className="text-sm">Water Management</span>
                            </div>
                        </div>
                    </div>

                    <Card variant="gradient">
                        <CardContent className="p-8">
                            <div className="prose prose-lg max-w-none space-y-6">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Every time it rains, thousands of gallons of water flow off your roof and disappear into storm drains. A 1,000 square foot roof captures about 600 gallons from just one inch of rain. That's free water you could be using to irrigate your garden, reducing your water bills and building resilience against drought. Rainwater harvesting is one of the simplest and most impactful permaculture techniques you can implement.
                                </p>

                                <p className="text-lg leading-relaxed text-gray-700">
                                    Start simple with a rain barrel connected to your downspout—these 50-80 gallon containers cost around $50-100 and can be installed in an afternoon. For larger systems, consider multiple barrels linked together or a cistern that stores hundreds or thousands of gallons. The water can be used directly for gardens with a spigot and hose, or you can add a pump for more pressure. Make sure to use food-grade containers if you plan to use the water for vegetables, and add a screen to keep out mosquitoes and debris.
                                </p>

                                <p className="text-lg leading-relaxed text-gray-700">
                                    Beyond containers, consider earthworks like swales—level trenches dug on contour that capture and infiltrate runoff directly into the soil. Swales are perfect for larger properties and can transform how water moves across your landscape, preventing erosion while deeply hydrating trees and plants. Rain gardens are another option: shallow depressions planted with native species that temporarily hold water and allow it to soak in. These techniques work best when combined—use barrels for quick access water and swales for long-term soil moisture storage.
                                </p>

                                <p className="text-lg leading-relaxed text-gray-700">
                                    Check local regulations before installing large systems, as some areas have restrictions on rainwater collection (though most don't). In many climates, rainwater harvesting can supply 50-100% of your garden's water needs during the growing season. Start small, observe how water moves on your property, and scale up as you learn. Your garden—and your water bill—will thank you.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
