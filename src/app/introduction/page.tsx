'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, TreePine, Lightbulb, Target, Sparkles } from 'lucide-react'
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

export default function Introduction() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Permaculture <span className="gradient-text">in a Nutshell</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive introduction to the design system that's changing how we create 
              sustainable human habitats and regenerative solutions.
            </p>
          </motion.div>

          {/* What it is */}
          <motion.section variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-forest-600" />
                  </div>
                  <CardTitle className="text-2xl">What is Permaculture?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-lg">
                  <p>
                    <strong>Permaculture = Permanent + Agriculture</strong> (or Permanent Culture).
                  </p>
                  <p>
                    It's a design system for creating regenerative, self-sufficient human habitats that mimic natural ecosystems. 
                    Co-founded in the 1970s by Australians <strong>Bill Mollison</strong> and <strong>David Holmgren</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Core Idea */}
          <motion.section variants={fadeInUp}>
            <Card className="border-l-4 border-l-forest-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-forest-700">Core Idea</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Work with nature, not against it.</strong> Observe natural patterns, then stack functions 
                  so every element performs multiple jobs and every need is met by multiple elements.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* The 3 Ethics */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">The 3 Ethics</h2>
              <p className="text-lg text-gray-600">The foundation of all permaculture decisions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TreePine className="w-8 h-8 text-forest-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-forest-700">1. Earth Care</h3>
                    <p className="text-gray-600">
                      Regenerate and protect ecosystems. Every design must heal rather than harm the natural world.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-sky-700">2. People Care</h3>
                    <p className="text-gray-600">
                      Support humans in meeting their physical, social, and economic needs through sustainable systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-earth-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-earth-700">3. Fair Share</h3>
                    <p className="text-gray-600">
                      Set limits to consumption & population, redistribute surplus to support Earth and People Care.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Key Insight */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 to-earth-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mt-1">
                    <Sparkles className="w-6 h-6 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">The Philosophy Behind It All</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Permaculture is less a set of techniques and more a design philosophy: 
                      <strong> maximum output with minimum intervention, forever.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Dive Deeper?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Now that you understand the foundations, explore the 12 design principles 
                  that guide permaculture thinking and practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/principles">
                    <Button size="lg">
                      Explore the 12 Principles
                    </Button>
                  </Link>
                  <Link href="/ethics">
                    <Button variant="outline" size="lg">
                      Deep Dive: The Ethics
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