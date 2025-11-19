'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
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
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-1.gif",
    examples: ["Track sun patterns for 12 months", "Note where water flows after rain", "Identify existing microclimates"]
  },
  {
    number: 2,
    title: "Catch and Store Energy",
    description: "By developing systems that collect resources when abundant, we can use them in times of need",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-2.gif",
    examples: ["Rainwater harvesting", "Solar panel installation", "Preserving seasonal produce"]
  },
  {
    number: 3,
    title: "Obtain a Yield",
    description: "Ensure you are getting truly useful rewards as part of the work you are doing",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-3.gif",
    examples: ["Grow food for your table", "Generate income from excess produce", "Harvest timber for building"]
  },
  {
    number: 4,
    title: "Apply Self-Regulation & Accept Feedback",
    description: "We need to discourage inappropriate activity to ensure systems continue to function well",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-4.gif",
    examples: ["Monitor system performance", "Adjust designs based on results", "Set limits on resource use"]
  },
  {
    number: 5,
    title: "Use & Value Renewable Resources",
    description: "Make the best use of nature's abundance to reduce our consumptive behaviour",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-5.gif",
    examples: ["Solar and wind energy", "Biological pest control", "Natural building materials"]
  },
  {
    number: 6,
    title: "Produce No Waste",
    description: "By valuing and making use of all the resources that are available to us, nothing goes to waste",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-6.gif",
    examples: ["Composting organic matter", "Greywater systems", "Upcycling materials"]
  },
  {
    number: 7,
    title: "Design from Patterns to Details",
    description: "By stepping back, we can observe patterns in nature and society to inform our designs",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-7.gif",
    examples: ["Study natural succession", "Observe seasonal patterns", "Design zones before selecting plants"]
  },
  {
    number: 8,
    title: "Integrate Rather Than Segregate",
    description: "By putting the right things in the right place, relationships develop between them",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-8.gif",
    examples: ["Plant guilds that support each other", "Multi-functional landscapes", "Community cooperation"]
  },
  {
    number: 9,
    title: "Use Small & Slow Solutions",
    description: "Small and slow systems are easier to maintain than big ones, making better use of local resources",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-9.gif",
    examples: ["Start with a small garden bed", "Gradual system expansion", "Local food networks"]
  },
  {
    number: 10,
    title: "Use & Value Diversity",
    description: "Diversity reduces vulnerability to threats and makes the best use of the environment",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-10.gif",
    examples: ["Polyculture farming", "Diverse income streams", "Mixed-species plantings"]
  },
  {
    number: 11,
    title: "Use Edges & Value the Marginal",
    description: "The interface between things is where the most interesting events take place",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-11.gif",
    examples: ["Forest-field edges", "Coastal zones", "Urban-rural interfaces"]
  },
  {
    number: 12,
    title: "Creatively Use & Respond to Change",
    description: "We can have a positive impact on inevitable change by carefully observing and intervening at the right time",
    colour: "default",
    imagePath: "/images/Permaculture principles/Pc-Icons-Principle-12.gif",
    examples: ["Adapt to climate variations", "Turn problems into solutions", "Embrace natural succession"]
  }
]

const colourClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  default: {
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    border: 'border-gray-200',
    hover: 'hover:border-gray-300'
  },
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
  },
  lightGreen: {
    bg: 'bg-lightGreen-100',
    text: 'text-lightGreen-600',
    border: 'border-lightGreen-200',
    hover: 'hover:border-lightGreen-300'
  },
  cyan: {
    bg: 'bg-cyan-100',
    text: 'text-cyan-600',
    border: 'border-cyan-200',
    hover: 'hover:border-cyan-300'
  },
  mediumBlue: {
    bg: 'bg-mediumBlue-100',
    text: 'text-mediumBlue-600',
    border: 'border-mediumBlue-200',
    hover: 'hover:border-mediumBlue-300'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-300'
  },
  magenta: {
    bg: 'bg-magenta-100',
    text: 'text-magenta-600',
    border: 'border-magenta-200',
    hover: 'hover:border-magenta-300'
  },
  rosePink: {
    bg: 'bg-rosePink-100',
    text: 'text-rosePink-600',
    border: 'border-rosePink-200',
    hover: 'hover:border-rosePink-300'
  },
  coral: {
    bg: 'bg-coral-100',
    text: 'text-coral-600',
    border: 'border-coral-200',
    hover: 'hover:border-coral-300'
  },
  peach: {
    bg: 'bg-peach-100',
    text: 'text-peach-600',
    border: 'border-peach-200',
    hover: 'hover:border-peach-300'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-300'
  },
  paleYellow: {
    bg: 'bg-paleYellow-100',
    text: 'text-paleYellow-600',
    border: 'border-paleYellow-200',
    hover: 'hover:border-paleYellow-300'
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              David Holmgren's 12 principles provide a framework for thinking and decision-making in permaculture design. 
              Each principle offers guidance for creating sustainable, regenerative systems.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section variants={fadeInUp}>
            <Card variant="gradient">
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
              {principles.map((principle) => (
                <motion.div key={principle.number} variants={fadeInUp}>
                  <Card variant={principle.colour as 'default'} className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden`}>
                          <Image 
                            src={principle.imagePath} 
                            alt={`${principle.title} icon`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
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
            <Card variant="gradient">
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