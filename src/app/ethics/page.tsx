'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TreePine, Users, Target, ArrowRight, Heart, Recycle, Scale } from 'lucide-react'
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
      staggerChildren: 0.15
    }
  }
}

export default function Ethics() {
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
              The <span className="gradient-text">Three Ethics</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The moral compass that guides every permaculture decision. These three principles 
              form the foundation upon which all sustainable design must rest.
            </p>
          </motion.div>

          {/* Earth Care */}
          <motion.section variants={fadeInUp}>
            <Card variant="forest" className="overflow-hidden">
              <div className="bg-gradient-to-r from-forest-500 to-forest-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Earth Care</h2>
                    <p className="text-forest-100 text-lg">Regenerate and protect ecosystems</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At its heart, Earth Care recognises that we are part of the Earth, not separate from it. 
                    Every design decision must enhance rather than degrade the natural systems that sustain all life.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-forest-700 mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        In Practice
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Build soil health through composting and no-till methods</li>
                        <li>• Protect biodiversity by creating habitat corridors</li>
                        <li>• Harvest rainwater rather than relying on mains supply</li>
                        <li>• Use renewable energy sources</li>
                        <li>• Choose native plants that support local ecosystems</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-forest-700 mb-3 flex items-center gap-2">
                        <Recycle className="w-5 h-5" />
                        Key Principles
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reduce, reuse, recycle all materials</li>
                        <li>• Restore degraded landscapes</li>
                        <li>• Mimic natural patterns and processes</li>
                        <li>• Minimise waste and pollution</li>
                        <li>• Think in terms of cycles, not linear processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* People Care */}
          <motion.section variants={fadeInUp}>
            <Card variant="sky" className="overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">People Care</h2>
                    <p className="text-sky-100 text-lg">Support human physical, social, and economic needs</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    People Care acknowledges that humans are part of nature and have legitimate needs. 
                    However, these needs must be met in ways that also support Earth Care and Fair Share.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-3">Physical Needs</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Access to clean air, water, and nutritious food</li>
                        <li>• Appropriate shelter and clothing</li>
                        <li>• Healthcare and physical safety</li>
                        <li>• Meaningful work and livelihood</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-3">Social & Economic Needs</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Community connection and belonging</li>
                        <li>• Education and skill development</li>
                        <li>• Cultural expression and creativity</li>
                        <li>• Democratic participation in decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Fair Share */}
          <motion.section variants={fadeInUp}>
            <Card variant="sunset" className="overflow-hidden">
              <div className="bg-gradient-to-r from-sunset-500 to-earth-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Fair Share</h2>
                    <p className="text-earth-100 text-lg">Set limits to consumption & redistribute surplus</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fair Share is perhaps the most challenging ethic, requiring us to examine our consumption patterns 
                    and actively redistribute surplus resources to support both Earth and People Care.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-earth-700 mb-3">Setting Limits</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Consume only what you truly need</li>
                        <li>• Consider the true cost of your choices</li>
                        <li>• Choose quality over quantity</li>
                        <li>• Reduce material footprint</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-earth-700 mb-3">Redistributing Surplus</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Share knowledge and skills freely</li>
                        <li>• Support community projects and initiatives</li>
                        <li>• Donate time, money, or resources</li>
                        <li>• Invest in regenerative systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Integration */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 via-sky-50 to-earth-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-6">The Ethics Work Together</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                  These three ethics are interconnected and mutually supportive. True sustainability 
                  only emerges when all three are considered in every decision and design.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-6 h-6 text-forest-600" />
                    <span className="font-medium">Earth Care</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 sm:rotate-0" />
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-sky-600" />
                    <span className="font-medium">People Care</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 sm:rotate-0" />
                  <div className="flex items-center gap-2">
                    <Scale className="w-6 h-6 text-earth-600" />
                    <span className="font-medium">Fair Share</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeInUp} className="text-center section-earth py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
            <Card variant="gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Apply These Ethics?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Learn how to put these principles into practice with the 12 design principles 
                  that guide permaculture implementation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/principles">
                    <Button size="lg">
                      Explore the 12 Principles
                    </Button>
                  </Link>
                  <Link href="/start">
                    <Button variant="outline" size="lg">
                      Start Applying Today
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