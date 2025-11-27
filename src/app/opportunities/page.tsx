'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    MapPin, Leaf, PawPrint, Calendar, Users, TrendingUp, ArrowRight
} from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const opportunityTypes = [
    {
        title: "Permaculture Projects",
        icon: Leaf,
        description: "Hands-on volunteering, work exchanges, and internships at permaculture farms and communities worldwide.",
        href: "/opportunities/permaculture",
        stats: "25+ projects across 6 continents",
        color: "forest"
    },
    {
        title: "Rewilding Projects",
        icon: PawPrint,
        description: "Wildlife conservation, ecosystem restoration, and habitat rewilding opportunities around the globe.",
        href: "/opportunities/rewilding",
        stats: "25+ projects focused on biodiversity",
        color: "earth"
    }
]

const features = [
    {
        icon: MapPin,
        title: "Global Coverage",
        description: "Projects across Africa, Asia, Europe, Americas, and Oceania"
    },
    {
        icon: Calendar,
        title: "Flexible Duration",
        description: "From weekend workshops to 6-month internships"
    },
    {
        icon: Users,
        title: "All Skill Levels",
        description: "Beginner-friendly to advanced technical roles"
    },
    {
        icon: TrendingUp,
        title: "Career Building",
        description: "Gain experience, references, and professional connections"
    }
]

export default function Opportunities() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="space-y-16"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="gradient-text">Find Your Opportunity</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Discover hands-on opportunities to learn, contribute, and grow through permaculture and rewilding projects worldwide.
                        </p>
                    </motion.div>

                    {/* Opportunity Types */}
                    <motion.section variants={fadeInUp}>
                        <div className="grid md:grid-cols-2 gap-8">
                            {opportunityTypes.map((type, index) => (
                                <Link key={index} href={type.href}>
                                    <Card variant={type.color as "forest" | "earth"} className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                        <CardContent className="p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`w-16 h-16 bg-${type.color}-100 rounded-full flex items-center justify-center`}>
                                                    <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                                                </div>
                                                <h2 className="text-2xl font-bold">{type.title}</h2>
                                            </div>
                                            <p className="text-gray-700 mb-4 text-lg">{type.description}</p>
                                            <p className="text-sm font-semibold text-gray-600 mb-6">{type.stats}</p>
                                            <Button variant="outline" className="group-hover:translate-x-1 transition-transform">
                                                Explore Projects
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.section>

                    {/* Features */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-center mb-4">Why Get Involved?</h2>
                            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                                These opportunities offer more than just volunteering—they're pathways to real-world learning and meaningful impact.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <Card key={index} variant="gradient" className="text-center">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <feature.icon className="w-6 h-6 text-forest-600" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA */}
                    <motion.section variants={fadeInUp} className="text-center">
                        <Card variant="earth" className="bg-earth-50 border-earth-200">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h3>
                                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                                    Browse through our curated directories to find the perfect opportunity that matches your skills,
                                    interests, and availability.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/opportunities/permaculture">
                                        <Button size="lg" className="group">
                                            <Leaf className="mr-2 w-5 h-5" />
                                            Permaculture Projects
                                        </Button>
                                    </Link>
                                    <Link href="/opportunities/rewilding">
                                        <Button size="lg" variant="outline" className="group">
                                            <PawPrint className="mr-2 w-5 h-5" />
                                            Rewilding Projects
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                </motion.div>
            </div>
        </div>
    )
}
