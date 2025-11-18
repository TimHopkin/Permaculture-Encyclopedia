'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Globe, Users, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

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

const sdgMappings = [
  {
    number: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    image: "/images/sdg/SDG-1-No-Poverty-800x800.png",
    permacultureSolutions: [
      "Food forests providing free, nutritious food for communities",
      "Local economic systems through farmers' markets and cooperatives",
      "Skills training in sustainable agriculture and food production",
      "Micro-enterprise opportunities in sustainable food systems"
    ],
    impact: "Permaculture creates resilient livelihoods and reduces dependency on external economic systems"
  },
  {
    number: 2,
    title: "Zero Hunger", 
    description: "End hunger, achieve food security and promote sustainable agriculture",
    image: "/images/sdg/SDG-2-Zero-Hunger-800x800.png",
    permacultureSolutions: [
      "Diverse polyculture systems increasing food security and nutrition",
      "Seed saving and heritage variety preservation",
      "Community food forests and edible landscapes",
      "Regenerative farming techniques improving soil fertility and yields"
    ],
    impact: "Permaculture directly addresses hunger through sustainable food production systems"
  },
  {
    number: 3,
    title: "Good Health and Well-Being",
    description: "Ensure healthy lives and promote well-being for all at all ages",
    image: "/images/sdg/SDG-3-Good-Health-and-Well-being-800x800.png",
    permacultureSolutions: [
      "Medicinal plant gardens and herbal medicine systems",
      "Pollution-free food production without synthetic chemicals",
      "Clean water systems through natural filtration and catchment",
      "Mental health benefits from connection with nature and community"
    ],
    impact: "Permaculture promotes physical and mental wellbeing through natural living systems"
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning",
    image: "/images/sdg/SDG-4-Quality-Education-280x280.png",
    permacultureSolutions: [
      "Hands-on ecological education in school gardens and food forests",
      "Traditional knowledge preservation and sharing",
      "Community skill-sharing and peer-to-peer learning",
      "Systems thinking education through permaculture design"
    ],
    impact: "Permaculture provides practical education connecting people with natural systems"
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    image: "/images/sdg/SDG-5-Gender-Equality-280x280.png",
    permacultureSolutions: [
      "Women's cooperatives in sustainable agriculture and food processing",
      "Equal access to land and resources through community land tenure",
      "Recognition of women's traditional ecological knowledge",
      "Inclusive decision-making in community permaculture projects"
    ],
    impact: "Permaculture promotes social equity and women's empowerment in sustainable development"
  },
  {
    number: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all",
    image: "/images/sdg/SDG-6-Clean-Water-and-Sanitation-280x280.png",
    permacultureSolutions: [
      "Rainwater harvesting and water storage systems",
      "Greywater treatment through constructed wetlands",
      "Watershed restoration and natural water cycle regeneration",
      "Swales and keyline design for landscape hydration"
    ],
    impact: "Permaculture water systems provide clean, sustainable water management solutions"
  },
  {
    number: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    image: "/images/sdg/SDG-7-Affordable-and-clean-energy-280x280.png",
    permacultureSolutions: [
      "Solar passive design reducing energy needs for heating and cooling",
      "Biogas from compost and anaerobic digesters",
      "Micro-hydro systems in appropriate landscapes",
      "Biomass and renewable energy integrated into farm systems"
    ],
    impact: "Permaculture integrates renewable energy systems with food and shelter production"
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment",
    image: "/images/sdg/SDG-8-Work-and-economic-growth-280x280.png",
    permacultureSolutions: [
      "Local food systems creating sustainable employment",
      "Value-added processing and farmers' market enterprises",
      "Eco-tourism and educational farm enterprises",
      "Cooperative business models sharing resources and profits"
    ],
    impact: "Permaculture creates meaningful work aligned with ecological regeneration"
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialisation",
    image: "/images/sdg/SDG-9-Industry-Innovation-and-Infrastructure-280x280.png",
    permacultureSolutions: [
      "Natural building techniques using local materials",
      "Distributed renewable energy and water systems",
      "Ecological waste treatment and circular economy systems",
      "Innovation in sustainable technologies and design"
    ],
    impact: "Permaculture develops resilient, low-impact infrastructure solutions"
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    image: "/images/sdg/SDG-10-Reduced-Inequalities-280x280.png",
    permacultureSolutions: [
      "Community land ownership and commons management",
      "Fair trade and direct farmer-to-consumer relationships",
      "Skill sharing and capacity building in underserved communities",
      "Access to healthy food regardless of economic status"
    ],
    impact: "Permaculture creates more equitable resource distribution and community ownership"
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    image: "/images/sdg/SDG-11-Sustainable-Cities-and-Communities-280x280.png",
    permacultureSolutions: [
      "Urban food forests and community gardens",
      "Green infrastructure for stormwater management and air purification",
      "Neighbourhood resource sharing and tool libraries",
      "Local food systems reducing transport and packaging"
    ],
    impact: "Permaculture transforms urban areas into productive, sustainable communities"
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    image: "/images/sdg/SDG-12-Responsible-consumption-and-production-280x280.png",
    permacultureSolutions: [
      "Circular economy principles with zero waste systems",
      "Local production reducing transport and packaging",
      "Repair, reuse, and upcycling in community workshops",
      "Seasonal eating and preserving reducing consumption impact"
    ],
    impact: "Permaculture embodies sustainable consumption through local, regenerative systems"
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    image: "/images/sdg/SDG-13-Climate-Action-280x280.png",
    permacultureSolutions: [
      "Carbon sequestration through soil building and tree planting",
      "Regenerative agriculture reducing greenhouse gas emissions",
      "Reduced food miles through local food systems",
      "Climate adaptation through diverse, resilient ecosystems"
    ],
    impact: "Permaculture is climate action - sequestering carbon whilst building resilience"
  },
  {
    number: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources",
    image: "/images/sdg/SDG-14-Life-Below-Water-280x280.png",
    permacultureSolutions: [
      "Watershed protection preventing agricultural runoff",
      "Sustainable fishing and aquaculture systems",
      "Coastal restoration and marine permaculture",
      "Plastic reduction through local production systems"
    ],
    impact: "Permaculture protects marine ecosystems through watershed-scale regenerative practices"
  },
  {
    number: 15,
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
    image: "/images/sdg/SDG-15-Life-on-Land-280x280.png",
    permacultureSolutions: [
      "Reforestation and food forest establishment",
      "Habitat creation for wildlife through diverse plantings",
      "Soil regeneration reversing desertification",
      "Biodiversity conservation through polyculture systems"
    ],
    impact: "Permaculture directly regenerates terrestrial ecosystems whilst providing human needs"
  },
  {
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development",
    image: "/images/sdg/SDG-16-Peace-Justice-and-Strong-Institutions-280x280.png",
    permacultureSolutions: [
      "Community decision-making and consensus building",
      "Cooperative ownership and resource sharing",
      "Conflict resolution through collaborative design processes",
      "Social permaculture strengthening community bonds"
    ],
    impact: "Permaculture builds social cohesion and cooperative governance systems"
  },
  {
    number: 17,
    title: "Partnership for the Goals",
    description: "Strengthen the means of implementation and revitalise the global partnership",
    image: "/images/sdg/SDG-17-Partnership-for-the-Goals-280x280.png",
    permacultureSolutions: [
      "Global networks sharing permaculture knowledge and techniques",
      "North-South cooperation in regenerative development",
      "Cross-sector partnerships in sustainable agriculture",
      "International permaculture education and certification"
    ],
    impact: "Permaculture creates global partnerships for regenerative development"
  }
]

export default function SDG() {
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
              Permaculture &amp; the <span className="gradient-text">UN SDGs</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover how permaculture principles and practices directly address all 17 UN Sustainable 
              Development Goals, providing practical solutions for global challenges whilst regenerating 
              our planet's living systems.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section variants={fadeInUp}>
            <Card className="bg-gradient-to-r from-forest-50 via-earth-50 to-sky-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-earth-400 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">The Perfect Alignment</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      The UN Sustainable Development Goals provide a framework for addressing humanity's greatest challenges by 2030. 
                      Permaculture offers practical, regenerative solutions that simultaneously address multiple SDGs whilst healing 
                      the planet and building resilient communities.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Based on the premise to "Leave No One Behind", permaculture's ethics of Earth Care, People Care, and Fair Share 
                      align perfectly with the interconnected nature of the SDGs, recognising that solutions in one area create 
                      positive impacts across many others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* SDG Mappings */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-center">How Permaculture Addresses Each SDG</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Explore how permaculture principles provide concrete solutions for each of the 17 goals.
              </p>
            </div>

            <div className="space-y-8">
              {sdgMappings.map((sdg, index) => (
                <motion.div key={sdg.number} variants={fadeInUp}>
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-forest-50 to-earth-50 p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={sdg.image}
                            alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                            width={80}
                            height={80}
                            className="rounded-lg shadow-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">SDG {sdg.number}: {sdg.title}</CardTitle>
                          <CardDescription className="text-base text-gray-700">
                            {sdg.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-forest-700 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Permaculture Solutions
                          </h4>
                          <ul className="space-y-2">
                            {sdg.permacultureSolutions.map((solution, solutionIndex) => (
                              <li key={solutionIndex} className="text-gray-700 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 flex-shrink-0"></span>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-earth-700 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            Impact &amp; Potential
                          </h4>
                          <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-earth-50 to-forest-50 p-4 rounded-lg">
                            {sdg.impact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card>
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4">
                    Ready to Contribute to Global <span className="gradient-text">Sustainable Development</span>?
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Every permaculture project, from a balcony garden to a bioregional initiative, contributes 
                    to achieving the UN SDGs. Start your regenerative journey today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/start">
                      <Button size="lg" className="group">
                        Start Your SDG Impact Journey
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/techniques">
                      <Button variant="outline" size="lg" className="group">
                        Learn Permaculture Techniques
                        <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}