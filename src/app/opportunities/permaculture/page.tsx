'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Globe, Users, ExternalLink, Leaf, Heart, Briefcase
} from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
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

const regions = [
  {
    name: "Africa",
    projects: [
      {
        name: "Kinesi Orphans Permaculture Project",
        location: "Musoma, Tanzania",
        description: "Community-led demo plots teaching orphans and locals regenerative farming in semi-arid conditions.",
        activities: "Soil building, tree planting, composting, school garden maintenance; 4-6 hrs/day.",
        involvement: "Email via permacultureglobal.org/projects/16; min. 2 weeks; work exchange (meals/lodging); donations encouraged."
      },
      {
        name: "Greening the Desert (Zaytuna Farm extension)",
        location: "Jordan (Africa partnerships)",
        description: "Arid restoration scaling to Sahel collaborations. (See prior entry for core; Africa focus via partnerships.)",
        activities: "Water harvesting, agroforestry; flexible.",
        involvement: "Apply at greeningthedesertproject.org; 1+ weeks; free with work."
      }
    ]
  },
  {
    name: "Asia",
    projects: [
      {
        name: "Tiny Permaculture Community Farm",
        location: "Kulai, Johor, Malaysia",
        description: "Syntropic agroforestry on small urban fringe land for community food security. (Prior entry.)",
        activities: "Planting/harvesting, eco-infrastructure; full days.",
        involvement: "WWOOF Independents; work exchange; max 2 spots."
      },
      {
        name: "Varanashi Organic Farms",
        location: "Varanasi, India",
        description: "Permaculture homestead blending ancient practices with modern regen ag.",
        activities: "Herbalism, veggie guilds, animal care; 5 hrs/day.",
        involvement: "WWOOF India; min. 1 month; free stay/meals; apply via wwoofindia.org."
      },
      {
        name: "Parkrose Permaculture",
        location: "Chiang Mai, Thailand",
        description: "Urban-rural hybrid teaching gift economy and resilient gardens.",
        activities: "Workshop facilitation, food forest expansion; variable.",
        involvement: "Worldpackers; 2-4 weeks; $10-20 fee; book online."
      }
    ]
  },
  {
    name: "Europe",
    projects: [
      {
        name: "Bogata Šuma Permaculture Farm",
        location: "Inland Croatia",
        description: "Forested homestead for eco-building and herbalism. (Prior.)",
        activities: "Gardening, propagation, building; 4+ weeks.",
        involvement: "bogatasuma.com form; free."
      },
      {
        name: "Permaculture Retreat Farm",
        location: "Litija, Slovenia",
        description: "Low-impact forest living with food systems. (Prior.)",
        activities: "Gardening, forestry, cooking; 5 hrs/day.",
        involvement: "Hippohelp.com; flexible; free."
      },
      {
        name: "Melliodora Homestead",
        location: "Hepburn Springs, Australia (EU ties via networks)",
        description: "Iconic demo site by co-founder David Holmgren; EU volunteers via exchanges.",
        activities: "Design consulting, orchard management; seasonal.",
        involvement: "permacultureprinciples.com; internships $500/month stipend possible; apply direct."
      },
      {
        name: "Permaculture Land Centre CIC",
        location: "Devon, UK",
        description: "15-acre diverse site for sustainable practices and woodland management.",
        activities: "Food growing, site development; ongoing.",
        involvement: "Workaway.info/host/724664645977; 2+ weeks; work exchange."
      },
      {
        name: "Huerto Roma Verde",
        location: "Madrid, Spain",
        description: "Urban permaculture park with community gardens.",
        activities: "Composting, workshops, biodiversity plots; weekends/weekdays.",
        involvement: "Volunteer via permaculturedemadrid.org; free; Spanish helpful."
      },
      {
        name: "Umbria Green Lung Farm",
        location: "Umbria, Italy",
        description: "Old farmhouse integrating permaculture with agritourism.",
        activities: "Olive/fruit care, natural building; 4-5 hrs/day.",
        involvement: "Workaway last-minute search; free meals/lodging."
      }
    ]
  },
  {
    name: "North America",
    projects: [
      {
        name: "Rainier Beach Urban Farm & Wetland",
        location: "Seattle, WA, USA",
        description: "Tilth Alliance project on food security and soil health in urban setting.",
        activities: "Urban gardening, wetland restoration, community events; 3-5 hrs/week.",
        involvement: "tilthalliance.org/volunteer; flexible; free training."
      },
      {
        name: "Project Bonafide",
        location: "Nosara, Costa Rica (NA networks)",
        description: "Coastal permaculture community with design courses.",
        activities: "Farm maintenance, eco-construction; 20 hrs/week.",
        involvement: "projectbonafide.com/volunteer; 1-3 months; $300/month incl. meals."
      },
      {
        name: "WWOOF USA Permaculture Co-op",
        location: "Various (e.g., Pacific NW)",
        description: "Fledgling co-op farms emphasizing education.",
        activities: "Planting, harvesting, eco-center building; variable.",
        involvement: "wwoofusa.org/search (filter permaculture); $40/year membership; work exchange."
      }
    ]
  },
  {
    name: "South America",
    projects: [
      {
        name: "Yanapuma Andean Permaculture",
        location: "Ibarra, Ecuador",
        description: "Biodiversity and reforestation in Andes. (Prior.)",
        activities: "Tree planting, habitat work; 3+ months.",
        involvement: "yanapuma.org; self-funded."
      },
      {
        name: "MAARA Eco Farm",
        location: "Nova Friburgo, Brazil",
        description: "Atlantic Rainforest regen with agroforestry. (Prior.)",
        activities: "Coffee guilds, bioconstruction; 3 days/week.",
        involvement: "volunteerworld.com; €224/week."
      },
      {
        name: "Permaculture & Natural Building",
        location: "San Agustín, Colombia",
        description: "Huila region site for earth-integrated designs.",
        activities: "Cob building, food forests, permaculture installs; 4 hrs/day.",
        involvement: "workaway.info/host/469134489462; 1-8 weeks; free."
      },
      {
        name: "Let's Grow Trees",
        location: "Cusco, Peru",
        description: "Reforestation and organic farming in cloud forest. (Prior.)",
        activities: "Tree planting, farm care; 2 weeks-6 months.",
        involvement: "wwoofindependents.org/host/45840."
      }
    ]
  },
  {
    name: "Oceania & Caribbean",
    projects: [
      {
        name: "Organic Olive & Agritourism Farm",
        location: "Tuscany-inspired, New Zealand",
        description: "Small-scale ecological farm with visitor stays.",
        activities: "Olive pruning, permaculture demos; seasonal.",
        involvement: "wwoof.net.nz (search recent); work exchange."
      },
      {
        name: "Vicky's Keys Permaculture",
        location: "Sint Maarten, Caribbean",
        description: "Hurricane-resilient food sovereignty project. (Prior.)",
        activities: "Food forests, water systems; 1+ weeks.",
        involvement: "volunteerworld.com; €285/week."
      },
      {
        name: "Gold Coast Permaculture Internship",
        location: "Queensland, Australia",
        description: "Coastal demo site with paid elements for long-term.",
        activities: "Advanced design, business ops; 3-6 months.",
        involvement: "Reddit/WWOOF AU; $200-500/month stipend; apply via local guilds."
      }
    ]
  }
]

const globalNetworks = [
  {
    name: "WWOOF International",
    description: "130+ countries; search \"permaculture\" for 500+ hosts (e.g., family farms in France, Japan). Membership $20-50/year; work 4-6 hrs/day for room/board."
  },
  {
    name: "Workaway",
    description: "190+ countries, 4,600+ farm/permaculture hosts (e.g., Mexico gardening, Malaysia builds). $49/year; filter by tags."
  },
  {
    name: "Worldpackers",
    description: "100+ countries, eco-focused exchanges (e.g., US permaculture projects). $49/year; insurance included."
  },
  {
    name: "GoOverseas/GoEco",
    description: "Curated programs like sustainable ag in Ecuador ($1,500/2 weeks incl. meals)."
  }
]

export default function Projects() {
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
              <span className="gradient-text">Global Permaculture Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive snapshot of active opportunities as of November 2025—prioritizing diversity 
              and hands-on involvement. Discover volunteering, work exchanges, and internships across the globe.
            </p>
          </motion.div>

          {/* Introduction Card */}
          <motion.section variants={fadeInUp}>
            <Card variant="gradient">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">About This Directory</h2>
                    <p className="text-gray-600">Connecting you with the soil and community</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Building on initial research, this directory deepens the search across WWOOF, Workaway, 
                  Worldpackers, and more. It covers key hubs by continent, focusing on those with open calls 
                  for support, learning, and on-the-job training.
                </p>
                <p className="text-gray-600">
                  <strong>Note:</strong> Costs are approximate; verify for updates. For immersion, start with 
                  WWOOF ($20-50/year membership) or Workaway ($49/year) to access full listings.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Regional Projects */}
          {regions.map((region, regionIndex) => (
            <motion.section key={regionIndex} variants={fadeInUp}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-earth-600" />
                  {region.name}
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name & Location</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volunteer Activities</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How to Get Involved</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {region.projects.map((project, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-normal">
                          <div className="text-sm font-medium text-forest-700">{project.name}</div>
                          <div className="text-sm text-gray-500">{project.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">
                          {project.description}
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">
                          {project.activities}
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">
                          {project.involvement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
          ))}

          {/* Global Networks */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-sky-600" />
                Global Networks for More Opportunities
              </h2>
              <p className="text-lg text-gray-600">
                Platforms to find thousands more opportunities worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {globalNetworks.map((network, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card variant="sky" className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{network.name}</h3>
                      <p className="text-gray-600 text-sm">{network.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Closing */}
          <motion.section variants={fadeInUp} className="text-center">
            <Card variant="earth" className="bg-earth-50 border-earth-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-earth-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Involved?</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  This list emphasizes ethics-aligned immersion—observe first, contribute meaningfully. 
                  Consider your goals: skill-building or community? Check visas early; many offer references for resumes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <Briefcase className="mr-2 w-5 h-5" />
                    Find Your Opportunity
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
