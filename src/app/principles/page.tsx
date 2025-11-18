'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, Battery, Target, RefreshCw, Leaf, Recycle, 
  Layers, Link, Zap, Shuffle, MapPin, Waves, ArrowRight 
} from 'lucide-react'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import NextLink from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const principles = [
  {
    number: 1,
    title: "Observe and Interact",
    description: "By taking time to engage with nature we can design solutions that suit our particular situation",
    icon: Eye,
    colour: "forest",
    examples: ["Track sun patterns for 12 months", "Note where water flows after rain", "Identify existing microclimates"]
  },
  {
    number: 2,
    title: "Catch and Store Energy",
    description: "By developing systems that collect resources when abundant, we can use them in times of need",
    icon: Battery,
    colour: "sky",
    examples: ["Rainwater harvesting", "Solar panel installation", "Preserving seasonal produce"]
  },
  {
    number: 3,
    title: "Obtain a Yield",
    description: "Ensure you are getting truly useful rewards as part of the work you are doing",
    icon: Target,
    colour: "earth",
    examples: ["Grow food for your table", "Generate income from excess produce", "Harvest timber for building"]
  },
  {
    number: 4,
    title: "Apply Self-Regulation & Accept Feedback",
    description: "We need to discourage inappropriate activity to ensure systems continue to function well",
    icon: RefreshCw,
    colour: "forest",
    examples: ["Monitor system performance", "Adjust designs based on results", "Set limits on resource use"]
  },
  {
    number: 5,
    title: "Use & Value Renewable Resources",
    description: "Make the best use of nature's abundance to reduce our consumptive behaviour",
    icon: Leaf,
    colour: "sky",
    examples: ["Solar and wind energy", "Biological pest control", "Natural building materials"]
  },
  {
    number: 6,
    title: "Produce No Waste",
    description: "By valuing and making use of all the resources that are available to us, nothing goes to waste",
    icon: Recycle,
    colour: "earth",
    examples: ["Composting organic matter", "Greywater systems", "Upcycling materials"]
  },
  {
    number: 7,
    title: "Design from Patterns to Details",
    description: "By stepping back, we can observe patterns in nature and society to inform our designs",
    icon: Layers,
    colour: "forest",
    examples: ["Study natural succession", "Observe seasonal patterns", "Design zones before selecting plants"]
  },
  {
    number: 8,
    title: "Integrate Rather Than Segregate",
    description: "By putting the right things in the right place, relationships develop between them",
    icon: Link,
    colour: "sky",
    examples: ["Plant guilds that support each other", "Multi-functional landscapes", "Community cooperation"]
  },
  {
    number: 9,
    title: "Use Small & Slow Solutions",
    description: "Small and slow systems are easier to maintain than big ones, making better use of local resources",
    icon: Zap,
    colour: "earth",
    examples: ["Start with a small garden bed", "Gradual system expansion", "Local food networks"]
  },
  {
    number: 10,
    title: "Use & Value Diversity",
    description: "Diversity reduces vulnerability to threats and makes the best use of the environment",
    icon: Shuffle,
    colour: "forest",
    examples: ["Polyculture farming", "Diverse income streams", "Mixed-species plantings"]
  },
  {
    number: 11,
    title: "Use Edges & Value the Marginal",
    description: "The interface between things is where the most interesting events take place",
    icon: MapPin,
    colour: "sky",
    examples: ["Forest-field edges", "Coastal zones", "Urban-rural interfaces"]
  },
  {
    number: 12,
    title: "Creatively Use & Respond to Change",
    description: "We can have a positive impact on inevitable change by carefully observing and intervening at the right time",
    icon: Waves,
    colour: "earth",
    examples: ["Adapt to climate variations", "Turn problems into solutions", "Embrace natural succession"]
  }
]

const colourClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  forest: {
    bg: 'bg-forest-100',
    text: 'text-forest-600',
    border: 'border-forest-200',
    hover: 'hover:border-forest-300'
  },
  sky: {
    bg: 'bg-sky-100',
    text: 'text-sky-600', 
    border: 'border-sky-200',
    hover: 'hover:border-sky-300'
  },
  earth: {
    bg: 'bg-earth-100',
    text: 'text-earth-600',
    border: 'border-earth-200',
    hover: 'hover:border-earth-300'
  }
}

export default function Principles() {
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
              The <span className="gradient-text">12 Design Principles</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              David Holmgren's 12 principles provide a framework for thinking and decision-making in permaculture design. 
              Each principle offers guidance for creating sustainable, regenerative systems.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 to-earth-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Universal Design Principles</h2>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                  These principles are applicable everywhere - from a windowsill herb garden to bioregional planning. 
                  They provide a lens for observing natural systems and designing human habitats that work with, rather than against, nature.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Principles Grid */}
          <motion.section variants={fadeInUp}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div key={principle.number} variants={fadeInUp}>
                  <Card className={`h-full border-2 ${colourClasses[principle.colour].border} ${colourClasses[principle.colour].hover} transition-colors duration-200`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${colourClasses[principle.colour].bg} rounded-full flex items-center justify-center`}>
                          <principle.icon className={`w-6 h-6 ${colourClasses[principle.colour].text}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center justify-center w-6 h-6 ${colourClasses[principle.colour].bg} ${colourClasses[principle.colour].text} rounded-full text-sm font-bold`}>
                              {principle.number}
                            </span>
                            <CardTitle className="text-lg">{principle.title}</CardTitle>
                          </div>
                          <CardDescription className="text-sm">
                            {principle.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {principle.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 ${colourClasses[principle.colour].bg} rounded-full mt-2 flex-shrink-0`}></span>
                              {example}
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

          {/* Integration Note */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-sky-50 to-forest-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Principles Work Together</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  These principles are not meant to be applied in isolation. The most effective permaculture designs 
                  integrate multiple principles simultaneously, creating synergistic relationships that strengthen the whole system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NextLink href="/techniques">
                    <Button size="lg" className="group">
                      Learn Implementation Techniques
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NextLink>
                  <NextLink href="/start">
                    <Button variant="outline" size="lg">
                      Apply Principles Today
                    </Button>
                  </NextLink>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}