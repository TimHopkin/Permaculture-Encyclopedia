'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building, TrendingUp, Users, CheckCircle, Clock, Target, Leaf } from 'lucide-react'
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

// Business transformation areas
const businessAreas = [
  {
    title: 'Supply Chain Regeneration',
    description: 'Transform extractive supply chains into regenerative networks',
    permaculture: 'Integrate Rather Than Segregate',
    roi: '300-500% ROI',
    timeframe: '3-5 years',
    actions: ['Partner with regenerative farms', 'Implement circular material flows', 'Create biodiversity credits system', 'Develop community-based sourcing'],
    impact: 'Reduced risk, lower costs, enhanced brand value, climate positive outcomes'
  },
  {
    title: 'Workplace Ecosystem Design',
    description: 'Create regenerative workplaces that enhance human and ecological health',
    permaculture: 'People Care + Earth Care',
    roi: '200-400% ROI',
    timeframe: '1-2 years',
    actions: ['Install food forests on corporate campuses', 'Integrate biophilic design principles', 'Create employee wellbeing gardens', 'Implement composting and waste cycling'],
    impact: 'Increased productivity, reduced healthcare costs, improved retention, carbon sequestration'
  },
  {
    title: 'Circular Business Models',
    description: 'Eliminate waste through closed-loop systems and service-based offerings',
    permaculture: 'Produce No Waste',
    roi: '250-600% ROI',
    timeframe: '2-4 years',
    actions: ['Design products for disassembly', 'Create product-as-a-service offerings', 'Establish material recovery networks', 'Develop biomimetic innovations'],
    impact: 'New revenue streams, reduced material costs, competitive advantage, regulatory compliance'
  },
  {
    title: 'Regenerative Finance & Investment',
    description: 'Align capital allocation with ecological and social regeneration',
    permaculture: 'Fair Share',
    roi: '150-300% ROI',
    timeframe: '1-3 years',
    actions: ['Invest in ecosystem restoration projects', 'Develop regenerative lending programmes', 'Create biodiversity offset portfolios', 'Support community land ownership'],
    impact: 'Reduced financial risk, new investment returns, stakeholder alignment, future-proofing'
  }
]

// ROI case studies
const roiCaseStudies = [
  {
    company: 'Interface Inc.',
    sector: 'Manufacturing',
    investment: '$500M over 25 years',
    returns: '$1.8B in savings + brand value',
    approach: 'Mission Zero to Climate Take Back',
    result: 'Carbon negative by 2040, 90% renewable energy, closed-loop materials'
  },
  {
    company: 'Patagonia',
    sector: 'Retail',
    investment: '$100M in regenerative organic',
    returns: '$300M increased revenue + loyalty',
    approach: 'Regenerative agriculture supply chain',
    result: '1% for Planet, soil health improvement, brand differentiation'
  },
  {
    company: 'Unilever (Sustainable Living)',
    sector: 'Consumer Goods',
    investment: '$2B over 10 years',
    returns: '$4B cost savings + growth',
    approach: 'Sustainable sourcing and circular economy',
    result: '50% reduction in environmental footprint, €1B+ in sustainable brands'
  }
]

// Implementation phases for corporations
const corporatePhases = [
  {
    phase: 'Phase 1: Foundation (Year 1)',
    title: 'Permaculture Principles Integration',
    investment: '$1-10M',
    actions: ['Board and leadership permaculture education', 'Baseline sustainability audit', 'Pilot regenerative workplace design', 'Initial supply chain assessment'],
    outcomes: ['10-20% reduction in operational costs', 'Improved employee satisfaction', 'Enhanced ESG ratings']
  },
  {
    phase: 'Phase 2: Transformation (Years 2-3)',
    title: 'Systematic Business Model Evolution',
    investment: '$10-100M',
    actions: ['Supply chain regeneration partnerships', 'Circular product design implementation', 'Employee regenerative skills training', 'Community investment programmes'],
    outcomes: ['30-50% cost reduction in key areas', 'New revenue streams established', 'Industry leadership position']
  },
  {
    phase: 'Phase 3: Leadership (Years 4-5)',
    title: 'Market Transformation Catalyst',
    investment: '$50-500M',
    actions: ['Industry ecosystem development', 'Regenerative technology innovation', 'Global community partnerships', 'Policy influence and advocacy'],
    outcomes: ['Market-leading profitability', 'Ecosystem service revenue', 'Global brand differentiation']
  },
  {
    phase: 'Phase 4: Legacy (Years 6-10)',
    title: 'Regenerative Civilisation Builder',
    investment: 'Self-funding through returns',
    actions: ['Bioregional development initiatives', 'Open-source knowledge sharing', 'Mentorship of other corporations', 'Policy and systemic change leadership'],
    outcomes: ['Net positive impact across all operations', 'Regenerative civilisation contribution', 'Sustainable competitive advantage']
  }
]

export default function CorporateSustainabilityBlog() {
  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-earth-50 to-earth-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-earth-600 hover:text-earth-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Global Solutions
          </Link>
          
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-sm font-medium mb-4">
                <Building className="w-4 h-4 mr-2" />
                Corporate Leaders
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Regenerative Business Models: How Corporations Can <span className="gradient-text">Lead Planetary Restoration</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Learn how forward-thinking corporations can integrate permaculture principles into their operations, supply chains, and business models for competitive advantage while driving positive environmental and social impact.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                ROI Analysis
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Business Strategy
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
            <div className="bg-gradient-to-br from-earth-50 to-earth-100 rounded-2xl p-8 mb-12 border border-earth-200">
              <h2 className="text-2xl font-bold text-earth-900 mb-4">The Business Case for Regeneration</h2>
              <p className="text-earth-800 leading-relaxed mb-4">
                <strong>The Reality:</strong> Traditional business models are failing as resource scarcity, climate change, and social inequality create unprecedented risks and operational challenges.
              </p>
              <p className="text-earth-800 leading-relaxed mb-4">
                <strong>The Opportunity:</strong> Permaculture-based business models don't just mitigate risks—they create new revenue streams, reduce costs, and build competitive advantages that are impossible to replicate.
              </p>
              <p className="text-earth-800 leading-relaxed">
                <strong>The Returns:</strong> Companies implementing regenerative business models report 2-6× ROI, enhanced brand value, reduced regulatory risk, and access to the fastest-growing consumer and investment markets.
              </p>
            </div>

            {/* Why Conventional ESG Isn't Enough */}
            <h2 className="text-3xl font-bold mb-6">Why Conventional ESG Approaches Are Failing</h2>
            
            <p className="mb-6">
              Corporate sustainability efforts typically focus on <strong>doing less harm</strong> rather than <strong>creating positive impact</strong>. This "less bad" approach fails to address the systemic nature of ecological and social challenges while missing massive business opportunities.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">The &ldquo;Less Bad&rdquo; Trap:</h3>
              <ul className="text-red-800 space-y-2">
                <li>• <strong>Carbon Offsetting:</strong> Delays real emission reductions while maintaining extractive operations</li>
                <li>• <strong>Efficiency Gains:</strong> Reduces impact per unit but increases total consumption</li>
                <li>• <strong>Supply Chain Auditing:</strong> Monitors problems rather than creating regenerative alternatives</li>
                <li>• <strong>Charitable Donations:</strong> Treats symptoms while maintaining systemic causes</li>
                <li>• <strong>Green Marketing:</strong> Communicates values without operational transformation</li>
              </ul>
            </div>

            <p className="mb-8">
              Permaculture-based business models flip this paradigm: instead of minimising negative impact, they <strong>maximise positive regeneration</strong> while creating superior financial returns through system-level thinking and natural capital development.
            </p>

            {/* The Permaculture Business Advantage */}
            <h2 className="text-3xl font-bold mb-6">The Permaculture Business Advantage: From Extraction to Regeneration</h2>
            
            <p className="mb-6">
              Permaculture's three ethics and twelve principles provide a complete framework for business transformation that creates competitive advantages impossible to replicate through conventional approaches.
            </p>

            <h3 className="text-2xl font-bold mb-4">Three Ethics = Competitive Moats</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card variant="forest" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-forest-700">Earth Care</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Operations that regenerate ecosystems create natural capital assets while reducing operational costs and risks.
                  </CardDescription>
                  <div className="text-sm font-medium text-forest-600">
                    Result: Reduced material costs, climate resilience, regulatory advantage
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="sky" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-sky-700">People Care</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Supporting community wellbeing creates loyal customers, motivated employees, and social license to operate.
                  </CardDescription>
                  <div className="text-sm font-medium text-sky-600">
                    Result: Enhanced brand loyalty, reduced turnover, expanded market access
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="earth" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="mb-3 text-earth-700">Fair Share</CardTitle>
                  <CardDescription className="text-gray-700 mb-4">
                    Equitable resource distribution creates resilient business networks and long-term stakeholder alignment.
                  </CardDescription>
                  <div className="text-sm font-medium text-earth-600">
                    Result: Reduced supply chain risk, stakeholder trust, sustainable growth
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Four Key Business Transformation Areas */}
            <h2 className="text-3xl font-bold mb-6">Four Key Business Transformation Areas</h2>
            
            <p className="mb-8">
              Implementing permaculture principles across core business functions creates systematic competitive advantages while driving measurable regenerative outcomes.
            </p>

            <div className="space-y-8 mb-12">
              {businessAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{area.title}</h3>
                      <p className="text-gray-700 mb-2">{area.description}</p>
                      <p className="text-forest-600 text-sm font-medium">Permaculture Principle: {area.permaculture}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-earth-600 text-lg">{area.roi}</p>
                      <p className="text-sm text-gray-600">{area.timeframe}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Implementation Actions:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {area.actions.map((action, idx) => (
                        <div key={idx} className="text-gray-700 flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-earth-100 rounded-lg p-4">
                    <p className="text-earth-800 font-medium text-sm">Expected Outcomes: {area.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Case Studies */}
            <h2 className="text-3xl font-bold mb-6">Proven ROI: Leading Corporate Transformations</h2>
            
            <p className="mb-6">
              Forward-thinking corporations are already demonstrating that regenerative business models deliver superior financial returns while creating positive environmental and social impact.
            </p>

            <div className="grid gap-6 mb-8">
              {roiCaseStudies.map((study, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{study.company}</h3>
                      <p className="text-forest-600 text-sm font-medium">{study.sector}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Investment → Returns</p>
                      <p className="font-bold text-earth-600">{study.investment} → {study.returns}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-gray-700 mb-2"><strong>Approach:</strong> {study.approach}</p>
                    <p className="text-gray-700"><strong>Result:</strong> {study.result}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Implementation Roadmap */}
            <h2 className="text-3xl font-bold mb-6">10-Year Corporate Transformation Roadmap</h2>
            
            <p className="mb-8">
              Systematic transformation to regenerative business models requires phased implementation that builds capabilities while delivering early returns to fund expansion.
            </p>

            <div className="space-y-6 mb-12">
              {corporatePhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-earth-50 to-forest-50 rounded-lg p-6 border border-earth-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-earth-900 mb-1">{phase.phase}</h3>
                      <p className="text-forest-600 font-medium">{phase.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Investment Range</p>
                      <p className="font-bold text-earth-600">{phase.investment}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Actions:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.actions.map((action, idx) => (
                        <div key={idx} className="text-gray-700 flex items-center text-sm">
                          <Target className="w-4 h-4 text-forest-500 mr-2 flex-shrink-0" />
                          {action}
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

            {/* Financial Framework */}
            <h2 className="text-3xl font-bold mb-6">Regenerative Finance Framework: New Revenue Streams</h2>
            
            <p className="mb-6">
              Permaculture-based businesses can access entirely new revenue streams through ecosystem services, circular systems, and community partnerships that don't exist for conventional companies.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="forest">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-forest-700">Ecosystem Service Revenue</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Carbon Credits:</strong> $50-200/tonne CO₂ sequestered</li>
                    <li>• <strong>Biodiversity Credits:</strong> $1000-5000/hectare habitat created</li>
                    <li>• <strong>Water Quality Services:</strong> Payment for watershed protection</li>
                    <li>• <strong>Soil Health Credits:</strong> Recognition for soil carbon building</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="earth">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-earth-700">Circular Economy Revenue</CardTitle>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Material Recovery:</strong> 70-90% cost reduction through circularity</li>
                    <li>• <strong>Service Models:</strong> Higher margins through product-as-a-service</li>
                    <li>• <strong>Waste-to-Resource:</strong> New revenue from former waste streams</li>
                    <li>• <strong>Community Partnerships:</strong> Shared value creation opportunities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Risk Mitigation */}
            <h2 className="text-3xl font-bold mb-6">Risk Mitigation: Building Antifragile Business Models</h2>
            
            <p className="mb-6">
              Regenerative businesses don't just survive disruption—they become stronger through crisis by building resilience into their core operations and supply chains.
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-sky-900 mb-3">Climate Resilience Benefits:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Operational Resilience</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Diversified supply chains reduce disruption risk</li>
                    <li>• On-site renewable energy ensures power security</li>
                    <li>• Water harvesting systems provide drought protection</li>
                    <li>• Food production reduces dependency vulnerabilities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Financial Resilience</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Reduced exposure to commodity price volatility</li>
                    <li>• Multiple revenue streams from ecosystem services</li>
                    <li>• Lower insurance costs through risk reduction</li>
                    <li>• Premium valuations for regenerative assets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Employee Engagement */}
            <h2 className="text-3xl font-bold mb-6">Employee Engagement: The Human-Centred Workplace</h2>
            
            <p className="mb-6">
              Permaculture's "people care" ethic creates work environments that enhance human wellbeing, productivity, and creativity while building deep employee loyalty and attraction for top talent.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="font-bold text-sky-700 mb-3">Workplace Design Innovations</h3>
                <ul className="space-y-2 text-sky-800">
                  <li>• Biophilic design reduces stress and increases focus</li>
                  <li>• On-site food gardens provide fresh, healthy meals</li>
                  <li>• Natural materials and lighting improve wellbeing</li>
                  <li>• Outdoor meeting spaces enhance creativity</li>
                  <li>• Composting systems create employee engagement</li>
                </ul>
              </div>
              
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <h3 className="font-bold text-forest-700 mb-3">Measurable Benefits</h3>
                <ul className="space-y-2 text-forest-800">
                  <li>• 25% increase in productivity and focus</li>
                  <li>• 40% reduction in sick leave and absenteeism</li>
                  <li>• 60% improvement in employee satisfaction</li>
                  <li>• 80% increase in talent attraction and retention</li>
                  <li>• 30% reduction in healthcare costs</li>
                </ul>
              </div>
            </div>

            {/* Market Positioning */}
            <h2 className="text-3xl font-bold mb-6">Market Positioning: Leading the Regenerative Economy</h2>
            
            <p className="mb-6">
              Companies implementing permaculture principles position themselves as leaders in the fastest-growing segments of the global economy: regenerative agriculture, circular systems, climate solutions, and community-centred business.
            </p>

            <div className="bg-earth-50 border border-earth-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-earth-900 mb-3">Market Opportunities (2025-2035):</h3>
              <ul className="text-earth-800 space-y-2">
                <li>• <strong>Regenerative Agriculture:</strong> $15 trillion market by 2030</li>
                <li>• <strong>Circular Economy:</strong> $4.5 trillion annual value by 2030</li>
                <li>• <strong>Nature-Based Solutions:</strong> $10 trillion investment opportunity</li>
                <li>• <strong>Climate Technologies:</strong> $2.5 trillion annual market</li>
                <li>• <strong>Community Investment:</strong> $1 trillion impact investment flows</li>
              </ul>
            </div>

            {/* Getting Started */}
            <h2 className="text-3xl font-bold mb-6">Getting Started: Your First 90 Days</h2>
            
            <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-2xl p-8 border border-forest-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Immediate Actions for Corporate Leaders</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-forest-700 mb-2">Days 1-30: Foundation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Board permaculture education session</li>
                    <li>• Baseline impact assessment</li>
                    <li>• Leadership team training</li>
                    <li>• Stakeholder mapping</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-earth-700 mb-2">Days 31-60: Planning</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Permaculture business strategy development</li>
                    <li>• Pilot project selection</li>
                    <li>• Partnership identification</li>
                    <li>• Investment planning</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-sky-700 mb-2">Days 61-90: Implementation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• First pilot project launch</li>
                    <li>• Employee engagement programme</li>
                    <li>• Community partnership establishment</li>
                    <li>• Progress measurement systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Conclusion: Leading the Business Revolution</h2>
              
              <p className="mb-6 text-lg">
                The transition to regenerative business models is not optional—it's inevitable. The only question is whether your company will lead this transformation or be disrupted by it.
              </p>
              
              <p className="mb-8 text-lg">
                Permaculture provides the complete framework for this business evolution. Companies that embrace these principles now will build competitive advantages that become stronger over time, while creating positive impact at planetary scale.
              </p>
              
              <div className="text-center">
                <p className="text-xl font-bold text-earth-700 mb-6">
                  The regenerative economy is the only sustainable path forward. Your company can either lead it or be left behind by it.
                </p>
                <p className="text-lg text-gray-700">
                  Start today. Transform your business. Change the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            This framework provides the blueprint for corporate regenerative transformation. 
            The companies that act now will define the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/land-management">
              <Button size="lg" className="group">
                Land Management Implementation
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/start">
              <Button variant="outline" size="lg">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}