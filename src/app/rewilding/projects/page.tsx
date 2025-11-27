'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    MapPin, Globe, Users, ExternalLink, Leaf, Heart, Briefcase, PawPrint
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
                name: "Umoya Khulula Wildlife Centre",
                location: "KwaZulu-Natal, South Africa",
                description: "Rescue/rehab center for injured/orphaned wildlife, emphasizing rewilding through release prep.",
                activities: "Animal feeding/cleaning, orphan hand-rearing, enclosure building, snare removal, release monitoring; 5-6 hrs/day.",
                involvement: "Apply via umoyakhululawildlife.org/volunteer; 1-12 weeks; $500-2,000 incl. dorm/meals; age 18+, fit for outdoors."
            },
            {
                name: "Big 5 Wildlife Reserve (Greater Kruger)",
                location: "Limpopo, South Africa",
                description: "Rewilding private reserve via habitat regen and anti-poaching for Big 5 species.",
                activities: "Data collection (camera traps), invasive removal, snare sweeps, ecosystem research; game drives included.",
                involvement: "Book at goeco.org; 2 weeks+; $1,200/2 weeks incl. lodging/meals; English basic."
            },
            {
                name: "Kariega Game Reserve",
                location: "Eastern Cape, South Africa",
                description: "Family-run reserve restoring Eastern Cape bushveld with rhino/lion reintroductions.",
                activities: "Tracking transects, scat sampling, habitat restoration, anti-poaching patrols; 4-5 hrs/day.",
                involvement: "Contact kariaga.co.za/volunteer; 1-4 weeks; $300/week work exchange option; min. age 16."
            },
            {
                name: "Wildlife ACT (Zululand Reserves)",
                location: "KwaZulu-Natal, South Africa",
                description: "Multi-reserve program monitoring rhinos, wild dogs for rewilding corridors.",
                activities: "Camera trap maintenance, population surveys, invasive clearing; limited to 6 vols/reserve.",
                involvement: "Apply wildlifeact.com/volunteer; 2-12 weeks; $400-1,500 incl. bush camp; PhD-led training."
            }
        ]
    },
    {
        name: "Asia",
        projects: [
            {
                name: "Borneo Orangutan Survival (Nyaru Menteng)",
                location: "Central Kalimantan, Indonesia",
                description: "Rewilding orphaned orangutans via soft-release islands in rainforest.",
                activities: "Forest school support, enclosure maintenance, health monitoring, habitat patrols; 5 hrs/day.",
                involvement: "Via volunteerworld.com; 4-8 weeks; $800/month incl. lodging; age 18+, no pet experience."
            },
            {
                name: "Chitwan Tiger Conservation",
                location: "Chitwan National Park, Nepal",
                description: "Habitat restoration for Bengal tigers, linking corridors to India.",
                activities: "Camera trapping, elephant patrols, invasive removal, community education; seasonal.",
                involvement: "gviusa.com/nepal-tiger; 2-12 weeks; $1,000/2 weeks incl. meals; basic fitness required."
            },
            {
                name: "Aravalli Biodiversity Park Rewilding",
                location: "Rajasthan, India",
                description: "Urban-fringe project reviving arid grasslands for leopards/birds.",
                activities: "Seed bombing, water harvesting, monitoring transects; weekends flexible.",
                involvement: "Contact aravallibiodiversitypark.org/vol; 1-3 months; free/donation-based; local/English."
            }
        ]
    },
    {
        name: "Europe",
        projects: [
            {
                name: "Rewilding Iberian Highlands",
                location: "Castilla y León, Spain",
                description: "Vulture/lynx reintroduction in highlands for trophic cascades.",
                activities: "Nest monitoring, carcass placement, habitat surveys, community workshops; 4+ months.",
                involvement: "Apply rewilding-spain.com/volunteering; free incl. lodging; age 18+, EU visa ease."
            },
            {
                name: "Rewilding Apennines",
                location: "Abruzzo, Italy",
                description: "Bear/wolf recovery in Apennine forests via natural processes.",
                activities: "Camera trap deployment, scat analysis, trail clearing; regular program.",
                involvement: "Via rewildingeurope.com/volunteer-database; 3-6 months; stipend possible; Italian/English."
            },
            {
                name: "Danube Delta Biosphere Reserve",
                location: "Tulcea, Romania",
                description: "Wetland rewilding for pelicans/fish via flooding restoration.",
                activities: "Bird counts, invasive removal, boat patrols; summer focus.",
                involvement: "conservationcarpathia.org/volunteering; 2-8 weeks; free/work exchange; EU preferred."
            },
            {
                name: "Vikos Rewilding Project",
                location: "Epirus, Greece",
                description: "Brown bear habitat linkage in Pindus Mountains.",
                activities: "Tracking, fruit tree planting, anti-poaching awareness; 1-3 months.",
                involvement: "workingabroad.com/greece-bear; $200/week incl. meals; min. age 18."
            },
            {
                name: "Rewilding Galicia Sustainable Living",
                location: "Galicia, Spain",
                description: "Woodland rewilding with agroforestry for Iberian ibex.",
                activities: "Trail building, seed collection, animal observation; May-Sept 2025 slots.",
                involvement: "workaway.info/host/6771814384ae; 2 weeks; free incl. shared housing; non-profit NGO."
            }
        ]
    },
    {
        name: "North America",
        projects: [
            {
                name: "Sky Island Alliance",
                location: "Arizona, USA / Sonora, Mexico",
                description: "Cross-border corridor for jaguars/pumas in Sky Islands.",
                activities: "Road decommissioning surveys, invasive removal, trail restoration; 160+ miles.",
                involvement: "skyislandalliance.org/volunteer; flexible 1-6 months; free/tools provided; US/MX visa."
            },
            {
                name: "Heartland Rewilding (Loess Hills)",
                location: "Iowa/Nebraska, USA",
                description: "Midwest prairie restoration for bison/wolves across Mississippi watershed.",
                activities: "Seed planting, fire management, wildlife monitoring; pilot phase 2025.",
                involvement: "heartlandrewilding.org/vol; 2-4 weeks; donation-based; partner with Project Coyote."
            },
            {
                name: "Northern Jaguar Project",
                location: "Sonora, Mexico",
                description: "Desert rewilding for jaguars via private reserve expansion.",
                activities: "Camera trapping, water point maintenance, anti-poaching; seasonal.",
                involvement: "northernjaguarproject.org/volunteer; 1-3 months; $100/week support fee; Spanish helpful."
            },
            {
                name: "ReWild Long Island",
                location: "New York, USA",
                description: "Coastal habitat regen for birds/turtles on urban edges.",
                activities: "Native planting, invasive pulls, beach cleanups; 2025 recognition events.",
                involvement: "rewildlongisland.org/volunteer; weekends/1-2 months; free; local focus."
            },
            {
                name: "Wildlands Network (Y2Y Extension)",
                location: "Montana, USA / Alberta, Canada",
                description: "Grizzly/wolf corridors from Yellowstone to Yukon.",
                activities: "Habitat mapping, bridge building support, public education; ongoing.",
                involvement: "wildlandsnetwork.org/get-involved; variable; free/internships; cross-border."
            }
        ]
    },
    {
        name: "South America",
        projects: [
            {
                name: "Amazon Ecology & Wildlife Rehab",
                location: "Iquitos, Peru",
                description: "Rainforest rewilding for monkeys/sloths via release programs.",
                activities: "Rehab care, forest patrols, vine bridge building; 2026 slots open.",
                involvement: "workingabroad.com/peru-amazon; 2-12 weeks; $400/week incl. jungle lodge; age 18+."
            },
            {
                name: "Rewilding Chiloé (Global Alliance)",
                location: "Chiloé Island, Chile",
                description: "Huemul deer/giant otter restoration in temperate forests.",
                activities: "Tracking collars, habitat fencing, community eco-tours; 3-6 months.",
                involvement: "rewild.org/chile-vol; stipend/lodging; Spanish/English; partner with WILD Foundation."
            },
            {
                name: "Pantanal Jaguar Rewilding",
                location: "Mato Grosso, Brazil",
                description: "Wetland corridor for jaguars linking Brazil/Paraguay.",
                activities: "Camera surveys, boat monitoring, anti-poaching; flood-season focus.",
                involvement: "goeco.org/brazil-jaguar; 1-4 weeks; $1,100/2 weeks incl. meals; fitness key."
            }
        ]
    },
    {
        name: "Oceania",
        projects: [
            {
                name: "Wild Animal Sanctuary (Central Coast)",
                location: "New South Wales, Australia",
                description: "Post-fire rehab for koalas/wombats with release fencing.",
                activities: "Enclosure repairs, feeding/orphan care, bush regen; hands-on with rangers.",
                involvement: "goeco.org/australia-wildlife; 2-8 weeks; $300/week incl. dorm; age 18+."
            },
            {
                name: "Kangaloola Wildlife Shelter",
                location: "Queensland, Australia",
                description: "Rewilding injured natives (kangaroos, birds) for bush release.",
                activities: "Cleaning/feeding, enclosure building, release prep; 4 weeks min.",
                involvement: "oceans2earth.org/kangaloola; work exchange; free incl. shared housing; visa WHV."
            },
            {
                name: "Kiwi Conservation Trust",
                location: "North Island, New Zealand",
                description: "Nocturnal bird reintroduction in predator-free islands.",
                activities: "Trap lines, chick rearing, habitat planting; night shifts.",
                involvement: "kiwiconservation.org/volunteer; 1-3 months; free/lodging; NZ residency preferred."
            }
        ]
    }
]

const globalNetworks = [
    {
        name: "Global Rewilding Alliance",
        description: "100+ partners (e.g., Africa 11, Latin America 16); search directory for local vols like jaguar rewilding in Colombia. Join via globalrewilding.earth/partners; free membership."
    },
    {
        name: "Rewilding Europe Network",
        description: "200+ initiatives; volunteer database for interns (4+ months) in bears/wolves. Sign up rewildingeurope.com/volunteer-database."
    },
    {
        name: "Workaway/WWOOF",
        description: "Filter \"rewilding\" for 100+ eco-hosts (e.g., NZ predator-free farms); $49/year, work 4-5 hrs/day for room/board."
    },
    {
        name: "GoEco/Volunteer World",
        description: "Curated 150+ wildlife programs ($300-1,500/2 weeks); ethical focus, incl. insurance."
    }
]

export default function Rewilding() {
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
                            <span className="gradient-text">Global Rewilding Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Rewilding restores ecosystems by reintroducing native species, removing barriers, and minimizing human interference.
                            Discover hands-on opportunities for volunteering, internships, and work exchanges in biodiversity hotspots.
                        </p>
                    </motion.div>

                    {/* Introduction Card */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="gradient">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                                        <PawPrint className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">About This Directory</h2>
                                        <p className="text-gray-600">Restoring the wild, one project at a time</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-700 mb-4">
                                    Drawing from networks like Rewilding Europe, Global Rewilding Alliance, and Wildlands Network,
                                    this list highlights active opportunities as of November 2025. It focuses on key examples by continent
                                    that offer meaningful engagement with ecosystem restoration.
                                </p>
                                <p className="text-gray-600">
                                    <strong>Note:</strong> Verify details as spots fill fast. Many projects require fitness for fieldwork.
                                    These opportunities align with rewilding's "3Cs": Cores, Carnivores, and Connectivity.
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
                                <h3 className="text-2xl font-semibold mb-4">Ready to Go Wild?</h3>
                                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                                    These opportunities are ideal for learning ecosystem dynamics on-site.
                                    Prioritize based on your skills (e.g., monitoring vs. physical labor) or a specific species/region.
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
