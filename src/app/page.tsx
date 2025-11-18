'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Users, Globe, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardContent, CardDescription, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center vibrant-hero">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block">The Open-Source</span>
                <span className="gradient-text block">Manual for Solving</span>
                <span className="block">Global Challenges</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover how permaculture principles can empower you to create regenerative solutions 
                that heal the planet whilst addressing the UN Sustainable Development Goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/introduction">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/start">
                <Button variant="outline" size="lg">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 opacity-30"
          >
            <Leaf className="w-12 h-12 text-forest-500" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-32 right-16 opacity-25"
          >
            <Globe className="w-16 h-16 text-sky-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-40 left-1/4 opacity-35"
          >
            <Sparkles className="w-10 h-10 text-earth-500" />
          </motion.div>
        </div>
      </section>

      {/* Core Concepts Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Three Simple Principles, <span className="gradient-text">Infinite Possibilities</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              At its heart, permaculture rests on three ethical foundations that guide every decision and design.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card variant="forest" className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-forest-700">Earth Care</CardTitle>
                  <CardDescription className="text-gray-700">
                    Regenerate and protect our living systems. Every design must enhance rather than degrade the natural world.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card variant="sky" className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-sky-700">People Care</CardTitle>
                  <CardDescription className="text-gray-700">
                    Support humans in meeting their physical, social, and economic needs through sustainable systems.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card variant="earth" className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-earth-400 to-sunset-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-earth-700">Fair Share</CardTitle>
                  <CardDescription className="text-gray-700">
                    Set limits to consumption and population, redistribute surplus to support Earth and People Care.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform Your World</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're working with a balcony garden or planning bioregional change, 
              permaculture offers practical solutions for every scale and directly addresses the UN SDGs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/introduction">
                <Button size="lg" className="group">
                  Begin Your Permaculture Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/sdg">
                <Button variant="secondary" size="lg" className="group">
                  Explore UN SDGs
                  <Globe className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
