'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, Video, GraduationCap, MapPin, Users, 
  ExternalLink, ArrowRight, Globe, Calendar
} from 'lucide-react'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

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

const books = [
  {
    title: "Permaculture: A Designer's Manual",
    author: "Bill Mollison",
    description: "The comprehensive bible of permaculture - dense but authoritative",
    level: "Advanced",
    type: "Foundational"
  },
  {
    title: "Introduction to Permaculture",
    author: "Bill Mollison",
    description: "More accessible entry point to permaculture concepts",
    level: "Beginner",
    type: "Foundational"
  },
  {
    title: "Gaia's Garden",
    author: "Toby Hemenway", 
    description: "Excellent introduction focusing on home-scale applications",
    level: "Beginner",
    type: "Practical"
  },
  {
    title: "The Permaculture City",
    author: "Toby Hemenway",
    description: "Urban permaculture applications and principles",
    level: "Intermediate",
    type: "Urban"
  },
  {
    title: "Farming the Woods",
    author: "Ken Mudge",
    description: "Comprehensive guide to temperate food forests",
    level: "Intermediate", 
    type: "Food Forest"
  },
  {
    title: "Regenerative Agriculture",
    author: "Richard Perkins",
    description: "Commercial-scale permaculture farming strategies",
    level: "Advanced",
    type: "Commercial"
  }
]

const onlineResources = [
  {
    name: "Geoff Lawton Online",
    url: "geofflawtononline.com",
    description: "Comprehensive video courses from renowned permaculture teacher",
    type: "Courses"
  },
  {
    name: "Milkwood Permaculture",
    url: "milkwood.net",
    description: "Australian-based courses and practical tutorials",
    type: "Courses"
  },
  {
    name: "Oregon State University",
    url: "open.oregonstate.edu/courses/permaculture",
    description: "Free introductory permaculture course",
    type: "Free Course"
  },
  {
    name: "Permaculture Women's Guild",
    url: "permaculturewomen.com",
    description: "Online PDC and community-focused learning",
    type: "Community"
  }
]

const examples = [
  {
    name: "Zaytuna Farm",
    location: "Australia (Jordan demonstration site)",
    teacher: "Geoff Lawton",
    description: "Famous 'greening the desert' project demonstrating dryland permaculture",
    focus: "Dryland restoration"
  },
  {
    name: "Melliodora",
    location: "Australia",
    teacher: "David Holmgren",
    description: "Co-founder's home demonstrating suburban permaculture",
    focus: "Suburban integration"
  },
  {
    name: "Ridgedale Farm", 
    location: "Sweden",
    teacher: "Richard Perkins",
    description: "Commercial-scale proof of permaculture viability in cold climates",
    focus: "Commercial viability"
  },
  {
    name: "Central Rocky Mountain Permaculture Institute",
    location: "Colorado, USA", 
    teacher: "Jerome Osentowski",
    description: "High-altitude, cold-climate food forest demonstrations",
    focus: "Cold climate"
  }
]

export default function Resources() {
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
              <span className="gradient-text">Learning Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated books, courses, and examples to deepen your permaculture knowledge 
              and inspire your own sustainable projects.
            </p>
          </motion.div>

          {/* PDC Information */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 to-earth-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">Permaculture Design Course (PDC)</h2>
                    <p className="text-gray-600">The traditional 72-hour certification programme</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  The standard PDC is a 72-hour curriculum established in the 1980s. After completion, 
                  you can call yourself a "permaculture designer." Quality varies by instructor as there's 
                  no central governing body.
                </p>
                <p className="text-gray-600">
                  <strong>Note:</strong> Choose your PDC carefully - seek out experienced teachers with demonstrated 
                  practical application and strong teaching skills.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Best Books */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-forest-600" />
                Essential Books
              </h2>
              <p className="text-lg text-gray-600">
                Build your permaculture library with these foundational and practical texts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-forest-100 text-forest-800">
                            {book.type}
                          </span>
                          <span className="text-sm text-gray-500">{book.level}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-forest-600 font-medium">{book.author}</p>
                      </div>
                      <p className="text-gray-600 text-sm">{book.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Online Resources */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Globe className="w-8 h-8 text-sky-600" />
                Online Learning
              </h2>
              <p className="text-lg text-gray-600">
                Digital courses and resources for learning permaculture remotely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {onlineResources.map((resource, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{resource.name}</h3>
                          <p className="text-sky-600 font-medium text-sm">{resource.url}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="group">
                        Visit Site
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Famous Examples */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-earth-600" />
                Inspiring Examples
              </h2>
              <p className="text-lg text-gray-600">
                Learn from successful permaculture projects around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{example.name}</h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-earth-100 text-earth-800">
                            {example.focus}
                          </span>
                        </div>
                        <p className="text-earth-600 font-medium text-sm flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {example.location}
                        </p>
                        <p className="text-gray-600 font-medium text-sm">{example.teacher}</p>
                      </div>
                      <p className="text-gray-600 text-sm">{example.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Getting Started */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Choose Your Learning Path</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you prefer books, online courses, or hands-on workshops, 
                  there's a learning style that suits you. Start with observation and basic techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <BookOpen className="mr-2 w-5 h-5" />
                    Start with a Book
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <Video className="mr-2 w-5 h-5" />
                    Take an Online Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}