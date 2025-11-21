'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Droplets, Globe, Users, CheckCircle, Clock, Target, Leaf, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardContent, CardDescription, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import Image from 'next/image'

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

// Techniques data
const techniques = [
  {
    technique: 'Johad (curved earthen check dam)',
    description: 'Crescent-shaped dam on seasonal streams; built with local soil & stone',
    cost: '$800 – $2,500',
    time: '30–90 days (shramdaan)',
    recharge: '1–3 million litres/year'
  },
  {
    technique: 'Anicut / Check Dam',
    description: 'Small weir across rivulets using loose boulders or bamboo',
    cost: '$1,200 – $4,000',
    time: '45–120 days',
    recharge: '2–8 million litres/year'
  },
  {
    technique: 'Taanka / Kund',
    description: 'Underground covered rainwater tank (10,000–50,000 L)',
    cost: '$600 – $1,800',
    time: '20–40 days',
    recharge: 'Potable water for 6–12 months'
  },
  {
    technique: 'Contour Bunds & Trenches',
    description: 'Earthen ridges along slope contours + tree planting',
    cost: '$300 – $900 per hectare',
    time: '15–60 days',
    recharge: '30–50 % runoff capture'
  },
  {
    technique: 'Paani Panchayat',
    description: 'Village water parliament with written constitution & fines',
    cost: 'Negligible',
    time: 'Ongoing governance',
    recharge: 'Social sustainability'
  }
]

// Global replication data
const globalReplication = [
  {
    continent: 'Africa',
    countries: 'Kenya, Ethiopia, Somalia, Egypt',
    adaptations: 'Johads → “sand dams”; taankas in pastoral areas',
    partners: 'Africa Sand Dam Foundation, UNICEF'
  },
  {
    continent: 'Asia',
    countries: 'Yemen, Afghanistan, Nepal, Bangladesh',
    adaptations: 'Roofwater harvesting + check dams',
    partners: 'Oxfam, Helvetas, Government of Nepal'
  },
  {
    continent: 'Europe',
    countries: 'United Kingdom, Spain, Portugal',
    adaptations: 'Adapted for flash-flood prevention',
    partners: 'The Rivers Trust (UK), EU LIFE projects'
  },
  {
    continent: 'Americas',
    countries: 'Mexico (Oaxaca), USA (Southwest)',
    adaptations: 'Acequia-style recharge ponds',
    partners: 'Cuenca Los Ojos, USDA-NRCS'
  },
  {
    continent: 'Oceania',
    countries: 'Australia (Murray-Darling pilots)',
    adaptations: 'Contour bunds on grazing land',
    partners: 'Mulloon Institute'
  }
]

export default function WatermansRevolutionBlog() {
  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-sky-700 hover:text-sky-900 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Global Solutions
          </Link>

          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
                <Droplets className="w-4 h-4 mr-2" />
                Thought Leadership
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                The Waterman’s Revolution: <span className="gradient-text from-blue-600 to-sky-500">Global Solutions to the Water Crisis</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                A Comprehensive Report on Dr. Rajendra Singh, his proven low-cost techniques for reviving river systems, and their growing global reach.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                Global Impact
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Community Led
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infographic */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/images/watermans-revolution-infographic.png"
              alt="The Waterman's Revolution Infographic: Community-Led Water Revival Techniques & Global Impact"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.youtube.com/embed/Dr-Ja2bFNQI"
              title="The Waterman's Revolution"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm italic">
            Watch Dr. Rajendra Singh explain the philosophy and techniques behind the river revival movement.
          </p>
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
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 mb-12 border border-sky-200">
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Executive Summary</h2>
              <p className="text-sky-900 leading-relaxed mb-4">
                In an era when 2.4 billion people face water stress and climate change is accelerating desertification, one man has demonstrated that entire river systems can be revived using only traditional wisdom, community labour, and an annual investment of less than US $2,000 per structure.
              </p>
              <p className="text-sky-900 leading-relaxed mb-4">
                Dr. Rajendra Singh (b. 1959), recipient of the 2015 Stockholm Water Prize and the Ramon Magsaysay Award, has transformed more than 12,000 km² of arid land in western India, revived 14 rivers that had been dry for decades, and built over 13,800 decentralised water-harvesting structures serving 1.5 million people.
              </p>
              <p className="text-sky-900 leading-relaxed">
                His methods are now being studied and replicated in at least 18 countries across four continents. This report presents the complete blueprint of his techniques, the philosophy behind them, measurable outcomes, and precise pathways for global adoption.
              </p>
            </div>

            {/* The Man Behind the Movement */}
            <h2 className="text-3xl font-bold mb-6">The Man Behind the Movement</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Born:</strong> 6 August 1959, Uttar Pradesh, India</li>
                <li><strong>Education:</strong> Degree in Ayurvedic Medicine, postgraduate in Hindi literature</li>
                <li><strong>Turning point:</strong> 1985 arrival in drought-ravaged Alwar, Rajasthan</li>
                <li><strong>Organisation founded/led:</strong> Tarun Bharat Sangh (TBS) since 1985</li>
                <li><strong>Popular title:</strong> “Waterman of India” (Jal Purush)</li>
                <li><strong>Global recognition:</strong> Stockholm Water Prize 2015 (often called the “Nobel for Water”), Ramon Magsaysay Award 2001, nine honorary doctorates, Professor of Practice at Anant National University (2024)</li>
              </ul>
            </div>

            {/* Core Philosophy */}
            <h2 className="text-3xl font-bold mb-6">Core Philosophy – “Water Literacy” and the Five Principles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="sky" className="h-full">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</div>
                      <span className="text-gray-700">Water is a common heritage, not a commodity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</div>
                      <span className="text-gray-700">Communities must own, manage, and govern their water</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</div>
                      <span className="text-gray-700">Work with the rhythm of nature, not against it</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card variant="earth" className="h-full">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-earth-100 text-earth-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</div>
                      <span className="text-gray-700">Use only “soulful” (ecologically harmonious) technology</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-earth-100 text-earth-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">5</div>
                      <span className="text-gray-700">Equity, especially gender equity, is non-negotiable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* The Proven Techniques */}
            <h2 className="text-3xl font-bold mb-6">The Proven Techniques (The Rajasthan Model)</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technique</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Cost (2025 USD)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Construction Time</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Aquifer Recharge</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {techniques.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.technique}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cost}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{item.recharge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 italic mb-8">
              All structures are built almost entirely through voluntary community labour (shramdaan) and local materials — achieving a benefit-cost ratio frequently exceeding 10:1.
            </p>

            {/* Documented Results */}
            <h2 className="text-3xl font-bold mb-6">Documented Results in Rajasthan (1985–2025)</h2>
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">14 rivers revived (Arvari, Ruparel, Sarsa, Jahajwali, etc.)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">Groundwater table rise of 3–20 metres in project areas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">Forest cover increase of 35–50 %</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">Cropping intensity doubled; migration reduced by 80 %</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">Wild animal populations (leopard, deer, peacocks) returned</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-forest-900">Zero dependence on government tankers even in drought years</span>
                </div>
              </div>
            </div>

            {/* Global Replication */}
            <h2 className="text-3xl font-bold mb-6">Global Replication – Where the Model is Already Working</h2>
            <div className="space-y-6 mb-12">
              {globalReplication.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <Globe className="w-5 h-5 text-sky-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">{item.continent}: {item.countries}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Adaptations</p>
                      <p className="text-gray-700">{item.adaptations}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Lead Partners</p>
                      <p className="text-gray-700">{item.partners}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pathways for Worldwide Adoption */}
            <h2 className="text-3xl font-bold mb-6">Pathways for Worldwide Adoption</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                <h3 className="font-bold text-sky-800 mb-2">1. Direct Training</h3>
                <ul className="list-disc list-inside text-sky-900 space-y-1">
                  <li>TBS Water School, Kishori, Alwar (hosts 500+ international visitors yearly)</li>
                  <li>Online certificate courses (English/Hindi) launched 2023</li>
                </ul>
              </div>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-100">
                <h3 className="font-bold text-forest-800 mb-2">2. Open-Source Knowledge Repository</h3>
                <ul className="list-disc list-inside text-forest-900 space-y-1">
                  <li>All technical drawings, cost sheets, and governance templates freely downloadable at tarunbharatsangh.in/resources</li>
                </ul>
              </div>
              <div className="bg-earth-50 rounded-lg p-6 border border-earth-100">
                <h3 className="font-bold text-earth-800 mb-2">3. Partnership Routes</h3>
                <ul className="list-disc list-inside text-earth-900 space-y-1">
                  <li>UN Water, World Bank, SIDA (Sweden), GIZ (Germany), corporate CSR programmes (Mahindra, Tata Trusts)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">4. Policy Influence</h3>
                <ul className="list-disc list-inside text-gray-900 space-y-1">
                  <li>India’s National Water Policy 2012 and Jal Jeevan Mission guidelines explicitly reference the “Rajasthan community-led model”</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-sky-700 rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Call to Action</h2>
              <p className="mb-6 text-blue-50 text-lg">
                Dr. Singh’s work proves that the global water crisis is not a technological problem — it is a governance and imagination problem. Every arid or flood-prone community on Earth already possesses the knowledge, labour, and materials needed to secure its water future.
              </p>
              <p className="mb-8 text-white font-semibold text-xl">
                The only missing ingredient is the decision to begin.
              </p>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 mb-8">
                <h3 className="font-bold mb-2">To explore collaboration, training, or site-specific adaptation:</h3>
                <p className="mb-1"><strong>Tarun Bharat Sangh</strong></p>
                <p className="mb-1">Village Kishori, Via Thanagazi, District Alwar, Rajasthan 301022, India</p>
                <p className="mb-1">Email: tbsalwar@gmail.com</p>
                <p>Website: tarunbharatsangh.in</p>
              </div>

              <blockquote className="text-2xl font-serif italic text-blue-100 border-l-4 border-blue-300 pl-4 my-6">
                “Water flows toward courage.<br />
                Let us build the structures that invite it back.”
              </blockquote>

              <p className="text-sm text-blue-200 mt-4">
                Prepared with admiration and gratitude<br />
                November 2025
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-white to-forest-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Global Movement</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Learn more about how these techniques can be applied in your region or support the ongoing work of water revival.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/national-strategy">
              <Button size="lg" className="group">
                View National Strategy Guide
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/start">
              <Button variant="outline" size="lg">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
