'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Users, Globe, Sparkles, Target, BookOpen, Map, Building2 } from 'lucide-react'
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
                A comprehensive guide featuring design principles, practical techniques, real-world case studies,
                and strategic implementation guides - all aligned with the UN Sustainable Development Goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/introduction">
                <Button size="lg" className="group text-black">
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

      {/* Choose Your Path Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-white to-earth-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Choose <span className="gradient-text">Your Path</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Whether you're exploring permaculture for the first time or ready to scale solutions globally,
              we have a pathway designed for your journey.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/introduction">
                <Card variant="forest" className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-center mb-2">New to Permaculture?</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Start with the basics and understand core concepts
                    </p>
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-forest-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/case-studies">
                <Card variant="sky" className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Map className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-center mb-2">Want Inspiration?</h3>
                    <p className="text-gray-600 text-center text-sm">
                      See real-world case studies and success stories
                    </p>
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-sky-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/start">
                <Card variant="earth" className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-earth-400 to-sunset-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-center mb-2">Ready to Start?</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Take practical steps and find opportunities
                    </p>
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-earth-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/sdg">
                <Card variant="gradient" className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-center mb-2">Scaling Solutions?</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Explore global impact and implementation guides
                    </p>
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Complete <span className="gradient-text">Permaculture Toolkit</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From foundational principles to real-world implementation, explore every aspect of creating regenerative systems.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/principles">
                <Card variant="forest" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-forest-700">12 Design Principles</CardTitle>
                    <CardDescription className="text-gray-700">
                      Universal design principles that guide sustainable decision-making from garden to bioregion.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/techniques">
                <Card variant="earth" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-earth-400 to-sunset-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-earth-700">Practical Techniques</CardTitle>
                    <CardDescription className="text-gray-700">
                      Proven methods for water management, soil building, energy systems, and food production.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/case-studies">
                <Card variant="sky" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Map className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-sky-700">Global Case Studies</CardTitle>
                    <CardDescription className="text-gray-700">
                      Real-world examples from Andrew Millison's documentation of permaculture projects worldwide.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/sdg">
                <Card variant="gradient" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-gray-800">UN SDG Alignment</CardTitle>
                    <CardDescription className="text-gray-700">
                      Discover how permaculture directly addresses all 17 UN Sustainable Development Goals.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/blog">
                <Card variant="forest" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-forest-700">Implementation Guides</CardTitle>
                    <CardDescription className="text-gray-700">
                      Strategic guides for governments, corporations, and practitioners to implement at scale.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/resources">
                <Card variant="earth" className="text-center h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="mb-4 text-earth-700">Learning Resources</CardTitle>
                    <CardDescription className="text-gray-700">
                      Curated books, courses, videos, and inspiring examples to deepen your knowledge.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Concepts Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Ethical <span className="gradient-text">Foundation</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every permaculture design is guided by three core ethics that ensure our solutions benefit both people and planet.
              These ethics form the foundation for all the principles, techniques, and implementations you'll explore.
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

      {/* Featured Content Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Content Highlights</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover key insights from our comprehensive permaculture resources.
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
              <Card variant="gradient" className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-forest-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-forest-700">Principle Spotlight</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    "Observe and Interact" - The first principle teaches us to take time to engage with nature
                    before designing solutions that suit our particular situation.
                  </CardDescription>
                  <Link href="/principles">
                    <Button variant="outline" size="sm" className="group">
                      Explore All 12 Principles
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card variant="gradient" className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-sky-700">Case Study Feature</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    The Loess Plateau restoration in China demonstrates how large-scale ecosystem restoration
                    can lift millions from poverty while sequestering massive amounts of carbon.
                  </CardDescription>
                  <Link href="/case-studies">
                    <Button variant="outline" size="sm" className="group">
                      View All Case Studies
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card variant="gradient" className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-earth-400 to-sunset-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-4 text-earth-700">SDG Connection</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Permaculture directly addresses SDG 13 (Climate Action) through carbon sequestration,
                    regenerative agriculture, and building climate-resilient ecosystems.
                  </CardDescription>
                  <Link href="/sdg">
                    <Button variant="outline" size="sm" className="group">
                      Explore SDG Alignment
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/principles">
                <Button variant="outline" size="lg" className="group w-full">
                  Learn Principles
                  <Target className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="group w-full">
                  See Examples
                  <Map className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/start">
                <Button size="lg" className="group w-full">
                  Start Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/sdg">
                <Button variant="secondary" size="lg" className="group w-full">
                  Global Solutions
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
