'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Building2, Users, Sprout } from 'lucide-react'
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

const blogPosts = [
  {
    id: 'un-implementation',
    title: 'Permaculture: The Missing Operating System for UN SDG Achievement',
    description: 'Discover how permaculture principles can serve as the foundation for achieving all 17 UN Sustainable Development Goals through coordinated global action.',
    audience: 'UN & International Organizations',
    icon: Globe,
    gradient: 'from-sky-400 to-sky-600',
    cardVariant: 'sky' as const,
    readTime: '12 min read',
    highlights: ['Global coordination frameworks', 'Policy implementation roadmaps', 'Measurable outcomes & verification']
  },
  {
    id: 'national-strategy',
    title: 'National Permaculture Transition: A Bioregional Approach to Sustainable Development',
    description: 'A comprehensive guide for national governments to implement permaculture principles at scale, transforming entire bioregions through policy and economic reform.',
    audience: 'National Governments',
    icon: Building2,
    gradient: 'from-forest-400 to-forest-600',
    cardVariant: 'forest' as const,
    readTime: '15 min read',
    highlights: ['Bioregional planning strategies', 'Economic transformation models', 'Land reform implementation']
  },
  {
    id: 'corporate-sustainability',
    title: 'Regenerative Business Models: How Corporations Can Lead Planetary Restoration',
    description: 'Learn how forward-thinking corporations can integrate permaculture principles into their operations, supply chains, and business models for competitive advantage.',
    audience: 'Corporate Leaders',
    icon: Building2,
    gradient: 'from-earth-400 to-sunset-500',
    cardVariant: 'earth' as const,
    readTime: '10 min read',
    highlights: ['ROI of regenerative practices', 'Supply chain transformation', 'ESG integration strategies']
  },
  {
    id: 'land-management',
    title: 'Practical Permaculture: From Degraded Land to Regenerative Abundance',
    description: 'Hands-on guidance for land managers, farmers, and practitioners to implement permaculture techniques that restore ecosystems while generating sustainable yields.',
    audience: 'Land Managers & Practitioners',
    icon: Sprout,
    gradient: 'from-forest-500 to-earth-500',
    cardVariant: 'forest' as const,
    readTime: '8 min read',
    highlights: ['Soil restoration techniques', 'Water management systems', 'Economic yield optimization']
  }
]

export default function BlogIndex() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="gradient-text block">Global Solutions</span>
                <span className="block">Through Permaculture</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Comprehensive implementation guides for solving the world's greatest challenges using permaculture's conscious design principles and ethics.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Each guide is tailored for specific decision-makers and includes actionable strategies, 
                real-world case studies, and measurable outcomes for implementing permaculture at scale.
              </p>
            </motion.div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {blogPosts.map((post, index) => {
              const IconComponent = post.icon
              return (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Card variant={post.cardVariant} className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${post.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-600 mb-1">{post.audience}</div>
                          <div className="text-sm text-gray-500">{post.readTime}</div>
                        </div>
                      </div>
                      
                      <CardTitle className="mb-4 text-xl leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-gray-700 mb-6 leading-relaxed">
                        {post.description}
                      </CardDescription>

                      <div className="mb-6">
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Topics:</h4>
                        <ul className="space-y-1">
                          {post.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button className="w-full group">
                          Read Full Guide
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Ready to Implement Global Change?</h2>
              <p className="text-gray-700 mb-6">
                These guides represent actionable pathways to solving humanity's greatest challenges. 
                Start with the guide most relevant to your role and sphere of influence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/start">
                  <Button size="lg" className="group">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/sdg">
                  <Button variant="outline" size="lg">
                    Explore UN SDG Connections
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}