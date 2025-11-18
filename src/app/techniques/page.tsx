'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Wind, Droplets, Layers, Scissors, Wrench, 
  Zap, Users, ArrowRight, TreePine, Target
} from 'lucide-react'
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

const techniqueCategories = [
  {
    title: "Zones & Sectors",
    description: "Strategic placement of elements based on use frequency and energy flows",
    icon: MapPin,
    colour: "forest",
    techniques: [
      {
        name: "Zone Planning",
        description: "Place elements by how often you visit them (Zone 0 = house, Zone 5 = wild area)",
        examples: ["Herbs near kitchen (Zone 1)", "Orchard in Zone 3", "Firewood storage in Zone 5"]
      },
      {
        name: "Sector Analysis", 
        description: "Analyze external energies (sun, wind, fire, flood) and channel or block them",
        examples: ["Windbreaks on cold side", "Solar orientation", "Fire-resistant plants in fire sectors"]
      }
    ]
  },
  {
    title: "Plant Systems",
    description: "Creating productive, self-sustaining plant communities that mimic natural ecosystems",
    icon: TreePine,
    colour: "forest",
    techniques: [
      {
        name: "Food Forest Stacking",
        description: "7+ layers: canopy, understory, shrub, herbaceous, groundcover, root, vine",
        examples: ["Apple-hazel-currant-chives guild", "Walnut-elderberry-comfrey stack", "Grape-bean-squash polyculture"]
      },
      {
        name: "Plant Guilds",
        description: "Plant communities where species help each other through nitrogen-fixing, pest control, etc.",
        examples: ["Three Sisters (corn-beans-squash)", "Fruit tree guilds with nitrogen-fixers", "Companion planting systems"]
      }
    ]
  },
  {
    title: "Water Management", 
    description: "Capturing, storing, and cycling water to create resilient hydrated landscapes",
    icon: Droplets,
    colour: "sky",
    techniques: [
      {
        name: "Swales & Keyline",
        description: "Earth works that capture and direct water flow across the landscape",
        examples: ["Contour swales for hillsides", "Keyline ploughing", "Bioswales for urban runoff"]
      },
      {
        name: "Water Harvesting",
        description: "Collecting and storing rainwater, greywater, and natural flows",
        examples: ["Roof catchment systems", "Greywater gardens", "Pond and dam systems"]
      }
    ]
  },
  {
    title: "Soil Building",
    description: "Regenerating and maintaining healthy, living soil through biological processes",
    icon: Layers,
    colour: "earth",
    techniques: [
      {
        name: "No-Till Methods",
        description: "Building soil without disturbing natural structure and fungal networks",
        examples: ["Sheet mulching", "Broadfork cultivation", "Living mulch systems"]
      },
      {
        name: "Composting Systems",
        description: "Converting organic matter into rich soil amendments",
        examples: ["Three-bay composting", "Worm towers", "Chop-and-drop mulching"]
      }
    ]
  },
  {
    title: "Energy Systems",
    description: "Renewable energy generation and passive design for efficient resource use",
    icon: Zap,
    colour: "sky",
    techniques: [
      {
        name: "Passive Solar Design",
        description: "Building orientation and design to maximise solar gain in winter, minimise in summer",
        examples: ["South-facing windows", "Thermal mass placement", "Eave design for seasonal sun angles"]
      },
      {
        name: "Renewable Generation",
        description: "On-site renewable energy production systems",
        examples: ["Solar panels and thermal", "Micro-hydro systems", "Biogas from composting"]
      }
    ]
  },
  {
    title: "Animal Integration",
    description: "Incorporating animals to enhance system productivity and nutrient cycling",
    icon: Users,
    colour: "earth",
    techniques: [
      {
        name: "Rotational Grazing",
        description: "Moving animals sequentially to prepare land and cycle nutrients",
        examples: ["Chicken tractors", "Mob grazing", "Silvopasture systems"]
      },
      {
        name: "Integrated Pest Management",
        description: "Using animals for natural pest and weed control",
        examples: ["Ducks for slug control", "Chickens for pest management", "Goats for brush clearing"]
      }
    ]
  }
]

const colourClasses: Record<string, { bg: string; text: string; border: string }> = {
  forest: {
    bg: 'bg-forest-100',
    text: 'text-forest-600',
    border: 'border-forest-200'
  },
  sky: {
    bg: 'bg-sky-100', 
    text: 'text-sky-600',
    border: 'border-sky-200'
  },
  earth: {
    bg: 'bg-earth-100',
    text: 'text-earth-600',
    border: 'border-earth-200'
  }
}

export default function Techniques() {
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
              <span className="gradient-text">Techniques & Methods</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tools and strategies for implementing permaculture principles. 
              These time-tested techniques help you create productive, resilient systems at any scale.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 to-earth-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">From Principles to Practice</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  These techniques are applications of permaculture principles. Choose methods that suit your climate, 
                  scale, and resources. Start simple and build complexity over time as your system matures.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technique Categories */}
          <motion.section variants={fadeInUp}>
            <div className="space-y-12">
              {techniqueCategories.map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden">
                    <CardHeader className={`${colourClasses[category.colour].bg} p-6`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                          <category.icon className={`w-6 h-6 ${colourClasses[category.colour].text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.title}</CardTitle>
                          <CardDescription className="text-gray-700">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.techniques.map((technique, techniqueIndex) => (
                          <div key={techniqueIndex} className="space-y-3">
                            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                              <div className={`w-2 h-2 ${colourClasses[category.colour].bg} rounded-full`}></div>
                              {technique.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {technique.description}
                            </p>
                            <div>
                              <h5 className="text-sm font-medium text-gray-800 mb-1">Examples:</h5>
                              <ul className="space-y-1">
                                {technique.examples.map((example, exampleIndex) => (
                                  <li key={exampleIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-gray-400">•</span>
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Social Permaculture */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-sky-50 to-forest-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Social Permaculture</h3>
                  <p className="text-gray-600">The invisible structures that support sustainable communities</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Decision Making</h4>
                    <p className="text-sm text-gray-600">Sociocracy, consensus building, and participatory governance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Building</h4>
                    <p className="text-sm text-gray-600">Skill sharing, community gardens, and cooperative economics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <p className="text-sm text-gray-600">Nonviolent communication and conflict resolution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Implementation Guide */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Implementing?</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Remember: observe first, start small, and build your skills gradually. 
                  Each technique you master makes the next one easier to implement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/start">
                    <Button size="lg" className="group">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button variant="outline" size="lg">
                      Find Learning Resources
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