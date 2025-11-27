'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Building2, Users, Sprout, Droplets } from 'lucide-react'
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
    id: 'deep-science-of-soil',
    title: 'Deep Science of Soil: A Perpetual Soil Health Elevation Framework',
    description: 'Soil is not “dirt”—it’s a living ecosystem. Discover the core pillars of soil health and a blueprint for perpetual elevation.',
    audience: 'Farmers, Gardeners & Land Managers',
    icon: Sprout,
    gradient: 'from-earth-400 to-earth-600',
    cardVariant: 'earth' as const,
    readTime: '12 min read',
    highlights: ['Soil Physics, Chemistry & Biology', 'Regenerative Techniques', '10-Year Elevation Blueprint']
  },
  {
    id: 'watermans-revolution',
    title: 'The Waterman’s Revolution: Global Solutions to the Water Crisis',
    description: 'A Comprehensive Report on Dr. Rajendra Singh, his proven low-cost techniques for reviving river systems, and their growing global reach.',
    audience: 'Visionary Leaders & Policymakers',
    icon: Droplets,
    gradient: 'from-blue-400 to-blue-600',
    cardVariant: 'sky' as const,
    readTime: '10 min read',
    highlights: ['Community-led water management', 'Low-cost water harvesting', 'Global replication models']
  },
  {
    id: 'composting-101',
    title: 'Composting 101: Turn Kitchen Waste Into Black Gold',
    description: 'Master the science and art of composting. Transform food scraps into nutrient-rich soil with this complete beginner guide.',
    audience: 'Homeowners & Gardeners',
    icon: Sprout,
    gradient: 'from-green-400 to-green-600',
    cardVariant: 'forest' as const,
    readTime: '6 min read',
    highlights: ['Hot vs cold composting', 'Carbon:Nitrogen ratios', 'Troubleshooting tips']
  },
  {
    id: 'water-harvesting-guide',
    title: 'Rainwater Harvesting: Free Water for Your Garden',
    description: 'Capture and store rainwater effectively with systems from simple rain barrels to sophisticated swales.',
    audience: 'Homeowners & Farmers',
    icon: Droplets,
    gradient: 'from-blue-500 to-cyan-600',
    cardVariant: 'sky' as const,
    readTime: '7 min read',
    highlights: ['Rain barrel setup', 'Swale design', 'Cistern systems']
  },
  {
    id: 'food-forest-design',
    title: 'How to Design a Food Forest in Your Backyard',
    description: 'Create a self-maintaining ecosystem that mimics forests while producing abundant food year-round.',
    audience: 'Homeowners & Designers',
    icon: Sprout,
    gradient: 'from-forest-500 to-earth-500',
    cardVariant: 'forest' as const,
    readTime: '8 min read',
    highlights: ['Seven-layer design', 'Guild planting', 'Succession planning']
  },
  {
    id: 'sheet-mulching-guide',
    title: 'Sheet Mulching: Create Garden Beds Without Tilling',
    description: 'Transform lawns into gardens instantly with this no-dig technique that builds soil naturally.',
    audience: 'Gardeners & Homeowners',
    icon: Sprout,
    gradient: 'from-earth-400 to-forest-500',
    cardVariant: 'earth' as const,
    readTime: '5 min read',
    highlights: ['Lasagna layering', 'No-till benefits', 'Weed suppression']
  },
  {
    id: 'herb-spiral-construction',
    title: 'Build a Herb Spiral: Multiple Microclimates in 10 Square Feet',
    description: 'Construct a beautiful herb spiral creating diverse growing conditions in minimal space.',
    audience: 'Urban Gardeners',
    icon: Building2,
    gradient: 'from-purple-400 to-pink-500',
    cardVariant: 'gradient' as const,
    readTime: '6 min read',
    highlights: ['Microclimate zones', 'Construction steps', 'Herb selection']
  },
  {
    id: 'chicken-integration',
    title: 'Integrating Chickens Into Your Permaculture System',
    description: 'Use chickens for pest control, fertilizer, and eggs while maintaining healthy ecosystems.',
    audience: 'Homesteaders & Farmers',
    icon: Users,
    gradient: 'from-orange-400 to-red-500',
    cardVariant: 'earth' as const,
    readTime: '7 min read',
    highlights: ['Chicken tractors', 'Feed integration', 'Manure management']
  },
  {
    id: 'companion-planting',
    title: 'Companion Planting: Which Plants Grow Best Together',
    description: 'Maximize yields and minimize pests through science-backed plant partnerships.',
    audience: 'Gardeners',
    icon: Sprout,
    gradient: 'from-green-500 to-teal-500',
    cardVariant: 'forest' as const,
    readTime: '6 min read',
    highlights: ['Classic combinations', 'Guild planting', 'Pest deterrents']
  },
  {
    id: 'urban-permaculture',
    title: 'Urban Permaculture: Grow Food in Small Spaces',
    description: 'Transform balconies, rooftops, and small yards into productive city ecosystems.',
    audience: 'City Dwellers',
    icon: Building2,
    gradient: 'from-sky-400 to-blue-600',
    cardVariant: 'sky' as const,
    readTime: '7 min read',
    highlights: ['Vertical gardens', 'Container systems', 'Microgreens']
  },
  {
    id: 'perennial-vegetables',
    title: '10 Perennial Vegetables That Grow Year After Year',
    description: 'Reduce work and increase yields with vegetables that return every season.',
    audience: 'Gardeners',
    icon: Sprout,
    gradient: 'from-green-600 to-lime-500',
    cardVariant: 'forest' as const,
    readTime: '5 min read',
    highlights: ['Asparagus', 'Rhubarb', 'Artichokes']
  },
  {
    id: 'greywater-systems',
    title: 'Greywater Systems: Recycle Household Water Safely',
    description: 'Use water from sinks and showers to irrigate gardens with safe, legal systems.',
    audience: 'Homeowners',
    icon: Droplets,
    gradient: 'from-cyan-400 to-blue-500',
    cardVariant: 'sky' as const,
    readTime: '7 min read',
    highlights: ['Legal requirements', 'Filtration basics', 'Plant selection']
  },
  {
    id: 'winter-gardening',
    title: 'Winter Gardening: Grow Food Year-Round',
    description: 'Extend growing seasons with cold frames, hoop houses, and cold-hardy crops.',
    audience: 'Gardeners',
    icon: Sprout,
    gradient: 'from-blue-300 to-indigo-500',
    cardVariant: 'sky' as const,
    readTime: '6 min read',
    highlights: ['Season extension', 'Cold frames', 'Hardy varieties']
  },
  {
    id: 'soil-testing-guide',
    title: 'Soil Testing: Understanding What Your Garden Needs',
    description: 'Test and interpret soil pH, nutrients, and texture for informed amendment decisions.',
    audience: 'Gardeners & Farmers',
    icon: Sprout,
    gradient: 'from-brown-400 to-amber-600',
    cardVariant: 'earth' as const,
    readTime: '6 min read',
    highlights: ['pH testing', 'Nutrient analysis', 'Amendment guide']
  },
  {
    id: 'native-plants-permaculture',
    title: 'Using Native Plants in Permaculture Design',
    description: 'Integrate native plants for resilience, wildlife habitat, and low maintenance.',
    audience: 'Designers & Gardeners',
    icon: Sprout,
    gradient: 'from-emerald-400 to-green-600',
    cardVariant: 'forest' as const,
    readTime: '7 min read',
    highlights: ['Regional selection', 'Wildlife support', 'Ecosystem function']
  },
  {
    id: 'seed-saving-basics',
    title: 'Seed Saving: Preserve Heirlooms and Save Money',
    description: 'Master seed saving to build resilience and genetic diversity in your garden.',
    audience: 'Gardeners',
    icon: Sprout,
    gradient: 'from-yellow-500 to-orange-500',
    cardVariant: 'earth' as const,
    readTime: '6 min read',
    highlights: ['Selection criteria', 'Storage methods', 'Cross-pollination']
  },
  {
    id: 'permaculture-zones',
    title: 'Understanding Permaculture Zones for Efficient Design',
    description: 'Place elements strategically based on frequency of use with the zone system.',
    audience: 'Designers & Planners',
    icon: Globe,
    gradient: 'from-indigo-400 to-purple-600',
    cardVariant: 'gradient' as const,
    readTime: '7 min read',
    highlights: ['Zone 0-5', 'Placement strategy', 'Energy efficiency']
  },
  {
    id: 'biochar-production',
    title: 'Biochar: Ancient Soil Amendment for Modern Gardens',
    description: 'Create biochar to improve soil fertility, water retention, and carbon sequestration.',
    audience: 'Advanced Gardeners',
    icon: Sprout,
    gradient: 'from-gray-700 to-stone-500',
    cardVariant: 'earth' as const,
    readTime: '7 min read',
    highlights: ['Production methods', 'Soil benefits', 'Carbon capture']
  },
  {
    id: 'beneficial-insects',
    title: 'Attracting Beneficial Insects: Natural Pest Control',
    description: 'Design gardens supporting predatory insects and pollinators for ecological balance.',
    audience: 'Organic Gardeners',
    icon: Sprout,
    gradient: 'from-lime-400 to-green-600',
    cardVariant: 'forest' as const,
    readTime: '6 min read',
    highlights: ['Predator attraction', 'Pollinator plants', 'Habitat creation']
  },
  {
    id: 'passive-solar-design',
    title: 'Passive Solar Design: Heat and Cool Naturally',
    description: 'Use sun energy for heating and cooling without mechanical systems.',
    audience: 'Builders & Designers',
    icon: Building2,
    gradient: 'from-amber-400 to-orange-600',
    cardVariant: 'earth' as const,
    readTime: '8 min read',
    highlights: ['Greenhouse design', 'Thermal mass', 'Orientation']
  },
  {
    id: 'mushroom-cultivation',
    title: 'Growing Mushrooms: Add Fungi to Your Food Forest',
    description: 'Cultivate gourmet and medicinal mushrooms with easy beginner methods.',
    audience: 'Food Foresters',
    icon: Sprout,
    gradient: 'from-gray-600 to-stone-700',
    cardVariant: 'earth' as const,
    readTime: '7 min read',
    highlights: ['Log inoculation', 'Shiitake & oyster', 'Bed cultivation']
  },
  {
    id: 'carbon-farming',
    title: 'Carbon Farming: Sequester Carbon While Growing Food',
    description: 'Implement regenerative practices that pull CO₂ from atmosphere while increasing yields.',
    audience: 'Climate-Conscious Farmers',
    icon: Globe,
    gradient: 'from-teal-500 to-emerald-600',
    cardVariant: 'forest' as const,
    readTime: '8 min read',
    highlights: ['Carbon sequestration', 'Regenerative techniques', 'Climate impact']
  },
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