'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Map, DollarSign, Users, CheckCircle, Clock, TrendingUp, Target } from 'lucide-react'
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

// Policy Framework Areas
const policyAreas = [
  {
    title: 'Land Reform & Community Ownership',
    description: 'Transform land tenure systems using Fair Share principles',
    actions: ['Establish Community Land Trusts in every bioregion', 'Convert 30% of agricultural land to community ownership by 2035', 'Implement land value capture for ecosystem services'],
    impact: 'Creates pathway out of poverty for 200 million rural people'
  },
  {
    title: 'Education System Transformation', 
    description: 'Make every school a working permaculture demonstration site',
    actions: ['Mandate permaculture education in national curriculum', 'Transform 50,000 schools into food forest campuses', 'Train 500,000 teachers in permaculture design'],
    impact: 'Educates 100 million children in regenerative systems annually'
  },
  {
    title: 'Economic Policy Revolution',
    description: 'Shift from GDP to Regenerative Livelihoods per Hectare',
    actions: ['Implement Regenerative Basic Income pilot programmes', 'Create national ecosystem service payment schemes', 'Establish bioregional circular economy zones'],
    impact: 'Creates 10 million green jobs while restoring ecosystems'
  },
  {
    title: 'Health System Integration',
    description: 'Integrate permaculture principles into public health policy',
    actions: ['Establish medicinal plant guilds in all communities', 'Mandate organic food in public institutions', 'Create nature-based mental health programmes'],
    impact: 'Reduces healthcare costs by 40% while improving outcomes'
  }
]

// Economic transformation data
const economicTransitions = [
  { sector: 'Agriculture', current: 'Industrial monoculture', future: 'Syntropic polyculture', impact: '5-10× yield increase, zero external inputs' },
  { sector: 'Energy', current: 'Fossil fuel dependence', future: 'Bioregional renewable systems', impact: '100% energy independence by 2040' },
  { sector: 'Water', current: 'Centralised treatment', future: 'Watershed restoration', impact: '200% increase in water availability' },
  { sector: 'Waste', current: 'Linear disposal', future: 'Circular bio-economy', impact: '90% waste elimination, new revenue streams' },
  { sector: 'Housing', current: 'Energy-intensive buildings', future: 'Regenerative communities', impact: '80% reduction in environmental footprint' },
  { sector: 'Transport', current: 'Car-dependent systems', future: 'Bioregional sufficiency', impact: '70% reduction in transport demand' }
]

// Implementation phases specific to national government
const nationalPhases = [
  {
    phase: 'Year 1-2',
    title: 'Policy Foundation & Pilot Programmes',
    budget: '$2-5 billion',
    actions: ['Establish National Permaculture Council', 'Launch 10 bioregional demonstration zones', 'Begin teacher training programmes', 'Start land tenure reform pilots']
  },
  {
    phase: 'Year 3-5', 
    title: 'System Integration & Scaling',
    budget: '$10-20 billion',
    actions: ['Scale to 100 bioregional zones', 'Transform 10,000 schools', 'Implement Regenerative Basic Income', 'Begin economic indicator transition']
  },
  {
    phase: 'Year 6-10',
    title: 'National Transformation',
    budget: '$50-100 billion',
    actions: ['Achieve 50% permaculture coverage', 'Complete education system transformation', 'Full circular economy implementation', 'International leadership role']
  },
  {
    phase: 'Year 11-25',
    title: 'Regenerative Society Achievement', 
    budget: 'Self-funding through ecosystem services',
    actions: ['100% sustainable systems', 'Global knowledge export', 'Climate positive outcomes', 'Social equity achievement']
  }
]

export default function NationalStrategyBlog() {
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
                <Building2 className="w-4 h-4 mr-2" />
                National Governments
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                National Permaculture Transition: A <span className="gradient-text">Bioregional Approach</span> to Sustainable Development
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                A comprehensive guide for national governments to implement permaculture principles at scale, transforming entire bioregions through policy integration, economic reform, and measurable regenerative outcomes.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </div>
              <div className="flex items-center">
                <Map className="w-4 h-4 mr-1" />
                Bioregional Strategy
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Economic Transformation
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
              <h2 className="text-2xl font-bold text-forest-900 mb-4">The National Imperative</h2>
              <p className="text-forest-800 leading-relaxed mb-4">
                <strong>The Challenge:</strong> National governments face unprecedented pressures: climate breakdown, economic inequality, food insecurity, and social fragmentation. Traditional policy approaches address symptoms, not root causes.
              </p>
              <p className="text-forest-800 leading-relaxed mb-4">
                <strong>The Opportunity:</strong> Permaculture offers the world's first complete framework for regenerative governance—transforming how nations approach land use, economic systems, education, and social organisation.
              </p>
              <p className="text-forest-800 leading-relaxed">
                <strong>The Returns:</strong> Early adopter nations will achieve energy independence, food security, economic resilience, and climate leadership while creating millions of meaningful livelihoods and restoring degraded landscapes.
              </p>
            </div>

            {/* Why Nations Must Act Now */}
            <h2 className="text-3xl font-bold mb-6">Why Nations Must Act Now: The Window is Closing</h2>
            
            <p className="mb-6">
              The convergence of climate tipping points, economic instability, and social unrest creates an unprecedented opportunity for transformative leadership. Nations that transition to permaculture-based governance by 2030 will thrive; those that don't will struggle to maintain stability.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">National Security Risks of Inaction:</h3>
              <ul className="text-red-800 space-y-2">
                <li>• <strong>Food System Collapse:</strong> Industrial agriculture fails under climate stress</li>
                <li>• <strong>Economic Vulnerability:</strong> Dependence on global supply chains becomes fatal</li>
                <li>• <strong>Energy Insecurity:</strong> Fossil fuel volatility threatens economic stability</li>
                <li>• <strong>Climate Migration:</strong> Mass population displacement overwhelms infrastructure</li>
                <li>• <strong>Social Fragmentation:</strong> Inequality drives civil unrest and political instability</li>
              </ul>
            </div>

            <p className="mb-8">
              Permaculture-based governance transforms these risks into opportunities through <strong>bioregional resilience</strong>—creating self-reliant communities within interconnected larger systems.
            </p>

            {/* The Bioregional Approach */}
            <h2 className="text-3xl font-bold mb-6">The Bioregional Approach: Governance Based on Natural Systems</h2>
            
            <p className="mb-6">
              Traditional political boundaries ignore ecological realities. Permaculture's "observe and interact" principle suggests organising governance around <strong>bioregions</strong>—natural areas defined by watersheds, climate patterns, and ecological communities.
            </p>

            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-forest-900 mb-3">Bioregional Governance Principles:</h3>
              <ul className="text-forest-800 space-y-2">
                <li><strong>Watershed-Based Planning:</strong> All decisions consider water cycle impacts</li>
                <li><strong>Ecosystem Service Economics:</strong> Natural capital becomes the foundation of prosperity</li>
                <li><strong>Community Self-Reliance:</strong> Each bioregion meets 80% of basic needs locally</li>
                <li><strong>Circular Resource Flows:</strong> All waste becomes input for other systems</li>
                <li><strong>Democratic Participation:</strong> Sociocracy and consent-based decision making</li>
              </ul>
            </div>

            {/* Policy Framework */}
            <h2 className="text-3xl font-bold mb-6">Comprehensive Policy Framework for Permaculture Transition</h2>
            
            <p className="mb-8">
              Implementing permaculture at national scale requires coordinated policy changes across all government departments. Each policy area must align with the three core ethics: Earth Care, People Care, and Fair Share.
            </p>

            <div className="space-y-6 mb-12">
              {policyAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Policy Actions:</h4>
                    <ul className="space-y-1">
                      {area.actions.map((action, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center">
                          <CheckCircle className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-forest-100 rounded-lg p-4">
                    <p className="text-forest-800 font-medium">Expected Impact: {area.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Economic Transformation */}
            <h2 className="text-3xl font-bold mb-6">Economic System Transformation: From Extraction to Regeneration</h2>
            
            <p className="mb-6">
              The current economic system is fundamentally incompatible with planetary boundaries and social equity. Permaculture's "fair share" ethic requires a complete reimagining of economic indicators and incentives.
            </p>

            <h3 className="text-2xl font-bold mb-4">Sector-by-Sector Transition Plan</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-b">Sector</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Current System</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Permaculture Future</th>
                    <th className="px-4 py-3 text-left font-semibold border-b">Expected Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {economicTransitions.map((transition, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-forest-700">{transition.sector}</td>
                      <td className="px-4 py-3 text-red-600">{transition.current}</td>
                      <td className="px-4 py-3 text-forest-600">{transition.future}</td>
                      <td className="px-4 py-3 text-gray-700">{transition.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New Economic Indicators */}
            <h3 className="text-2xl font-bold mb-4">Revolutionary Economic Indicators</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="forest">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-forest-700">Replace GDP With:</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Regenerative Livelihoods per Hectare:</strong> Meaningful work that heals ecosystems</li>
                    <li>• <strong>Genuine Progress Indicator:</strong> Quality of life, not just quantity of consumption</li>
                    <li>• <strong>Ecosystem Health Index:</strong> Biodiversity, soil health, water quality</li>
                    <li>• <strong>Community Resilience Score:</strong> Local sufficiency and social cohesion</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="earth">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-earth-700">New Revenue Sources:</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Carbon Sequestration:</strong> $50-200/tonne CO₂ stored in soils</li>
                    <li>• <strong>Biodiversity Credits:</strong> Payment for species habitat creation</li>
                    <li>• <strong>Watershed Services:</strong> Clean water provision and flood control</li>
                    <li>• <strong>Regenerative Tourism:</strong> Learning destinations for global visitors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Timeline */}
            <h2 className="text-3xl font-bold mb-6">25-Year National Implementation Timeline</h2>
            
            <p className="mb-8">
              Transformation to a permaculture-based society requires careful sequencing of policy changes, infrastructure development, and capacity building. This timeline balances ambition with practical implementation constraints.
            </p>

            <div className="space-y-6 mb-12">
              {nationalPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-forest-50 to-earth-50 rounded-lg p-6 border border-forest-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-forest-900 mb-1">{phase.phase}: {phase.title}</h3>
                      <p className="text-earth-600 font-medium">{phase.budget}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Key Milestones:</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.actions.map((action, idx) => (
                        <div key={idx} className="text-gray-700 flex items-center">
                          <Target className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Financing Strategy */}
            <h2 className="text-3xl font-bold mb-6">National Financing Strategy: From Cost to Investment</h2>
            
            <p className="mb-6">
              The permaculture transition requires significant upfront investment but generates massive returns through ecosystem services, reduced infrastructure costs, and new economic opportunities.
            </p>

            <div className="bg-earth-50 border border-earth-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-earth-900 mb-3">Investment Returns Analysis (25-year projection):</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Initial Investment: $200 billion</h4>
                  <ul className="space-y-1 text-earth-800 text-sm">
                    <li>• Land acquisition and tenure reform: $50B</li>
                    <li>• Education system transformation: $75B</li>
                    <li>• Infrastructure development: $50B</li>
                    <li>• Capacity building and training: $25B</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Annual Returns by Year 10: $500 billion</h4>
                  <ul className="space-y-1 text-forest-800 text-sm">
                    <li>• Ecosystem services value: $200B</li>
                    <li>• Healthcare cost reductions: $150B</li>
                    <li>• Energy savings: $100B</li>
                    <li>• New green economy jobs: $50B</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study: Leading Nations */}
            <h2 className="text-3xl font-bold mb-6">Leading Nations: Early Adopters Setting the Pace</h2>
            
            <p className="mb-6">
              Several nations are already implementing large-scale permaculture principles, providing models for comprehensive national transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="forest">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-forest-700">Costa Rica: National Reforestation</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Reversed deforestation, now 54% forest cover. Payment for ecosystem services programme generates $300M annually.
                  </CardDescription>
                  <p className="text-sm font-medium text-forest-600">Key Learning: Policy integration across ministries essential</p>
                </CardContent>
              </Card>
              
              <Card variant="sky">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-sky-700">Rwanda: Regenerative Agriculture</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Transformed from conflict to food security through agroecological farming. 90% reduction in soil erosion.
                  </CardDescription>
                  <p className="text-sm font-medium text-sky-600">Key Learning: Community mobilisation drives success</p>
                </CardContent>
              </Card>
            </div>

            {/* Overcoming Implementation Challenges */}
            <h2 className="text-3xl font-bold mb-6">Overcoming Implementation Challenges</h2>
            
            <p className="mb-6">
              National permaculture transition faces predictable obstacles. Understanding and planning for these challenges ensures successful implementation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-bold text-red-700 mb-1">Challenge: Vested Interest Resistance</h4>
                <p className="text-gray-700 mb-2">Fossil fuel and agribusiness industries will oppose transition.</p>
                <p className="text-green-700 font-medium">Solution: Create more attractive opportunities in regenerative sectors.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-700 mb-1">Challenge: Knowledge and Skills Gap</h4>
                <p className="text-gray-700 mb-2">Current workforce lacks permaculture design skills.</p>
                <p className="text-green-700 font-medium">Solution: Massive retraining programmes and integration in education.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-700 mb-1">Challenge: Initial Capital Requirements</h4>
                <p className="text-gray-700 mb-2">Upfront investment appears large compared to current budgets.</p>
                <p className="text-green-700 font-medium">Solution: Phase implementation and capture early returns to fund expansion.</p>
              </div>
            </div>

            {/* Measuring Success */}
            <h2 className="text-3xl font-bold mb-6">Measuring Success: New Metrics for National Progress</h2>
            
            <p className="mb-6">
              Traditional economic indicators fail to capture the value created by permaculture systems. Nations need new measurement frameworks that track regenerative outcomes.
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-forest-50 rounded-lg p-6 mb-8 border border-sky-200">
              <h3 className="font-bold text-gray-900 mb-3">National Permaculture Progress Indicators:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold text-sky-700 mb-2">Ecological Health</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Soil organic matter increase</li>
                    <li>• Biodiversity index growth</li>
                    <li>• Carbon sequestration rates</li>
                    <li>• Water table restoration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Social Wellbeing</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Community resilience scores</li>
                    <li>• Health outcome improvements</li>
                    <li>• Education system transformation</li>
                    <li>• Democratic participation rates</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Economic Justice</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Income inequality reduction</li>
                    <li>• Meaningful employment creation</li>
                    <li>• Local economic circulation</li>
                    <li>• Ecosystem service revenue</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action for National Leadership */}
            <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-2xl p-8 border border-forest-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Your Nation's Leadership Opportunity</h3>
              
              <p className="text-gray-800 mb-6">
                The nations that commit to permaculture-based governance by 2030 will become the economic and ecological leaders of the 21st century. 
                The question is not whether this transformation will happen, but which nations will lead and which will follow.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">First Mover Advantages</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Energy and food security before climate disruption peaks</li>
                    <li>• Global leadership in regenerative technology exports</li>
                    <li>• Attraction of climate refugees as skilled contributors</li>
                    <li>• Economic stability through ecosystem-based prosperity</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Legacy Benefits</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Restored landscapes for future generations</li>
                    <li>• Resilient communities adapted to climate change</li>
                    <li>• Cultural renaissance through reconnection with land</li>
                    <li>• Model for global regenerative civilisation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Conclusion: The Choice of Our Generation</h2>
              
              <p className="mb-6 text-lg">
                National governments face a fundamental choice: continue managing the decline of extractive systems, or lead the transition to regenerative abundance.
              </p>
              
              <p className="mb-8 text-lg">
                Permaculture provides the complete framework for this transition. The principles are proven. The methods are tested. The economic models are viable. The social benefits are transformative.
              </p>
              
              <div className="text-center">
                <p className="text-xl font-bold text-forest-700 mb-6">
                  What's missing is the political courage to act at the scale our challenges demand.
                </p>
                <p className="text-lg text-gray-700">
                  History will judge whether national leaders chose transformation or managed decline. 
                  The permaculture transition offers a path to regenerative prosperity for all.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Lead Your Nation's Transformation?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            This framework provides the roadmap for national permaculture transition. 
            The first nations to implement these principles will define the future of human civilisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/corporate-sustainability">
              <Button size="lg" className="group">
                Corporate Implementation Guide
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/start">
              <Button variant="outline" size="lg">
                Start Local Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}