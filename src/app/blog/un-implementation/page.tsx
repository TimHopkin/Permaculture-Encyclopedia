'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Globe, Target, TrendingUp, Users, CheckCircle, Clock, MapPin } from 'lucide-react'
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

// Phase data for the implementation roadmap
const phases = [
  {
    phase: 'Phase 0',
    years: '2025–2027',
    title: 'Proof-of-Concept Hubs',
    description: 'Zone 0–1 demonstration sites',
    target: '1,000 sites globally',
    focus: ['Establish demonstration centres in all bioregions', 'Develop standardised monitoring protocols', 'Build international coordination networks']
  },
  {
    phase: 'Phase 1', 
    years: '2027–2032',
    title: 'Bioregional Transition',
    description: 'Zone 2–3 scaling',
    target: '200 bioregions',
    focus: ['Scale proven models to bioregional level', 'Implement policy frameworks', 'Establish regenerative finance mechanisms']
  },
  {
    phase: 'Phase 2',
    years: '2032–2040',
    title: 'Continental Regeneration',
    description: 'Zone 4 integration',
    target: '80% land & water coverage',
    focus: ['Continental-scale ecosystem restoration', 'Economic system transformation', 'Full circular economy implementation']
  },
  {
    phase: 'Phase 3',
    years: '2040–2050',
    title: 'Planetary Steady-State',
    description: 'Zone 5 wilderness + feedback loops',
    target: 'Net-positive Earth',
    focus: ['Achieve planetary regeneration', 'Maintain steady-state civilisation', 'Global climate stabilisation']
  }
]

// SDG mapping data
const sdgMappings = [
  { sdg: 'SDG 1', title: 'No Poverty', permaculture: 'Obtain a Yield + People Care', impact: 'Universal Regenerative Basic Income via ecosystem services' },
  { sdg: 'SDG 2', title: 'Zero Hunger', permaculture: 'Integrate Rather Than Segregate', impact: '3-10× calorie yield through syntropic systems' },
  { sdg: 'SDG 6', title: 'Clean Water', permaculture: 'Catch & Store Energy', impact: '+100% groundwater recharge via landscape restoration' },
  { sdg: 'SDG 7', title: 'Clean Energy', permaculture: 'Use Renewable Resources', impact: 'Decentralised renewable energy in every bioregion' },
  { sdg: 'SDG 13', title: 'Climate Action', permaculture: 'Produce No Waste', impact: '5-20 tonnes CO₂/hectare/year soil sequestration' },
  { sdg: 'SDG 15', title: 'Life on Land', permaculture: 'Use & Value Diversity', impact: 'Rewild 50% of Earth while feeding 10 billion' }
]

export default function UNImplementationBlog() {
  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-sky-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Global Solutions
          </Link>
          
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-2" />
                UN & International Organizations
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Permaculture: The Missing <span className="gradient-text">Operating System</span> for UN SDG Achievement
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                How permaculture principles can serve as the foundation for achieving all 17 UN Sustainable Development Goals through coordinated global action and measurable outcomes.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Policy Framework
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Global Implementation
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
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 mb-12 border border-sky-200">
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Executive Summary</h2>
              <p className="text-sky-800 leading-relaxed mb-4">
                <strong>The Challenge:</strong> Despite 8 years of SDG implementation, we are off track to achieve any of the 17 goals by 2030. Current approaches treat symptoms rather than addressing systemic interconnections.
              </p>
              <p className="text-sky-800 leading-relaxed mb-4">
                <strong>The Solution:</strong> Permaculture is the only existing design system that simultaneously satisfies the three core ethics (Earth Care, People Care, Fair Share) while producing measurable progress on every single UN SDG through its 12 conscious design principles.
              </p>
              <p className="text-sky-800 leading-relaxed">
                <strong>The Opportunity:</strong> When applied at planetary scale with modern systems thinking, distributed governance, and exponential technology, permaculture becomes the operating system for a regenerative civilisation achieving all SDGs by 2050.
              </p>
            </div>

            {/* The Current Crisis */}
            <h2 className="text-3xl font-bold mb-6">The Current Crisis: Why Traditional Approaches Are Failing</h2>
            
            <p className="mb-6">
              The 2023 UN SDG Progress Report reveals a stark reality: we are failing to achieve the Sustainable Development Goals. Climate change, biodiversity loss, inequality, and food insecurity are accelerating despite billions invested in development aid and sustainability initiatives.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">Critical Statistics (2024):</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Only 12% of SDG targets are on track</li>
                <li>• 735 million people still in extreme poverty (SDG 1)</li>
                <li>• 900 million face severe food insecurity (SDG 2)</li>
                <li>• 2 billion lack safe water access (SDG 6)</li>
                <li>• Global temperature rise accelerating toward 1.5°C (SDG 13)</li>
              </ul>
            </div>

            <p className="mb-8">
              The fundamental issue is <strong>fragmentation</strong>. We treat each SDG as a separate challenge requiring separate solutions, missing the deep interconnections between social, ecological, and economic systems. Permaculture offers a unified framework that addresses these interconnections systematically.
            </p>

            {/* The Permaculture Solution */}
            <h2 className="text-3xl font-bold mb-6">The Permaculture Solution: A Unified Framework</h2>
            
            <p className="mb-6">
              Permaculture is not just another sustainability approach—it is a <strong>complete design science</strong> developed by Bill Mollison and David Holmgren specifically to create human settlements that are ecologically sustainable, economically viable, and socially equitable.
            </p>

            <h3 className="text-2xl font-bold mb-4">Three Ethics = Universal Foundation</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card variant="forest" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-2 text-forest-700">Earth Care</CardTitle>
                  <CardDescription className="text-gray-700">
                    Directly addresses SDGs 6, 7, 12, 13, 14, 15 through regenerative practices
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="sky" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-2 text-sky-700">People Care</CardTitle>
                  <CardDescription className="text-gray-700">
                    Directly addresses SDGs 1, 2, 3, 4, 5, 8, 10, 11 through equitable systems
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="earth" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-2 text-earth-700">Fair Share</CardTitle>
                  <CardDescription className="text-gray-700">
                    Directly addresses SDGs 1, 10, 12, 16, 17 through resource redistribution
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* SDG Mapping Table */}
            <h3 className="text-2xl font-bold mb-6">Direct SDG-Permaculture Principle Mapping</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-b">SDG</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Permaculture Principle</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Measurable Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {sdgMappings.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-sky-700">{item.sdg}</td>
                      <td className="px-4 py-3 text-forest-600">{item.permaculture}</td>
                      <td className="px-4 py-3 text-gray-700">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Implementation Roadmap */}
            <h2 className="text-3xl font-bold mb-6">Planetary Implementation Roadmap (2025-2050)</h2>
            
            <p className="mb-8">
              This phased approach scales permaculture from demonstration sites to planetary regeneration, following David Holmgren's zone and sector analysis principles.
            </p>

            <div className="space-y-6 mb-12">
              {phases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{phase.phase}: {phase.title}</h3>
                      <p className="text-sky-600 font-medium">{phase.years}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Target Coverage</p>
                      <p className="font-bold text-forest-600">{phase.target}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{phase.description}</p>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Key Focus Areas:</p>
                    <ul className="space-y-1">
                      {phase.focus.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center">
                          <CheckCircle className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Governance Model */}
            <h2 className="text-3xl font-bold mb-6">Global Governance & Coordination Framework</h2>
            
            <p className="mb-6">
              Permaculture's "integrate rather than segregate" principle suggests a new model of global governance based on bioregional assemblies rather than nation-states.
            </p>

            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-forest-900 mb-3">Proposed Structure:</h3>
              <ul className="text-forest-800 space-y-2">
                <li><strong>Global Permaculture Impact Network (GPIN):</strong> Open-source DAO coordinating finance, knowledge, and verification</li>
                <li><strong>Bioregional Assemblies:</strong> 200 self-governing bioregions using sociocracy and systemic consensus</li>
                <li><strong>Continental Regeneration Councils:</strong> 7 continental bodies coordinating Phase 2 implementation</li>
                <li><strong>Planetary Regeneration Fund:</strong> 1% of global GDP (approximately $1 trillion annually) for transition financing</li>
              </ul>
            </div>

            {/* Monitoring & Verification */}
            <h2 className="text-3xl font-bold mb-6">Monitoring & Verification System</h2>
            
            <p className="mb-6">
              The "apply self-regulation and accept feedback" principle requires robust monitoring systems combining satellite data, IoT sensors, and community verification.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="sky">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-sky-700">Technical Monitoring</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Satellite imagery for land use and carbon sequestration</li>
                    <li>• IoT sensor networks for soil, water, and air quality</li>
                    <li>• Blockchain verification of ecosystem service credits</li>
                    <li>• AI analysis of biodiversity and yield data</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="earth">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-earth-700">Community Verification</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Participatory guarantee systems for social outcomes</li>
                    <li>• Community health and wellbeing indices</li>
                    <li>• Local economic resilience measurements</li>
                    <li>• Cultural preservation and development metrics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Economic Framework */}
            <h2 className="text-3xl font-bold mb-6">Regenerative Economic Framework</h2>
            
            <p className="mb-6">
              The current extractive economic model is fundamentally incompatible with achieving the SDGs. Permaculture's "fair share" ethic requires a complete economic transformation.
            </p>

            <div className="bg-earth-50 border border-earth-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-earth-900 mb-3">New Economic Indicators:</h3>
              <ul className="text-earth-800 space-y-2">
                <li><strong>Regenerative Livelihoods per Hectare:</strong> Replace GDP with meaningful work that restores ecosystems</li>
                <li><strong>Ecosystem Service Values:</strong> Carbon credits, biodiversity credits, watershed protection, soil building</li>
                <li><strong>Community Resilience Index:</strong> Local food security, energy independence, social cohesion</li>
                <li><strong>Regenerative Return on Investment:</strong> 10:1 returns through ecosystem restoration and circular systems</li>
              </ul>
            </div>

            {/* Call to Action */}
            <h2 className="text-3xl font-bold mb-6">Immediate Actions for UN Leadership</h2>
            
            <div className="bg-gradient-to-br from-sky-50 to-forest-50 rounded-2xl p-8 border border-sky-200">
              <h3 className="text-xl font-bold mb-4">Priority Actions for 2025-2027:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-sky-700 mb-2">Policy Integration</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Integrate permaculture principles into SDG measurement frameworks</li>
                    <li>• Establish bioregional pilot programmes in 50 locations</li>
                    <li>• Create permaculture-based climate finance mechanisms</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Capacity Building</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Train 10,000 UN staff in permaculture design principles</li>
                    <li>• Establish permaculture research centres in each UN region</li>
                    <li>• Develop certification programmes for government officials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Conclusion: The Time is Now</h2>
              
              <p className="mb-6 text-lg">
                Permaculture is not a new, untested idea. It is a 50-year-old design science with thousands of successful implementations worldwide. What's missing is <strong>coordinated planetary implementation</strong>.
              </p>
              
              <p className="mb-8 text-lg">
                The choice facing UN leadership is clear: continue with fragmented approaches that are demonstrably failing, or embrace the only existing framework that addresses all SDGs simultaneously through conscious design and regenerative principles.
              </p>
              
              <div className="text-center">
                <p className="text-xl font-bold text-forest-700 mb-6">
                  Every day we delay is another day of accelerating climate breakdown and increasing inequality.
                </p>
                <p className="text-lg text-gray-700">
                  The permaculture solutions exist. The technology exists. The funding mechanisms exist.
                  What we need now is the political will to act at the scale and speed that our planetary crisis demands.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Lead Global Transformation?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            This framework provides the foundation for achieving all 17 SDGs through proven permaculture principles. 
            The question is not whether it will work, but whether we have the courage to implement it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/national-strategy">
              <Button size="lg" className="group">
                National Implementation Guide
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/start">
              <Button variant="outline" size="lg">
                Start Practical Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}