'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Battery, Leaf, CheckCircle, Calendar, Wrench, ArrowRight } from 'lucide-react'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

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

const quickSteps = [
  {
    title: "1. Observe your site for a full year",
    description: "Track sun patterns, wind direction, water flow, and seasonal changes. This is the foundation of good design.",
    icon: Eye,
    timeframe: "Year 1",
    actions: [
      "Note where sun falls throughout the day and seasons",
      "Observe wind patterns and microclimates", 
      "Track where water flows and pools",
      "Identify existing plants and wildlife"
    ]
  },
  {
    title: "2. Start a compost pile and sheet-mulch a bed",
    description: "Begin building soil health immediately. These simple actions start the regeneration process.",
    icon: Wrench,
    timeframe: "Week 1",
    actions: [
      "Set up a three-bay compost system or simple pile",
      "Choose a small area (2m × 2m) for sheet mulching",
      "Layer cardboard, organic matter, and mulch",
      "Begin collecting kitchen scraps for composting"
    ]
  },
  {
    title: "3. Plant perennials and nitrogen-fixers first",
    description: "Establish the backbone of your system with plants that give back more than they take.",
    icon: Leaf,
    timeframe: "Year 1-2",
    actions: [
      "Plant fruit and nut trees appropriate for your climate",
      "Add nitrogen-fixing plants like comfrey or clover",
      "Establish perennial herbs and vegetables",
      "Create plant guilds that support each other"
    ]
  },
  {
    title: "4. Add animals when the system can feed them",
    description: "Introduce animals only when you have established food sources and appropriate housing.",
    icon: CheckCircle,
    timeframe: "Year 2+",
    actions: [
      "Start with chickens for eggs and pest control",
      "Consider bees if you have flowering plants",
      "Add larger animals only if you have adequate space",
      "Ensure proper rotation and waste management"
    ]
  }
]

export default function GettingStarted() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Getting Started</span> with Permaculture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your practical, step-by-step guide to beginning your permaculture journey today. 
              Start small, observe carefully, and build regenerative systems over time.
            </p>
          </motion.div>

          {/* Quick Start Philosophy */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 to-earth-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">The Permaculture Approach</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  <strong>"Start where you are, use what you have, do what you can."</strong> 
                  Permaculture is about working with what's available and making gradual improvements over time.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Step-by-Step Guide */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Your First Steps</h2>
              <p className="text-lg text-gray-600">
                Follow these four foundational steps to begin creating a regenerative system in any space.
              </p>
            </div>

            <div className="space-y-8">
              {quickSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mt-1">
                          <step.icon className="w-6 h-6 text-forest-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <span className="inline-flex items-center gap-1 bg-forest-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium">
                              <Calendar className="w-4 h-4" />
                              {step.timeframe}
                            </span>
                          </div>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-16">
                        <h4 className="font-semibold text-gray-900 mb-3">Action Items:</h4>
                        <ul className="space-y-2">
                          {step.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Scale-Specific Guidance */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Start at Your Scale</h2>
              <p className="text-lg text-gray-600">
                Permaculture works at every scale, from windowsill gardens to bioregional planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Balcony/Indoor</h3>
                  <p className="text-sm text-gray-600">Herbs, microgreens, composting, water collection</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Suburban Garden</h3>
                  <p className="text-sm text-gray-600">Food forest, rainwater, solar, chickens</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-6 h-6 text-earth-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Rural Property</h3>
                  <p className="text-sm text-gray-600">Broadacre systems, livestock, renewable energy</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="font-semblold mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Eco-villages, local food systems, cooperation</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Go Deeper?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Once you've started observing and making your first changes, dive deeper into 
                  permaculture techniques and design principles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/techniques">
                    <Button size="lg" className="group">
                      Learn Techniques & Methods
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/principles">
                    <Button variant="outline" size="lg">
                      Study the 12 Principles
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