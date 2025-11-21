'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sprout, Microscope, Layers, Activity, Clock, CheckCircle, Droplets, Sun } from 'lucide-react'
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
        title: 'Maximize Living Roots 365 Days/Year',
        science: 'Plants pump 20–40% of photosynthates as root exudates (sugars, proteins, organic acids) that feed fungi & bacteria → rapid SOM buildup.',
        practice: 'Diverse cover-cocktails (10–20 species), relay cropping, perennial pastures.'
    },
    {
        title: 'Maximize Plant Diversity',
        science: 'Each plant species feeds a different microbial community; breaks pest/disease cycles; balances C:N ratios.',
        practice: 'Rotations proven to raise SOM 0.5–1% in 10 yrs: Corn → rye + hairy vetch + crimson clover → soybeans → wheat + radish + clover.'
    },
    {
        title: 'Minimize Soil Disturbance',
        science: 'Every tillage pass oxidizes 200–1000 kg C/ha; destroys fungal hyphae and aggregates.',
        practice: '20 years of no-till + covers can raise SOM 6–15 tons/ha.'
    },
    {
        title: 'Keep the Soil Covered (Armor)',
        science: 'Bare soil loses 5–50 tons/ha/yr erosion; surface OM oxidizes 10× faster.',
        practice: 'Crimper-rolled cover crops, permanent mulch, living mulches.'
    },
    {
        title: 'Integrate Adapted Livestock',
        science: 'Trampling incorporates litter, manure adds biology & labile C, hoof action aerates without compaction when recovery periods are long enough.',
        practice: 'AMP grazing can raise SOM 0.5–3 tons/ha/yr in grasslands.'
    },
    {
        title: 'Carbon-Sequestering Amendments',
        science: 'Biochar (50–1000+ yrs), Compost (2–10 yrs), Rock dusts (slow-release minerals).',
        practice: 'High-C:N woody mulch, Biochar, Vermicompost, Basalt/Wollastonite dusts.'
    },
    {
        title: 'Biological Inoculants & Extracts',
        science: 'Boosts microbial diversity and activity.',
        practice: 'Korean Natural Farming (IMO, LAB), Johnson-Su bioreactor compost, Aerated compost tea.'
    },
    {
        title: 'Water Management',
        science: 'Spreads water, slows runoff, increases infiltration.',
        practice: 'Keyline plowing, Swales & berms, Subsoil ripping + deep-rooted covers.'
    }
]

export default function DeepScienceOfSoilBlog() {
    return (
        <div className="relative overflow-hidden">
            {/* Header */}
            <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-earth-50 to-forest-100">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center text-earth-700 hover:text-earth-900 mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Global Solutions
                    </Link>

                    <motion.div initial="initial" animate="animate" variants={stagger}>
                        <motion.div variants={fadeInUp} className="mb-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-sm font-medium mb-4">
                                <Sprout className="w-4 h-4 mr-2" />
                                Soil Health
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                                Deep Science of Soil: <span className="gradient-text from-earth-600 to-forest-500">A Perpetual Soil Health Elevation Framework</span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Soil is not “dirt”—it’s a living, breathing, mineral-organic-water-air ecosystem. The goal is perpetual improvement of soil organic matter, biodiversity, and resilience.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                12 min read
                            </div>
                            <div className="flex items-center">
                                <Microscope className="w-4 h-4 mr-1" />
                                Scientific Framework
                            </div>
                            <div className="flex items-center">
                                <Layers className="w-4 h-4 mr-1" />
                                Regenerative Agriculture
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
                            src="/images/deep-science-of-soil-infographic.jpg"
                            alt="Deep Science of Soil: A Perpetual Soil Health Elevation Framework Infographic"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
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
                        {/* Core Scientific Pillars */}
                        <h2 className="text-3xl font-bold mb-6">1. Core Scientific Pillars of Soil Health</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <Card variant="earth" className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-3">
                                        <Layers className="w-5 h-5 text-earth-600 mr-2" />
                                        <CardTitle className="text-earth-800">A. Soil Physics</CardTitle>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li><strong>Structure:</strong> Aggregates (crumbs) formed by fungal hyphae, polysaccharides, roots</li>
                                        <li><strong>Porosity:</strong> 50% ideal pore space (25% air + 25% water)</li>
                                        <li><strong>Bulk density:</strong> Target 1.0–1.3 g/cm³ for most crops</li>
                                        <li><strong>Infiltration rate:</strong> &gt;2 inches/hour prevents runoff and erosion</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card variant="sky" className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-3">
                                        <Microscope className="w-5 h-5 text-sky-600 mr-2" />
                                        <CardTitle className="text-sky-800">B. Soil Chemistry</CardTitle>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li><strong>CEC:</strong> Clay + organic matter hold Ca²⁺, Mg²⁺, K⁺, etc.</li>
                                        <li><strong>Base saturation:</strong> Ideal ≈ 65–75% Ca, 10–15% Mg, 3–5% K</li>
                                        <li><strong>pH:</strong> 6.2–7.2 for maximum microbial availability</li>
                                        <li><strong>Redox potential:</strong> Aerobic &gt;+300 mV; Waterlogged &lt;+100 mV</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card variant="forest" className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-3">
                                        <Sprout className="w-5 h-5 text-forest-600 mr-2" />
                                        <CardTitle className="text-forest-800">C. Soil Biology (The Engine)</CardTitle>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li><strong>Ratio:</strong> Bacteria : Actinomycetes : Fungi ≈ 1:1:1</li>
                                        <li><strong>Mycorrhizal fungi:</strong> Increase P and Zn uptake 10–100×</li>
                                        <li><strong>Protozoa & nematodes:</strong> Release 30–70 kg N/ha/yr</li>
                                        <li><strong>Earthworms:</strong> 10–200 tons/ha/yr of castings</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card variant="earth" className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-3">
                                        <Activity className="w-5 h-5 text-earth-600 mr-2" />
                                        <CardTitle className="text-earth-800">D. Soil Organic Matter</CardTitle>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li><strong>Active fraction:</strong> 0.5–2 yr turnover (labile C)</li>
                                        <li><strong>Slow pool:</strong> 20–50 yr (humus, aggregate glue)</li>
                                        <li><strong>Passive pool:</strong> 500–5000 yr (recalcitrant charcoal)</li>
                                        <li><strong>Target:</strong> Increase SOM 0.3–1% per decade</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Perpetual Elevation Techniques */}
                        <h2 className="text-3xl font-bold mb-6">2. Perpetual Soil Health Elevation Techniques</h2>
                        <div className="space-y-6 mb-12">
                            {techniques.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-700 mb-2"><strong>Science:</strong> {item.science}</p>
                                            <p className="text-gray-700"><strong>Practice:</strong> {item.practice}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feedback Loops */}
                        <h2 className="text-3xl font-bold mb-6">3. Perpetual Feedback Loops You Must Monitor</h2>
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-12">
                            <p className="mb-4 font-semibold text-sky-900">Measure these every 1–3 years (Haney Test, Cornell Soil Health, PLFA):</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Soil respiration (CO₂ burst)</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Active carbon (POXC)</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Water-stable aggregates &gt;0.25 mm</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Haney Soil Health Score</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Infiltration rate</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                                    <span className="text-gray-700">Earthworm count & casting rate</span>
                                </div>
                            </div>
                        </div>

                        {/* 10-Year Blueprint */}
                        <h2 className="text-3xl font-bold mb-6">4. 10-Year Perpetual Elevation Blueprint</h2>
                        <div className="bg-gradient-to-r from-forest-50 to-earth-50 rounded-lg p-8 border border-forest-100 mb-12">
                            <h3 className="text-xl font-bold text-forest-900 mb-4">Example Temperate Climate Timeline</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex">
                                    <div className="w-24 font-bold text-forest-700 flex-shrink-0">Year 0</div>
                                    <div className="text-gray-700">Baseline soil test + Haney</div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 font-bold text-forest-700 flex-shrink-0">Year 1–3</div>
                                    <div className="text-gray-700">Transition to 100% no-till + multi-species cover cocktails</div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 font-bold text-forest-700 flex-shrink-0">Year 4–6</div>
                                    <div className="text-gray-700">Introduce occasional AMP grazing or mob stocking</div>
                                </div>
                                <div className="flex">
                                    <div className="w-24 font-bold text-forest-700 flex-shrink-0">Year 7+</div>
                                    <div className="text-gray-700">Add biochar once (10–30 t/ha) + annual Johnson-Su compost (5–10 t/ha)</div>
                                </div>
                            </div>

                            <div className="bg-white/60 rounded-lg p-4">
                                <h4 className="font-bold text-forest-800 mb-2">Result after 10–15 years:</h4>
                                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                                    <li>• SOM from 2% → 6–10%</li>
                                    <li>• CEC from 12 → 30+ meq/100 g</li>
                                    <li>• Infiltration from 0.5 → 8+ inches/hour</li>
                                    <li>• 50–90% reduction in fertilizer/pesticide</li>
                                    <li>• Drought & flood resilience dramatically increased</li>
                                </ul>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-earth-100 rounded-2xl p-8 text-center mb-12">
                            <h2 className="text-2xl font-bold text-earth-900 mb-4">One-Sentence Summary</h2>
                            <p className="text-xl text-earth-800 italic leading-relaxed">
                                "Feed the soil food web with diverse living roots and carbon-rich organic matter, protect it from disturbance and nakedness, cycle nutrients biologically with animals and microbes, and the soil will reward you with increasing fertility, water-holding, and carbon storage forever."
                            </p>
                        </div>

                        <p className="text-gray-600 text-center italic">
                            Let me know your climate, current soil type/texture, and farming/gardening system, and I can give you a hyper-specific perpetual elevation plan.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Next Steps CTA */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 via-white to-earth-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Start Your Soil Journey</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Explore more techniques for land management and regenerative agriculture.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/blog/land-management">
                            <Button size="lg" className="group">
                                View Land Management Guide
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
