'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sprout, MapPin, Droplets, Users, CheckCircle, Clock, Target, TrendingUp } from 'lucide-react'
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

// Core techniques for land restoration
const coreTechniques = [
  {
    title: 'Soil Regeneration Systems',
    description: 'Transform degraded soils into fertile, carbon-rich growing media',
    permaculture: 'Use & Value Renewable Resources',
    timeframe: '2-5 years for full restoration',
    techniques: ['Composting and vermiculture systems', 'Cover crop rotations and green manures', 'Biochar production and application', 'Microbial inoculation programmes'],
    results: '300-500% increase in soil organic matter, 5-20 tonnes CO₂/hectare/year sequestration'
  },
  {
    title: 'Water Harvesting & Management',
    description: 'Capture, store, and infiltrate water to recharge landscapes',
    permaculture: 'Catch & Store Energy',
    timeframe: '1-3 years for system establishment',
    techniques: ['Contour swales and keyline design', 'Rainwater harvesting systems', 'Constructed wetlands', 'Greywater recycling systems'],
    results: '200-400% increase in water availability, elimination of erosion, microclimate improvement'
  },
  {
    title: 'Polyculture Food Systems',
    description: 'Design diverse, productive plant communities that mimic natural ecosystems',
    permaculture: 'Use & Value Diversity',
    timeframe: '3-7 years for mature systems',
    techniques: ['Food forest design and establishment', 'Companion planting guilds', 'Succession planting strategies', 'Perennial crop integration'],
    results: '3-10× yield increase per hectare, 90% reduction in external inputs, enhanced biodiversity'
  },
  {
    title: 'Regenerative Grazing',
    description: 'Use livestock as tools for land restoration and carbon sequestration',
    permaculture: 'Integrate Rather Than Segregate',
    timeframe: '1-2 years for system implementation',
    techniques: ['Holistic planned grazing', 'Mob grazing rotations', 'Silvopasture systems', 'Poultry tractor integration'],
    results: '150-300% increase in grass productivity, soil carbon building, biodiversity enhancement'
  }
]

// Zone and sector analysis examples
const zoneExamples = [
  {
    zone: 'Zone 0',
    description: 'Home/Centre of Operations',
    activities: ['Energy-efficient building design', 'Kitchen garden for daily harvest', 'Composting systems', 'Rainwater collection'],
    investment: 'High attention, daily observation'
  },
  {
    zone: 'Zone 1', 
    description: 'Daily Management Area',
    activities: ['Vegetable gardens and herbs', 'Small animal systems', 'Tool storage and processing', 'Nursery and propagation'],
    investment: 'Daily to weekly management'
  },
  {
    zone: 'Zone 2',
    description: 'Semi-Intensive Production',
    activities: ['Orchard and nut trees', 'Annual crop rotations', 'Aquaculture ponds', 'Intensive grazing paddocks'],
    investment: 'Weekly to monthly management'
  },
  {
    zone: 'Zone 3',
    description: 'Extensive Production',
    activities: ['Field crops and pasture', 'Timber production', 'Extensive grazing', 'Water storage systems'],
    investment: 'Monthly to seasonal management'
  },
  {
    zone: 'Zone 4',
    description: 'Managed Natural Systems',
    activities: ['Selective harvesting', 'Wildlife habitat', 'Watershed protection', 'Carbon forestry'],
    investment: 'Seasonal to annual management'
  },
  {
    zone: 'Zone 5',
    description: 'Wilderness Preservation',
    activities: ['Biodiversity conservation', 'Research and observation', 'Spiritual/recreational space', 'Climate regulation'],
    investment: 'Observation only, no active management'
  }
]

// Economic returns analysis
const economicReturns = [
  { system: 'Diversified Food Forest', investment: '$5,000-15,000/hectare', annual_return: '$8,000-25,000/hectare', payback: '2-3 years', additional: 'Carbon credits: $500-2,000/hectare/year' },
  { system: 'Regenerative Market Garden', investment: '$3,000-8,000/hectare', annual_return: '$15,000-40,000/hectare', payback: '1-2 years', additional: 'Premium pricing for organic produce' },
  { system: 'Silvopasture System', investment: '$2,000-5,000/hectare', annual_return: '$3,000-8,000/hectare', payback: '2-4 years', additional: 'Reduced feed costs, animal welfare premium' },
  { system: 'Agroforestry Timber', investment: '$1,000-3,000/hectare', annual_return: '$2,000-6,000/hectare', payback: '3-5 years', additional: 'Long-term timber value appreciation' }
]

// Implementation phases for land managers
const implementationPhases = [
  {
    phase: 'Year 1: Observation & Design',
    focus: 'Understanding your land and creating master plan',
    budget: '$2,000-5,000',
    activities: ['Site analysis and mapping', 'Soil testing and assessment', 'Water flow observation', 'Climate and microclimate study', 'Permaculture design course', 'Master plan creation'],
    outcomes: ['Complete understanding of land patterns', 'Detailed implementation roadmap', 'Regulatory compliance planning']
  },
  {
    phase: 'Year 2-3: Infrastructure & Foundation',
    focus: 'Establishing water, soil, and access systems',
    budget: '$5,000-20,000',
    activities: ['Water harvesting system installation', 'Access road and path development', 'Soil preparation and amendment', 'Composting system establishment', 'Initial tree planting', 'Fencing and animal systems'],
    outcomes: ['Functional water management', 'Improved soil health', 'Basic infrastructure complete']
  },
  {
    phase: 'Year 4-5: Production System Development',
    focus: 'Establishing productive growing systems',
    budget: '$8,000-25,000',
    activities: ['Food forest expansion', 'Annual production areas', 'Livestock integration', 'Processing facilities', 'Storage systems', 'Marketing development'],
    outcomes: ['Steady food production', 'Revenue generation', 'System integration']
  },
  {
    phase: 'Year 6-10: Optimization & Expansion',
    focus: 'Refining systems and scaling successful elements',
    budget: 'Self-funding from production',
    activities: ['System refinement and optimization', 'New area development', 'Value-added processing', 'Education and demonstration', 'Mentoring other practitioners', 'Policy engagement'],
    outcomes: ['Mature productive systems', 'Economic sustainability', 'Community leadership role']
  }
]

export default function LandManagementBlog() {
  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-forest-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-forest-600 hover:text-forest-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Global Solutions
          </Link>
          
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-4">
                <Sprout className="w-4 h-4 mr-2" />
                Land Managers & Practitioners
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Practical Permaculture: From <span className="gradient-text">Degraded Land</span> to Regenerative Abundance
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Hands-on guidance for land managers, farmers, and practitioners to implement permaculture techniques that restore ecosystems while generating sustainable yields and meaningful livelihoods.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Practical Implementation
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Economic Viability
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            {/* Executive Summary */}
            <div className="bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl p-8 mb-12 border border-forest-200">
              <h2 className="text-2xl font-bold text-forest-900 mb-4">From Degradation to Abundance</h2>
              <p className="text-forest-800 leading-relaxed mb-4">
                <strong>The Challenge:</strong> Conventional land management has degraded soils, depleted water systems, and reduced biodiversity while requiring ever-increasing inputs for diminishing returns.
              </p>
              <p className="text-forest-800 leading-relaxed mb-4">
                <strong>The Opportunity:</strong> Permaculture design principles enable land managers to restore degraded landscapes while creating highly productive, profitable, and resilient systems.
              </p>
              <p className="text-forest-800 leading-relaxed">
                <strong>The Results:</strong> Properly designed permaculture systems generate 3-10× higher yields, eliminate external input dependency, sequester 5-20 tonnes of CO₂ per hectare annually, and create multiple revenue streams.
              </p>
            </div>

            {/* Why Conventional Land Management Fails */}
            <h2 className="text-3xl font-bold mb-6">Why Conventional Land Management Is Failing</h2>
            
            <p className="mb-6">
              Industrial agriculture and conventional land management treat symptoms rather than addressing root causes, creating cycles of degradation that require ever-increasing inputs to maintain declining productivity.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">The Degradation Cycle:</h3>
              <ul className="text-red-800 space-y-2">
                <li>• <strong>Soil Depletion:</strong> Chemical fertilisers destroy soil biology and organic matter</li>
                <li>• <strong>Water Loss:</strong> Compaction and bare soil reduce water infiltration and storage</li>
                <li>• <strong>Biodiversity Collapse:</strong> Monocultures eliminate beneficial insects and soil organisms</li>
                <li>• <strong>Input Dependency:</strong> Degraded systems require increasing external inputs</li>
                <li>• <strong>Economic Vulnerability:</strong> Dependence on volatile commodity markets and input costs</li>
              </ul>
            </div>

            <p className="mb-8">
              Permaculture design reverses this cycle by working with natural patterns and processes to create <strong>regenerative systems</strong> that improve over time while reducing inputs and increasing yields.
            </p>

            {/* The Permaculture Design Process */}
            <h2 className="text-3xl font-bold mb-6">The Permaculture Design Process: Your Roadmap to Success</h2>
            
            <p className="mb-6">
              Successful permaculture implementation follows a proven design process based on careful observation, thoughtful planning, and systematic implementation of the 12 design principles.
            </p>

            <h3 className="text-2xl font-bold mb-4">Zone and Sector Analysis: The Foundation of Design</h3>
            
            <p className="mb-6">
              Every permaculture design begins with zone and sector analysis—understanding how energy flows through your land and organising activities based on frequency of use and energy requirements.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-b">Zone</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Description</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Key Activities</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Management Level</th>
                  </tr>
                </thead>
                <tbody>
                  {zoneExamples.map((zone, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-forest-700">{zone.zone}</td>
                      <td className="px-4 py-3 text-gray-700">{zone.description}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">
                        <ul className="space-y-1">
                          {zone.activities.slice(0, 2).map((activity, idx) => (
                            <li key={idx}>• {activity}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-earth-600 text-sm font-medium">{zone.investment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Core Restoration Techniques */}
            <h2 className="text-3xl font-bold mb-6">Four Core Restoration Techniques for Any Climate</h2>
            
            <p className="mb-8">
              These four fundamental techniques can transform any degraded landscape into a productive, regenerative system, regardless of climate, soil type, or starting conditions.
            </p>

            <div className="space-y-8 mb-12">
              {coreTechniques.map((technique, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{technique.title}</h3>
                      <p className="text-gray-700 mb-2">{technique.description}</p>
                      <p className="text-forest-600 text-sm font-medium">Permaculture Principle: {technique.permaculture}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm text-gray-600">Timeline</p>
                      <p className="font-medium text-earth-600">{technique.timeframe}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Implementation Techniques:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {technique.techniques.map((tech, idx) => (
                        <div key={idx} className="text-gray-700 flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-forest-100 rounded-lg p-4">
                    <p className="text-forest-800 font-medium text-sm">Expected Results: {technique.results}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Economic Viability */}
            <h2 className="text-3xl font-bold mb-6">Economic Viability: Multiple Revenue Streams from Regenerative Systems</h2>
            
            <p className="mb-6">
              Well-designed permaculture systems generate multiple revenue streams while building long-term asset value through soil improvement, water retention, and biodiversity enhancement.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-b">System Type</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Initial Investment</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Annual Returns</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Payback Period</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Additional Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {economicReturns.map((system, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-forest-700">{system.system}</td>
                      <td className="px-4 py-3 text-gray-700">{system.investment}</td>
                      <td className="px-4 py-3 text-earth-600 font-medium">{system.annual_return}</td>
                      <td className="px-4 py-3 text-sky-600">{system.payback}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{system.additional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-earth-50 border border-earth-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-earth-900 mb-3">Revenue Stream Diversification:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Production Revenue</h4>
                  <ul className="space-y-1 text-earth-800 text-sm">
                    <li>• Fresh produce sales to restaurants and farmers markets</li>
                    <li>• Value-added products (preserves, herbs, teas)</li>
                    <li>• Livestock products (meat, eggs, dairy)</li>
                    <li>• Timber and fibre crops for construction</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-sky-700 mb-2">Service & Experience Revenue</h4>
                  <ul className="space-y-1 text-sky-800 text-sm">
                    <li>• Permaculture design and consultation services</li>
                    <li>• Educational workshops and courses</li>
                    <li>• Agritourism and farm stays</li>
                    <li>• Carbon credit sales and ecosystem services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 10-Year Implementation Timeline */}
            <h2 className="text-3xl font-bold mb-6">Your 10-Year Land Regeneration Timeline</h2>
            
            <p className="mb-8">
              Successful permaculture development requires patient, systematic implementation that builds upon earlier investments while generating returns to fund continued expansion.
            </p>

            <div className="space-y-6 mb-12">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-forest-50 to-earth-50 rounded-lg p-6 border border-forest-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-forest-900 mb-1">{phase.phase}</h3>
                      <p className="text-earth-600 font-medium">{phase.focus}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Typical Budget</p>
                      <p className="font-bold text-earth-600">{phase.budget}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="text-gray-700 flex items-center text-sm">
                          <Target className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-forest-100 rounded-lg p-4">
                    <h4 className="font-semibold text-forest-800 mb-2">Expected Outcomes:</h4>
                    <ul className="space-y-1">
                      {phase.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-forest-700 text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-forest-600 mr-2 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Challenges and Solutions */}
            <h2 className="text-3xl font-bold mb-6">Overcoming Common Implementation Challenges</h2>
            
            <p className="mb-6">
              Every land manager faces predictable challenges when transitioning to permaculture systems. Understanding these challenges and their solutions ensures successful implementation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-bold text-red-700 mb-1">Challenge: Initial Capital Requirements</h4>
                <p className="text-gray-700 mb-2">Upfront investment in infrastructure and tree establishment seems daunting.</p>
                <p className="text-green-700 font-medium">Solution: Phase implementation to generate early returns that fund expansion. Start with high-return annual systems.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-1">Challenge: Knowledge and Skill Gaps</h4>
                <p className="text-gray-700 mb-2">Permaculture requires different skills than conventional farming.</p>
                <p className="text-green-700 font-medium">Solution: Take a Permaculture Design Course, find local mentors, join practitioner networks.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-700 mb-1">Challenge: Market Development</h4>
                <p className="text-gray-700 mb-2">Finding buyers for diverse, seasonal produce can be difficult initially.</p>
                <p className="text-green-700 font-medium">Solution: Start with direct sales (farmers markets, CSA), build relationships with local chefs.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-bold text-purple-700 mb-1">Challenge: Regulatory Compliance</h4>
                <p className="text-gray-700 mb-2">Permaculture systems may not fit standard agricultural regulations.</p>
                <p className="text-green-700 font-medium">Solution: Work with local officials, demonstrate benefits, join policy advocacy groups.</p>
              </div>
            </div>

            {/* Measuring Success */}
            <h2 className="text-3xl font-bold mb-6">Measuring Success: Beyond Yield Per Hectare</h2>
            
            <p className="mb-6">
              Permaculture systems create value across multiple dimensions that conventional agriculture ignores. Comprehensive measurement captures the true value of regenerative land management.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card variant="forest" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-forest-700">Ecological Health</CardTitle>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Soil organic matter increase</li>
                    <li>• Biodiversity index growth</li>
                    <li>• Carbon sequestration rates</li>
                    <li>• Water infiltration improvement</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="sky" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-sky-700">Economic Performance</CardTitle>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Profit per hectare</li>
                    <li>• Return on investment</li>
                    <li>• Revenue diversification</li>
                    <li>• Input cost reduction</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="earth" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-earth-700">Social Impact</CardTitle>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Community engagement</li>
                    <li>• Education and demonstration</li>
                    <li>• Local employment creation</li>
                    <li>• Cultural preservation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Climate Adaptation */}
            <h2 className="text-3xl font-bold mb-6">Climate Adaptation: Building Resilient Systems</h2>
            
            <p className="mb-6">
              Permaculture systems are inherently more resilient to climate change because they work with natural patterns, maintain diversity, and build biological capital that adapts to changing conditions.
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-sky-900 mb-3">Climate Resilience Strategies:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Water Security</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Multiple water sources and storage systems</li>
                    <li>• Drought-tolerant plant selections</li>
                    <li>• Soil water retention enhancement</li>
                    <li>• Microclimate creation for cooling</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Biological Diversity</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Genetic diversity in crop varieties</li>
                    <li>• Multiple species for each function</li>
                    <li>• Beneficial insect habitat</li>
                    <li>• Adaptive management practices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started Today */}
            <h2 className="text-3xl font-bold mb-6">Getting Started Today: Your First Steps</h2>
            
            <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-2xl p-8 border border-forest-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Immediate Actions You Can Take This Week</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Observation & Planning</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Walk your land at different times and seasons</li>
                    <li>• Map existing features, slopes, and water flows</li>
                    <li>• Test soil pH, organic matter, and nutrient levels</li>
                    <li>• Research local climate patterns and microclimates</li>
                    <li>• Identify existing resources and potential challenges</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Learning & Community</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enrol in a Permaculture Design Course</li>
                    <li>• Visit successful permaculture projects nearby</li>
                    <li>• Join local permaculture groups and online forums</li>
                    <li>• Start reading permaculture books and resources</li>
                    <li>• Begin a simple composting system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Conclusion: Your Land, Your Legacy</h2>
              
              <p className="mb-6 text-lg">
                Every piece of land has the potential to become a regenerative system that supports abundant life while providing economic returns. The permaculture principles and techniques outlined here have been proven successful in every climate and context worldwide.
              </p>
              
              <p className="mb-8 text-lg">
                The question is not whether these methods work—they do. The question is whether you will take the first step towards transforming your land into a legacy of abundance for future generations.
              </p>
              
              <div className="text-center">
                <p className="text-xl font-bold text-forest-700 mb-6">
                  Every degraded landscape is an opportunity. Every restored hectare is a victory. Every regenerative farm is a beacon of hope.
                </p>
                <p className="text-lg text-gray-700">
                  Your land is waiting. The techniques are proven. The community is ready to support you.
                  <br />
                  Start today. Transform your land. Change the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Land?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            This guide provides the foundation for regenerative land management. 
            Your journey from degradation to abundance begins with the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="group">
                Start Your Permaculture Journey
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/techniques">
              <Button variant="outline" size="lg">
                Explore Techniques & Methods
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}