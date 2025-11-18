'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Globe, Users, Leaf, Award, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent, CardDescription, CardTitle, CardHeader } from '@/components/ui/Card'
import { caseStudies, filterOptions, challengeLabels, scaleLabels, climateLabels } from '@/data/caseStudies'
import { FilterState } from '@/types/caseStudies'

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

export default function CaseStudiesPage() {
  const [filters, setFilters] = useState<FilterState>({
    climate: [],
    scale: [],
    challenge: [],
    search: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch = 
          study.title.toLowerCase().includes(searchLower) ||
          study.subtitle.toLowerCase().includes(searchLower) ||
          study.location.toLowerCase().includes(searchLower) ||
          study.description.toLowerCase().includes(searchLower) ||
          study.techniques.some(tech => tech.toLowerCase().includes(searchLower))
        if (!matchesSearch) return false
      }

      // Climate filter
      if (filters.climate.length > 0 && !filters.climate.includes(study.climate)) {
        return false
      }

      // Scale filter  
      if (filters.scale.length > 0 && !filters.scale.includes(study.scale)) {
        return false
      }

      // Challenge filter
      if (filters.challenge.length > 0) {
        const hasMatchingChallenge = study.challenge.some(challenge => 
          filters.challenge.includes(challenge)
        )
        if (!hasMatchingChallenge) return false
      }

      return true
    })
  }, [filters])

  const toggleFilter = (category: keyof FilterState, value: string) => {
    if (category === 'search') return
    
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value as never)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
  }

  const clearFilters = () => {
    setFilters({
      climate: [],
      scale: [],
      challenge: [],
      search: ''
    })
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text block">Permaculture in Action</span>
                <span className="block text-gray-900">Global Case Studies</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover inspiring real-world permaculture projects documented by Andrew Millison, 
                showcasing regenerative solutions across diverse climates and scales.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-forest-600" />
                <span>8 Global Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-600" />
                <span>Millions Impacted</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-earth-600" />
                <span>Documented by Andrew Millison</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-10 opacity-30"
          >
            <Award className="w-12 h-12 text-forest-500" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-32 right-16 opacity-25"
          >
            <Globe className="w-16 h-16 text-sky-400" />
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies, locations, techniques..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters {Object.values(filters).some(f => f.length > 0) && '(Active)'}
              </Button>
              {Object.values(filters).some(f => f.length > 0) && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-gray-50 rounded-lg"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Climate Filter */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Climate</h3>
                  <div className="space-y-2">
                    {filterOptions.climate.map(climate => (
                      <label key={climate} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.climate.includes(climate)}
                          onChange={() => toggleFilter('climate', climate)}
                          className="rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                        />
                        <span className="ml-2 text-sm">{climateLabels[climate]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scale Filter */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Scale</h3>
                  <div className="space-y-2">
                    {filterOptions.scale.map(scale => (
                      <label key={scale} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.scale.includes(scale)}
                          onChange={() => toggleFilter('scale', scale)}
                          className="rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                        />
                        <span className="ml-2 text-sm">{scaleLabels[scale]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Challenge Filter */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Challenges</h3>
                  <div className="space-y-2">
                    {filterOptions.challenge.map(challenge => (
                      <label key={challenge} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.challenge.includes(challenge)}
                          onChange={() => toggleFilter('challenge', challenge)}
                          className="rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                        />
                        <span className="ml-2 text-sm">{challengeLabels[challenge]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600">
            Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCaseStudies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 mb-4">No case studies match your filters</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </motion.div>
          ) : (
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="grid lg:grid-cols-2 gap-8"
            >
              {filteredCaseStudies.map((study) => (
                <motion.div key={study.id} variants={fadeInUp}>
                  <Card variant="gradient" className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-forest-700">
                            {study.subtitle}
                          </CardDescription>
                          <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            {study.location}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          study.climate === 'arid' ? 'bg-sunset-100 text-sunset-700' :
                          study.climate === 'tropical' ? 'bg-forest-100 text-forest-700' :
                          'bg-sky-100 text-sky-700'
                        }`}>
                          {climateLabels[study.climate]}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-earth-100 text-earth-700">
                          {scaleLabels[study.scale]}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">{study.description}</p>

                      {/* Key Statistics */}
                      <div className="grid grid-cols-2 gap-4">
                        {study.keyStatistics.slice(0, 4).map((stat, index) => (
                          <div key={index} className="text-center p-3 bg-white/50 rounded-lg">
                            <div className="font-bold text-lg text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Solutions Preview */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Solutions:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {study.solutions.slice(0, 3).map((solution, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Leaf className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                          {study.solutions.length > 3 && (
                            <li className="text-forest-600 font-medium">
                              + {study.solutions.length - 3} more solutions
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Impact Preview */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impact Achieved:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {study.impact.slice(0, 2).map((impact, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Award className="w-4 h-4 text-earth-500 mt-0.5 flex-shrink-0" />
                              {impact}
                            </li>
                          ))}
                          {study.impact.length > 2 && (
                            <li className="text-earth-600 font-medium">
                              + {study.impact.length - 2} more impacts
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* UN SDGs */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">UN SDGs Addressed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.unSdgs.map(sdg => (
                            <span
                              key={sdg}
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-400 to-sky-400 text-white text-xs font-bold flex items-center justify-center"
                            >
                              {sdg}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Techniques */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Techniques Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.techniques.map((technique, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
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
              Ready to <span className="gradient-text">Start Your Own</span> Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              These case studies demonstrate that permaculture solutions work at every scale. 
              Learn the techniques and principles to create your own regenerative systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/techniques">
                <Button size="lg" className="group">
                  Explore Techniques
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/start">
                <Button variant="secondary" size="lg" className="group">
                  Getting Started Guide
                  <Users className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}