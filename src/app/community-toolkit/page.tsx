'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, BookOpen, DollarSign, Scale, GraduationCap, Network,
    Target, Sprout, ArrowRight
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

const toolkitSections = [
    {
        icon: Users,
        title: "Community Organizing",
        description: "Build strong networks and organize local permaculture initiatives",
        resources: [
            "Forming community gardens and food forests",
            "Running participatory design workshops",
            "Building consensus and shared vision",
            "Creating inclusive governance structures"
        ],
        color: "forest"
    },
    {
        icon: DollarSign,
        title: "Funding & Resources",
        description: "Access grants, crowdfunding, and resource sharing strategies",
        resources: [
            "Grant writing for regenerative projects",
            "Crowdfunding campaign strategies",
            "Community resource pooling",
            "Social enterprise and revenue models"
        ],
        color: "earth"
    },
    {
        icon: Scale,
        title: "Policy & Advocacy",
        description: "Influence local policy to support sustainable practices",
        resources: [
            "Engaging with local government",
            "Zoning and land-use advocacy",
            "Creating demonstration projects",
            "Building coalitions for change"
        ],
        color: "sky"
    },
    {
        icon: GraduationCap,
        title: "Education Programs",
        description: "Design and deliver permaculture education in your community",
        resources: [
            "Designing introductory workshops",
            "School garden programs",
            "PDC course logistics",
            "Train-the-trainer programs"
        ],
        color: "forest"
    }
]

const caseStudies = [
    {
        title: "Transition Town Totnes",
        location: "UK",
        description: "Community-led resilience initiative that inspired a global movement",
        impact: "150+ Transition initiatives worldwide"
    },
    {
        title: "Urban Permaculture Guild",
        location: "Portland, USA",
        description: "Networked approach to urban permaculture education and implementation",
        impact: "5,000+ trained community members"
    },
    {
        title: "Ecovillage Network",
        location: "Global",
        description: "International network supporting sustainable community development",
        impact: "10,000+ ecovillages connected"
    }
]

export default function CommunityToolkit() {
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
                            <span className="gradient-text">Community Toolkit</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Practical resources and strategies for scaling permaculture in your community—from neighborhood gardens to bioregional initiatives.
                        </p>
                    </motion.div>

                    {/* Introduction */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="gradient">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                                        <Network className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Why Community Matters</h2>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    While individual actions are important, systemic change requires collective effort. This toolkit provides
                                    frameworks and resources for organizing, funding, advocating, and educating at the community level.
                                </p>
                                <p className="text-gray-600">
                                    Whether you're starting a community garden, launching a local permaculture guild, or advocating for
                                    policy change, these resources will help you build momentum and create lasting impact.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Toolkit Sections */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">Core Resources</h2>
                            <p className="text-lg text-gray-600">
                                Essential tools and strategies for community-scale permaculture.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {toolkitSections.map((section, index) => (
                                <Card key={index} variant={section.color as "forest" | "earth" | "sky"} className="h-full">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <section.icon className={`w-8 h-8 text-${section.color}-600`} />
                                            <h3 className="font-bold text-xl">{section.title}</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4">{section.description}</p>
                                        <ul className="space-y-2">
                                            {section.resources.map((resource, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <Sprout className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                                                    {resource}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.section>

                    {/* Case Studies */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">Community Success Stories</h2>
                            <p className="text-lg text-gray-600">
                                Learn from established initiatives that have scaled permaculture at the community level.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {caseStudies.map((study, index) => (
                                <Card key={index} variant="sky" className="h-full">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                                        <p className="text-sm text-sky-600 font-medium mb-3">{study.location}</p>
                                        <p className="text-gray-700 text-sm mb-4">{study.description}</p>
                                        <div className="bg-sky-50 rounded-lg p-3">
                                            <p className="text-xs font-semibold text-sky-700">Impact</p>
                                            <p className="text-sm text-gray-700">{study.impact}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.section>

                    {/* Action Steps */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="earth" className="bg-earth-50 border-earth-200">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center">
                                        <Target className="w-6 h-6 text-earth-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">Getting Started</h2>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div>
                                        <div className="font-bold text-earth-700 mb-2">1. Assess & Connect</div>
                                        <p className="text-sm text-gray-600">Survey your community's needs and find like-minded individuals.</p>
                                    </div>
                                    <div>
                                        <div className="font-bold text-earth-700 mb-2">2. Start Small</div>
                                        <p className="text-sm text-gray-600">Begin with a demonstration project or workshop series.</p>
                                    </div>
                                    <div>
                                        <div className="font-bold text-earth-700 mb-2">3. Scale Strategically</div>
                                        <p className="text-sm text-gray-600">Build partnerships, secure funding, and expand your impact.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="group">
                                        <BookOpen className="mr-2 w-5 h-5" />
                                        Download Planning Guide
                                    </Button>
                                    <Button size="lg" variant="outline" className="group">
                                        <Users className="mr-2 w-5 h-5" />
                                        Connect with Others
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Resources Note */}
                    <motion.section variants={fadeInUp} className="text-center">
                        <p className="text-gray-600 italic">
                            This toolkit is continuously evolving. Have resources to contribute? We welcome community submissions.
                        </p>
                    </motion.section>

                </motion.div>
            </div>
        </div>
    )
}
