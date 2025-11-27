'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
    PawPrint, Leaf, Heart, Globe, ArrowRight, Activity,
    Droplets, Sun, Sprout, ShieldCheck, Zap, Briefcase
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

const approaches = [
    {
        type: "Passive Rewilding",
        mechanism: "Stop interfering and let succession happen",
        activities: "Abandon farmland, remove drainage, stop hunting certain species",
        example: "Knepp Estate (UK) – 3,500 acres turned from intensive agriculture to thriving wilderness in 20 years"
    },
    {
        type: "Active/Trophic Rewilding",
        mechanism: "Reintroduce functional species to kick-start cascades",
        activities: "Reintroduce wolves, beavers, bison, vultures; proxy species (e.g., Tauros for aurochs)",
        example: "Yellowstone wolf reintroduction (1995) → willow/aspen recovery → beaver comeback → richer bird/fish life"
    }
]

const outcomes = [
    {
        outcome: "Explosive biodiversity increase",
        example: "Yellowstone: +400% beaver colonies, +500% willow cover, soaring songbird numbers after wolves returned",
        icon: Sprout
    },
    {
        outcome: "Carbon sequestration",
        example: "European rewilding with herbivores: 1–5 tCO₂/ha/yr extra in soils & biomass (2023 meta-analysis)",
        icon: Leaf
    },
    {
        outcome: "Natural flood & drought mitigation",
        example: "Dutch Oder Delta: re-meandered rivers reduced flood peaks by 30% while storing water in dry periods",
        icon: Droplets
    },
    {
        outcome: "New economic activities",
        example: "Rewilding Europe sites: average 40–200 €/ha/yr in eco-tourism, hunting leases, wild-product branding",
        icon: Activity
    },
    {
        outcome: "Mental health & cultural reconnection",
        example: "“Nature prescription” pilots in Scotland show measurable drops in stress hormones",
        icon: Heart
    },
    {
        outcome: "Resilience to climate shocks",
        example: "Diverse, process-led systems recover faster from fire, drought, pests than monocultures",
        icon: ShieldCheck
    }
]

const principles = [
    { principle: "Observe & Interact", rewilding: "Years of baseline monitoring before any intervention" },
    { principle: "Catch & Store Energy", rewilding: "Beaver ponds, floodplain forests, soil carbon" },
    { principle: "Obtain a Yield", rewilding: "Wild game, mushrooms, tourism, flood protection, clean water" },
    { principle: "Apply Self-Regulation", rewilding: "Predator-prey cycles naturally limit overgrazing" },
    { principle: "Use Renewable Resources", rewilding: "Wild systems run on sunlight & rainfall" },
    { principle: "Produce No Waste", rewilding: "Carrion → vultures → nutrient cycling" },
    { principle: "Design from Patterns", rewilding: "Trophic cascades are the ultimate pattern language" },
    { principle: "Integrate Rather Than Segregate", rewilding: "Mixed-species guilds (wolf–elk–aspen–beaver–songbirds)" },
    { principle: "Use Small & Slow Solutions", rewilding: "Start with one beaver or wolf pack → cascades over decades" },
    { principle: "Use & Value Diversity", rewilding: "Goal is maximum functional & species diversity" },
    { principle: "Use Edges & Value the Marginal", rewilding: "River corridors, forest-grassland edges explode with life" },
    { principle: "Creatively Use & Respond to Change", rewilding: "Disturbance (fire, flood, predation) is embraced as driver of renewal" }
]

const sdgs = [
    { id: 2, name: "Zero Hunger", desc: "Restores pollinators, fish stocks, wild foods; buffers crop failures" },
    { id: 6, name: "Clean Water", desc: "Beaver complexes filter water, raise water tables, reduce erosion" },
    { id: 13, name: "Climate Action", desc: "One of the top 10 most cost-effective NbS (Nature-based Solutions)" },
    { id: 14, name: "Life Below Water", desc: "River reconnection → migratory fish recovery (e.g., Oder Delta salmon)" },
    { id: 15, name: "Life on Land", desc: "Core goal – halt & reverse biodiversity loss at landscape scale" },
    { id: 3, name: "Good Health", desc: "Increased nature access → proven mental & physical health benefits" },
    { id: 8, name: "Decent Work", desc: "New green jobs in monitoring, eco-tourism, carbon credits" },
    { id: 11, name: "Sustainable Cities", desc: "Urban-adjacent rewilding reduces heat islands, improves air quality" },
    { id: 12, name: "Responsible Consumption", desc: "Reduces need for chemical inputs & imported feed" },
    { id: 17, name: "Partnerships", desc: "Requires cross-border, public-private, indigenous collaborations" }
]

export default function RewildingExplainer() {
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
                            <span className="gradient-text">Rewilding: Restoring the Wild</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            How It Works, What It Creates, Why It Matters, and Its Links to Permaculture & UN SDGs
                        </p>
                        <Link href="/rewilding/projects">
                            <Button size="lg" className="group">
                                Explore Global Rewilding Projects
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Infographic */}
                    <motion.section variants={fadeInUp} className="flex justify-center">
                        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <Image
                                src="/rewilding-infographic.jpg"
                                alt="Rewilding: Letting Nature Take the Lead Infographic"
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </motion.section>

                    {/* Section 1: What Is Rewilding? */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="gradient">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                                        <PawPrint className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold">What Is Rewilding and How Does It Actually Work?</h2>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Rewilding is the large-scale restoration of self-regulating ecosystems by restoring natural processes,
                                    reintroducing missing keystone species, removing human pressures, and allowing nature to “run itself”
                                    with minimal ongoing intervention.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {approaches.map((item, idx) => (
                                        <div key={idx} className="bg-white/50 rounded-xl p-6 border border-forest-100">
                                            <h3 className="font-bold text-lg text-forest-800 mb-2">{item.type}</h3>
                                            <p className="text-sm font-semibold text-gray-600 mb-2">{item.mechanism}</p>
                                            <p className="text-sm text-gray-600 mb-4">{item.activities}</p>
                                            <div className="text-xs bg-white p-3 rounded-lg border border-gray-100">
                                                <span className="font-bold text-forest-600">Example:</span> {item.example}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-forest-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-forest-800 mb-3">Typical Project Phases</h3>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Baseline surveys (biodiversity, soil, hydrology)</li>
                                        <li>Remove barriers (dams, fences) & invasives</li>
                                        <li>Reintroduce species (often in stages)</li>
                                        <li>Monitor trophic cascades & natural processes</li>
                                        <li>Reduce management over time (goal = wild, not “managed park”)</li>
                                    </ol>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Section 2: What Rewilding Creates */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Leaf className="w-8 h-8 text-earth-600" />
                                What Rewilding Creates & Stimulates
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {outcomes.map((item, idx) => (
                                <Card key={idx} variant="earth" className="h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <item.icon className="w-6 h-6 text-earth-600" />
                                            <h3 className="font-semibold text-lg">{item.outcome}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">{item.example}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 3: Why It Matters */}
                    <motion.section variants={fadeInUp}>
                        <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                                <Activity className="w-8 h-8" />
                                Why Rewilding Is Critically Important Now
                            </h2>
                            <ul className="space-y-4 text-lg text-red-900">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-xl">•</span>
                                    We have lost 68% of wildlife populations since 1970 (WWF Living Planet 2024)
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-xl">•</span>
                                    1 million species face extinction; many ecosystem services are near tipping points
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-xl">•</span>
                                    Conventional conservation (small fenced parks) is failing at scale
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-xl">•</span>
                                    Rewilding is one of the cheapest, most scalable nature-based solutions available (often &lt; US$100/ha vs. $1,000–10,000/ha for intensive restoration)
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 4: Links to Permaculture */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Sun className="w-8 h-8 text-amber-600" />
                                Direct Links Between Rewilding & Permaculture
                            </h2>
                            <p className="text-lg text-gray-600">
                                In practice: many permaculture farms now incorporate “wild zones” or reintroduce herbivores as proxy keystone species.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {principles.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center text-amber-700 font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.principle}</h4>
                                        <p className="text-gray-600 text-sm">{item.rewilding}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 5: UN SDGs */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Globe className="w-8 h-8 text-sky-600" />
                                Alignment with UN Sustainable Development Goals
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {sdgs.map((sdg, idx) => (
                                <div key={idx} className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                                    <div className="font-bold text-sky-700 mb-1">SDG {sdg.id}</div>
                                    <div className="font-semibold text-gray-900 text-sm mb-2">{sdg.name}</div>
                                    <p className="text-xs text-gray-600">{sdg.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 6: Comparison */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="gradient">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-semibold mb-6">Rewilding vs. Permaculture at a Glance</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-forest-600 uppercase tracking-wider">Permaculture</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-earth-600 uppercase tracking-wider">Rewilding</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {[
                                                { aspect: "Primary focus", perm: "Human needs met sustainably", wild: "Wild nature first, humans as beneficiaries" },
                                                { aspect: "Scale", perm: "Usually <100 ha (farms, villages)", wild: "Usually >1,000 ha (landscapes, corridors)" },
                                                { aspect: "Management intensity", perm: "High design, ongoing tending", wild: "Minimal once processes are restored" },
                                                { aspect: "Food production", perm: "Direct (gardens, orchards)", wild: "Indirect (wild harvest, tourism, resilience)" },
                                                { aspect: "Best for", perm: "Settlements, food security", wild: "Empty/degraded landscapes, biodiversity" }
                                            ].map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.aspect}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.perm}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.wild}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-6 text-gray-600 italic text-center">
                                    They are highly complementary: many leading projects now combine both (e.g., food-forest edges around wild cores).
                                </p>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Conclusion */}
                    <motion.section variants={fadeInUp} className="text-center">
                        <Card variant="earth" className="bg-earth-50 border-earth-200">
                            <CardContent className="p-8">
                                <div className="flex justify-center mb-4">
                                    <Zap className="w-12 h-12 text-earth-600" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Call to Action</h3>
                                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                                    Rewilding is not a luxury — it is one of the fastest, cheapest ways to pull Earth back from multiple tipping points.
                                    When paired with permaculture zones around human settlements, we get the most powerful regenerative toolkit available.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/rewilding/projects">
                                        <Button size="lg" className="group">
                                            <Briefcase className="mr-2 w-5 h-5" />
                                            Find Opportunities
                                        </Button>
                                    </Link>
                                    <Button variant="outline" size="lg" className="group">
                                        <Heart className="mr-2 w-5 h-5" />
                                        Support NGOs
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
