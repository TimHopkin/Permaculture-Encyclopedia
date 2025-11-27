'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    BookOpen, CheckCircle2, Circle, Clock, ArrowRight, ArrowLeft, Award,
    Leaf, Target, Building2, Map, Globe, Sprout, X, Menu
} from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
}

// Complete course data with embedded content
const courseData = {
    modules: [
        {
            id: 1,
            title: "Foundations of Permaculture",
            icon: Leaf,
            color: "forest",
            lessons: [
                {
                    id: "1-1",
                    title: "What is Permaculture?",
                    duration: "20 min",
                    content: `
# What is Permaculture?

## Overview
Permaculture is a revolutionary design system that works with nature, not against it. The word itself is a contraction of "permanent agriculture" and "permanent culture," reflecting its holistic approach to creating sustainable human habitats.

## The Birth of Permaculture
In the 1970s, Australians Bill Mollison and David Holmgren developed permaculture as a response to destructive industrial agricultural methods. They observed that natural ecosystems are incredibly productive without human intervention, and asked: "Why can't we design human systems that work the same way?"

## Core Definition
**Permaculture is a design science** for creating productive, sustainable, and regenerative systems that:
- Work with natural patterns and processes
- Generate no waste
- Build soil instead of depleting it
- Create abundance for people and the planet
- Are self-regulating and resilient

## Key Characteristics

### 1. Design-Based Thinking
Permaculture isn't a specific technique—it's a way of thinking about design. Whether you're planning a garden, a farm, a business, or a community, permaculture principles guide you to create systems that are:
- Energy-efficient
- Waste-free
- Self-sustaining
- Resilient to change

### 2. Whole Systems Approach
Rather than viewing elements in isolation, permaculture considers:
- How elements interact with each other
- How energy flows through the system
- How waste from one element becomes food for another
- How to stack functions for maximum efficiency

### 3. Pattern Recognition
Nature uses the same patterns again and again—spirals, branches, networks. Permaculture trains you to recognize and apply these patterns in your designs.

## Practical Applications

Permaculture can be applied to:
- **Food production**: Gardens, farms, food forests
- **Water management**: Harvesting, storage, conservation
- **Energy**: Passive solar, renewable systems
- **Building**: Natural materials, efficient design
- **Community**: Cooperation, sharing, resilience
- **Economics**: Local currencies, gift economy
- **And more**: The principles scale from windowsill to bioregion

## Why It Matters Now

In an era of climate change, resource depletion, and ecosystem collapse, permaculture offers proven solutions that:
- Sequester carbon in soil
- Restore degraded landscapes
- Produce abundant food locally
- Build community resilience
- Create meaningful livelihoods

## Your Journey Starts Here
Over this course, you'll learn to think like a permaculture designer—seeing connections, recognizing patterns, and creating systems that heal the planet while meeting human needs.

---
**Next Steps**: In the following lessons, we'll explore the three ethics that form the foundation of all permaculture work.
          `
                },
                {
                    id: "1-2",
                    title: "The Three Ethics",
                    duration: "25 min",
                    content: `
# The Three Ethics of Permaculture

## Introduction
Every permaculture design must honor three fundamental ethics. These aren't just nice ideas—they're **design constraints** that ensure our solutions truly benefit both people and planet.

## 1. Earth Care 🌍

### The Principle
"Care for the planet and all life upon it"

### What It Means
- Rebuild natural capital instead of depleting it
- Restore degraded landscapes
- Increase biodiversity
- Protect and regenerate soil
- Conserve and cycle water
- Sequester carbon

### In Practice
Earth Care means asking:
- *Will this design enhance or degrade the ecosystem?*
- *Am I building soil or depleting it?*
- *Does this create habitat or destroy it?*
- *Am I using resources regeneratively?*

### Real Examples
- **Composting** returns nutrients to soil instead of sending waste to landfills
- **Food forests** create multilayered habitats while producing food
- **Water harvesting** recharges aquifers instead of causing erosion
- **Natural building** uses local, renewable materials

## 2. People Care 👥

### The Principle
"Care for people and ensure their needs are met"

### What It Means
- Everyone deserves access to:
  - Healthy food
  - Clean water
  - Shelter
  - Education
  - Meaningful work
  - Community
- Create systems that support human dignity
- Build resilience against shocks
- Foster cooperation over competition

### In Practice
People Care means asking:
- *Does this design meet real human needs?*
- *Is it accessible and affordable?*
- *Does it create meaningful livelihoods?*
- *Does it strengthen community bonds?*

### Real Examples
- **Community gardens** provide food, education, and social connection
- **Skill-sharing networks** build local capacity
- **Natural housing** creates healthy, affordable shelter
- **Cooperative businesses** distribute benefits fairly

## 3. Fair Share 🤝

### The Principle
"Set limits to consumption and reproduction, redistribute surplus"

Also called "Fair Share" or "Future Care"—recognizing that unlimited growth on a finite planet is impossible.

### What It Means
- Take only what you need
- Share the surplus
- Set limits to consumption
- Think seven generations ahead
- Return what you don't need to the system
- Live within Earth's carrying capacity

### In Practice
Fair Share means asking:
- *Am I taking more than my fair share?*
- *What surplus can I redistribute?*
- *How can I help others meet their needs?*
- *What legacy am I creating for future generations?*

### Real Examples
- **Seed saving and sharing** keeps varieties in circulation
- **Tool libraries** share resources across communities  
- **Gleaning networks** rescue surplus food
- **Time banks** redistribute skills and labor
- **Land trusts** remove land from speculation

## The Ethics in Harmony

These three ethics work together:

### Example: A Community Orchard
- **Earth Care**: Builds soil, creates habitat, sequesters carbon
- **People Care**: Provides free food, education, gathering space
- **Fair Share**: Excess fruit donated to food banks

### Example: Solar Panels
- **Earth Care**: Clean energy, no extraction damage
- **People Care**: Lower energy bills, energy independence
- **Fair Share**: Surplus power fed back to grid

## Testing Your Designs

Before implementing any design, ask:
1. ✓ Does it align with Earth Care?
2. ✓ Does it align with People Care?
3. ✓ Does it align with Fair Share?

If the answer to any is "no," rethink your design.

## Common Misconceptions

### "Earth Care means no human impact"
**False**. Humans can be ecosystem *regenerators*. We can create more abundance than we consume.

### "People Care vs Earth Care"
**False dichotomy**. When we care for Earth, we care for people. Degraded ecosystems = suffering people.

### "Fair Share means poverty"
**False**. It means abundance for all through sharing, not scarcity through hoarding.

## Moving Forward

These ethics are your compass. Every principle and technique you learn in this course flows from these three foundational values.

---
**Reflection**: Think about a project you're involved in. How does it align with each ethic? Where could it improve?
          `
                },
                {
                    id: "1-3",
                    title: "Observing Your Environment",
                    duration: "30 min",
                    content: `
# Observing Your Environment

## The First Principle
"Observe and Interact" is the first of the 12 permaculture principles—and for good reason. **Observation is the foundation of all good design.**

## Why Observation Matters

### The Cost of Rushing
Many projects fail because people jump straight to solutions without understanding the system. Examples:
- Planting trees that die because soil drainage wasn't observed
- Building structures that flood because water patterns weren't mapped
- Installing systems that waste energy because sun/shade patterns weren't tracked

### The Power of Patience
Bill Mollison said: **"Observe for at least one year before implementing"**

Why a full year?
- You see all four seasons
- You understand water patterns in wet and dry periods
- You observe sun angles at different times
- You notice which areas are windy, calm, etc.
- You identify existing resources (wild edibles, wildlife corridors, microclimates)

## What to Observe

### 1. Water 💧
Water is life. Understanding water flow is critical.

**Observe**:
- Where does water enter your site?
- Where does it flow during rain?
- Where does it pool or pond?
- Where is the water table? (Dig test holes)
- Are there wet spots even in dry weather?
- Where does water exit your site?
- What's the quality? (Clean, polluted, sediment-laden?)

**Tools**:
- Walk your site during and after rain
- Use stakes and flagging tape to mark flow paths
- Take photos at the same spots over time
- Dig test pits to check soil moisture at depth

### 2. Sun & Shade ☀️
Energy from the sun powers everything.

**Observe**:
- Sun path at different seasons (use apps like Sun Surveyor)
- Which areas get full sun? Partial? Full shade?
- How do shadows change through the day?
- How do shadows change through the year?
- Heat zones (south-facing walls, paved areas)
- Cold zones (frost pockets, north-facing slopes)

**Tools**:
- Track shadows at 9am, noon, 3pm, 6pm
- Use a sun path diagram for your latitude
- Note which areas stay frozen longest in winter
- Identify microclimates (warm spots, cool spots)

### 3. Wind 🌬️
Wind affects temperature, evaporation, plant health, and building design.

**Observe**:
- Prevailing wind direction (summer vs winter)
- Wind speed (calm, breezy, strong)
- Where are wind tunnels?
- Where are wind shadows (calm areas behind obstacles)?
- Does wind bring salt spray? Dust? Pollen?

**Tools**:
- Tie ribbons to posts at different heights
- Use a simple anemometer
- Observe how trees are shaped by wind
- Note where snow drifts accumulate

### 4. Soil 🌱
Soil is your foundation.

**Observe**:
- Soil texture (clay, sand, silt, loam)
- Soil structure (compacted, loose, aggregated)
- Soil depth (dig test pits)
- Soil life (worms, fungi, insects)
- Drainage (how fast does water percolate?)
- pH (test kits are cheap)
- Existing vegetation (indicator plants tell you about soil)

**Tools**:
- Jar test for texture
- Dig holes in different areas
- Smell the soil (good soil smells sweet)
- Look for worms, fungi, and other life

### 5. Existing Vegetation 🌿
Plants tell you the story of your site.

**Observe**:
- What grows well naturally?
- Indicator plants (weeds reveal soil conditions)
- Succession stage (pioneer plants vs climax forest?)
- Health of plants (vigorous vs stressed)
- Wildlife using plants (food, shelter, nesting)
- Invasive species

**Examples**:
- **Dock, sorrel** → Acidic soil
- **Nettles** → Rich, disturbed soil
- **Horsetail** → Wet, compacted soil
- **Clover** → Nitrogen-deficient soil

### 6. Wildlife & Ecosystem 🦎
Your site is part of a larger ecosystem.

**Observe**:
- Birds (which species, when, where?)
- Insects (pollinators, predators, pests)
- Mammals (tracks, scat, browse patterns)
- Amphibians (frogs = healthy water)
- Reptiles (snakes, lizards)
- Wildlife corridors and paths

### 7. Human Patterns 👥
If people use the site, observe their behavior.

**Observe**:
- Where do people naturally walk? (desire paths)
- Where do they gather?
- Where do they avoid?
- Traffic patterns
- Noise sources
- Views (beautiful and ugly)

## Tools for Observation

### Base Maps
Create a base map of your site showing:
- Property boundaries
- North arrow
- Scale
- Existing structures
- Slopes and contours
- Water features

### Overlay Maps
Create separate overlay maps for:
- Water flow and zones
- Sun/shade patterns
- Wind patterns
- Soil types
- Vegetation
- Access and circulation

### Observation Journal
Keep a daily or weekly journal noting:
- Weather patterns
- Wildlife sightings
- Plant phenology (when things leaf out, flower, fruit)
- Light and shadow changes
- Ideas and insights

### Photography
Take photos from the same spots at:
- Different times of day
- Different seasons
- Different weather conditions

## The Art of Sitting Still

**Spend time just sitting in different spots on your site.**

- Sit for 30 minutes without doing anything
- Notice sounds, smells, light, temperature
- Observe what happens around you
- Different times of day reveal different patterns

This is when insights emerge that surveys and data can't capture.

## From Observation to Design

Good observation leads to:
- **Working with what you have** instead of fighting it
- **Identifying resources** others might miss (free mulch from fall leaves)
- **Avoiding costly mistakes** (like planting in a frost pocket)
- **Discovering opportunities** (a slope = potential for water harvesting)

## Practice Exercise

Choose a spot (even a small one). For one week:
1. Spend 15 minutes there each day
2. Notice something new each time
3. Record your observations
4. By day 7, you'll be amazed at how much you've learned

---
**Remember**: "The problem is the solution" - Every challenge you observe is an opportunity for clever design.
          `
                },
                {
                    id: "1-4",
                    title: "Getting Started Basics",
                    duration: "45 min",
                    content: `
# Getting Started with Permaculture

## Where to Begin?

You've learned what permaculture is, understood the ethics, and know how to observe. Now the question is: **"How do I actually start?"**

Good news: You can start TODAY, right where you are, with what you have.

## Start Small, Start Now

### The Minimum Viable Permaculture Action
**Start composting**. Seriously, that's it.

Why composting?
- ✓ Embodies all three ethics
- ✓ Turns waste into a resource
- ✓ Builds soil
- ✓ Reduces methane from landfills
- ✓ Can be done anywhere (even apartments)
- ✓ Immediate results

## The Permaculture Zones

Before designing anything, understand the **zone system**—a way of organizing space based on frequency of use and need for attention.

### Zone 0: The Home
- Your house or living space
- Energy efficiency
- Indoor plants
- Worm bin
- Sprout growing

### Zone 1: Daily Attention
- Right outside your door
- High-maintenance annual vegetables
- Herbs you use constantly
- Salad greens
- Compost bin

**Start here first!** Perfect this before expanding.

### Zone 2: Weekly Attention
- Main vegetable gardens
- Berry bushes
- Fruit trees (dwarf)
- Chicken coop
- Greenhouse

### Zone 3: Occasional Attention
- Main crops (storage crops)
- Standard fruit trees
- Managed grazing
- Larger water storage

### Zone 4: Wild Management
- Timber/firewood production
- Foraging
- Wild food collection
- Habitat

### Zone 5: Wild/Untouched
- Observation area
- Learning from nature
- Seed source for natives
- Wildlife refuge
- NO human intervention

## Your First Year Plan

### Months 1-3: Observe & Learn
- Create base map of your space
- Start observation journal
- Begin composting
- Read and research
- Connect with local permaculture groups
- Visit local permaculture sites

### Months 4-6: Design Zone 1
- Design your Zone 1 (area right outside door)
- Start with easy wins:
  - Herb spiral
  - Salad garden
  - Perennial herbs
- Sheet mulch a small area
- Install rain barrel

### Months 7-9: Implement & Adjust
- Implement your Zone 1 design
- Observe what works
- Adjust what doesn't
- Start designing Zone 2
- Plant perennials (trees, shrubs)

### Months 10-12: Expand & Reflect
- Harvest and preserve
- Review your year
- Plan improvements
- Celebrate successes
- Prepare for next year

## Essential First Projects

### 1. Compost System
**Why**: Foundation of soil building
**How**:
- 3-4 foot pile minimum
- Mix greens (nitrogen) and browns (carbon) 30:1 ratio
- Keep moist like wrung-out sponge
- Turn weekly for fast compost, or just let it sit for slow compost

### 2. Sheet Mulching
**Why**: Instant" garden bed without tilling
**How**:
1. Mow existing grass/weeds
2. Layer cardboard (no tape/staples)
3. Add 4-6" compost
4. Add 4-6" mulch (straw, leaves, wood chips)
5. Plant immediately or wait 6 weeks

### 3. Herb Spiral
**Why**: Creates multiple microclimates in small space
**How**:
- Build spiral of stone/brick, 4-5' diameter
- Center highest (2-3'), spirals down
- Top = hot, dry (rosemary, thyme)
- Middle = moderate (sage, oregano)
- Bottom = moist (parsley, cilantro)
- Optional: Tiny pond at base

### 4. Rain Harvesting
**Why**: Free water, reduces runoff
**How**:
- Start simple: rain barrel on downspout
- 1,000 sq ft roof + 1" rain = 600 gallons!
- Use for garden watering
- Advanced: swales, ponds, cisterns

### 5. Perennial Planting
**Why**: Food production that lasts years
**How**:
- Start with easy perennials:
  - Rhubarb, asparagus, artichokes
  - Perennial herbs (mint, oregano, thyme)
  - Berry bushes (raspberries, currants)
  - Fruit trees (if space allows)

## Common Beginner Mistakes

### ❌ Starting Too Big
**Problem**: Overwhelm, burnout, abandonment
**Solution**: Perfect 100 sq ft before expanding to 1,000

### ❌ Skipping Observation
**Problem**: Costly mistakes, failed plants
**Solution**: Observe for at least one season first

### ❌ Not Building Soil First
**Problem**: Plants struggle, diseases, pests
**Solution**: Compost, mulch, cover crops—build soil for 6+ months

### ❌ Monocultures
**Problem**: Pest buildup, disease, low yields
**Solution**: Polycultures, guilds, diversity

### ❌ Annual-Only Thinking
**Problem**: All work, no accumulation
**Solution**: Plant perennials for long-term abundance

## Resources Needed to Start

### Free/Cheap
- Cardboard (ask stores)
- Leaves (neighbors, curbside)
- Kitchen scraps (your home)
- Seeds (save your own, seed swaps)
- Knowledge (library, internet)
- Observation (just your time)

### Small Investment
- Basic hand tools (shovel, rake, hoe, pruners)
- Compost bin (or build from pallets)
- Mulch (wood chips often free from arborists)
- Seeds (heirloom varieties)
- Rain barrel (~$50-100)

### Not Needed to Start
- ❌ Expensive equipment
- ❌ Tiller/tractor
- ❌ Perfect setup
- ❌ Large budget
- ❌ Certificate (though PDC is great later)

## Finding Your Community

### Online
- Local permaculture Facebook groups
- /r/permaculture on Reddit
- Permies.com forums
- YouTube channels (Geoff Lawton, Andrew Millison)

### In-Person
- Permaculture meetups
- Garden clubs
- Seed swaps
- Work parties at local permaculture sites
- Look for PDC (Permaculture Design Certificate) courses

## Your First Season Goals

By the end of your first growing season, you should have:
- ✓ One successful Zone 1 garden producing food
- ✓ Active compost system
- ✓ At least 3 perennial plants established
- ✓ Basic water harvesting (even just one rain barrel)
- ✓ Observation journal with one year of data
- ✓ Connection to local permaculture community

## The Permaculture Mindset

Remember:
- **You already have enough** to start
- **Your "mistakes" are learning** opportunities
- **Small and slow solutions** are better than big and fast failures
- **Nature is your teacher** - observe and copy
- **You're part of a movement** - millions doing this worldwide

## Take Action Today

Choose ONE thing from this lesson and do it this week:
1. Start a compost pile
2. Create a base map of your space
3. Join a local permaculture group
4. Plant one herb
5. Install a rain barrel
6. Sheet mulch a small area

---
**Remember**: "The best time to plant a tree was 20 years ago. The second best time is today."
          `
                }
            ]
        },
        {
            id: 2,
            title: "Design Principles Mastery",
            icon: Target,
            color: "sky",
            lessons: [
                {
                    id: "2-1",
                    title: "Principles 1-6: Building the Foundation",
                    duration: "45 min",
                    content: `
# Permaculture Principles 1-6: Building the Foundation

The 12 permaculture design principles are your design toolkit. Let's explore the first six in depth.

## Principle 1: Observe and Interact 👁️

**"Beauty is in the eye of the beholder"**

### Core Concept
Before acting, observe. Before designing, understand. Take time to engage with your system deeply.

### Application
- Spend a full year observing your site before major changes
- Notice patterns, flows, and relationships
- Test ideas on a small scale first
- Ask "why" five times before assuming you understand

### Example
A farmer noticed deer always jumped a fence at the same spot. Instead of building a higher fence, he built a simple gate there—the deer's "desire path" became a managed entry point.

## Principle 2: Catch and Store Energy ⚡

**"Make hay while the sun shines"**

### Core Concept
Capture and store resources when they're abundant for use when they're scarce.

### Forms of Energy to Catch
- **Sun**: Solar panels, passive solar, greenhouses
- **Water**: Rain barrels, ponds, cisterns, swales
- **Wind**: Windmills, windbreaks create calm zones
- **Biomass**: Compost stores nutrients
- **Knowledge**: Seed saving stores genetic information
- **Money**: Savings for lean times

### Example
A swale (level trench on contour) captures rainwater and stores it in the soil. During heavy rains, it prevents erosion and flooding. During dry periods, the stored water keeps plants alive.

**The Formula**: Abundance in one season → Storage → Resource in another season

## Principle 3: Obtain a Yield 🌾

**"You can't work on an empty stomach"**

### Core Concept
Design systems that produce useful yields. You need to benefit from your work to stay motivated and viable.

### Types of Yields
- **Tangible**: Food, fiber, fuel, timber, medicine
- **Intangible**: Beauty, education, community, peace of mind
- **Financial**: Products to sell, reduced expenses
- **Ecological**: Habitat, soil fertility, biodiversity

### Key Point
Yield should come at MULTIPLE stages, not just at the end:
- Early yields while waiting for trees to mature
- Multiple products from same element
- Stacked functions = stacked yields

### Example
A fruit tree guild yields:
- **Year 1**: Herbs and greens below trees
- **Year 2-3**: Berries come into production
- **Year 5+**: Tree fruits begin
- **Ongoing**: Mulch from leaves, habitat for beneficial insects, beauty

## Principle 4: Apply Self-Regulation and Accept Feedback 🔄

**"The sins of the fathers are visited on the children unto the seventh generation"**

### Core Concept
Design systems that self-regulate and respond to feedback. Create limits and checks that prevent overshoot.

### Self-Regulation Examples
- **Predator-prey balance**: Chickens eat insects, but not so many they disappear
- **Compost heating**: Thermophilic bacteria regulate their own population by temperature
- **Market pricing**: Scarcity increases price, reducing demand

### Accepting Feedback
When something goes wrong, ask:
- What is the system telling me?
- What needs to change?
- Is this a symptom or root cause?

### Example
If plants are yellowing:
- ❌ Bad feedback response: Just add fertilizer
- ✓ Good feedback response: Investigate why (drainage? pH? pests? disease?)

**Design for feedback loops**:
- Visual indicators (color changes, growth rates)
- Measurable outcomes (yields, soil tests)
- Clear cause-effect relationships

## Principle 5: Use and Value Renewable Resources 🔋

**"Let nature take its course"**

### Core Concept
Prefer renewable resources and services over non-renewable ones. Work with living systems rather than depleting the Earth's capital.

### Renewable vs Non-Renewable

**Renewable**:
- Solar energy
- Wind energy
- Biological growth
- Skills and knowledge
- Community relationships
- Time and attention

**Non-Renewable**:
- Fossil fuels
- Mined minerals
- Old-growth forests
- Fossil water (deep aquifers)

### Renewable Services
Nature provides free services:
- Pollination (instead of hand-pollinating)
- Pest control (instead of pesticides)
- Fertility (instead of synthetic fertilizers)
- Climate regulation (instead of AC/heating)

### Example
**Conventional lawn care**: Gasoline mower, synthetic fertilizer, pesticides, irrigation
**Permaculture approach**: Push mower or scythe, compost, beneficial insects, drought-tolerant species

**Return on Investment**:
- Conventional: Ongoing expense, depleting resources
- Permaculture: One-time effort, compounding benefits

## Principle 6: Produce No Waste ♻️

**"Waste not, want not" or "A stitch in time saves nine"**

### Core Concept
There is no such thing as waste in nature—only resources in the wrong place. Every output from one element should become input for another.

### Rethinking "Waste"

**Not waste**:
- Kitchen scraps → Compost → Soil fertility
- Fallen leaves → Mulch → Soil protection & fertility
- Chicken manure → Fertilizer for garden
- Gray water → Irrigation for trees
- Cardboard → Sheet mulching → Weed suppression
- Wood ash → Mineral amendment for soil

### The Three Questions
When you have "waste," ask:
1. Can I refuse it? (Packaging, junk mail)
2. Can I reuse it? (Containers, materials)
3. Can it feed another system? (Compost, gray water)

### Closed Loop Design
Design systems where outputs loop back as inputs:

**Example: Chicken-Garden System**
- Chickens eat kitchen scraps → Eggs & meat
- Chicken manure → Compost → Garden
- Garden scraps → Chickens
- Garden produces → Kitchen

= Zero waste loop

### Carbon to Nitrogen Ratio
Understanding C:N ratio helps eliminate waste:
- **High carbon** (browns): Leaves, paper, cardboard, wood chips
- **High nitrogen** (greens): Food scraps, grass clippings, manure

Mix them in compost (30:1 ratio) and "waste" becomes black gold.

### Economic Waste
This principle applies beyond materials:
- Wasted time → Efficient systems design
- Wasted energy → Passive solar, zone planning
- Wasted water → Capture and cycle
- Wasted knowledge → Teaching others

---

## Integration: Using Principles Together

These first six principles work in concert:

**Example: Food Forest Design**
1. **Observe**: Study sun, soil, water patterns (Principle 1)
2. **Catch energy**: Plant trees to capture sunlight, store carbon (Principle 2)
3. **Get yields**: Multiple layers produce food (Principle 3)
4. **Self-regulation**: Diverse system resists pests naturally (Principle 4)
5. **Renewable**: Trees provide perpetual harvest (Principle 5)
6. **No waste**: Leaves mulch the system (Principle 6)

---
**Practice**: Look at a system in your life (garden, kitchen, workspace). How could you apply each of these six principles?
`
                }
            ]
        }
    ]
}

export default function Course() {
    const [currentLesson, setCurrentLesson] = React.useState<string | null>(null)
    const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(new Set())
    const [showSidebar, setShowSidebar] = React.useState(true)

    // Load completed lessons from localStorage
    React.useEffect(() => {
        const saved = localStorage.getItem('completedLessons')
        if (saved) {
            setCompletedLessons(new Set(JSON.parse(saved)))
        }
    }, [])

    const toggleLesson = (lessonId: string) => {
        const newCompleted = new Set(completedLessons)
        if (newCompleted.has(lessonId)) {
            newCompleted.delete(lessonId)
        } else {
            newCompleted.add(lessonId)
        }
        setCompletedLessons(newCompleted)
        localStorage.setItem('completedLessons', JSON.stringify(Array.from(newCompleted)))
    }

    const getAllLessons = () => {
        return courseData.modules.flatMap(m => m.lessons)
    }

    const getCurrentLessonData = () => {
        if (!currentLesson) return null
        return getAllLessons().find(l => l.id === currentLesson)
    }

    const getNextLesson = () => {
        const lessons = getAllLessons()
        const currentIndex = lessons.findIndex(l => l.id === currentLesson)
        return currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
    }

    const getPreviousLesson = () => {
        const lessons = getAllLessons()
        const currentIndex = lessons.findIndex(l => l.id === currentLesson)
        return currentIndex > 0 ? lessons[currentIndex - 1] : null
    }

    const lessonData = getCurrentLessonData()
    const nextLesson = getNextLesson()
    const prevLesson = getPreviousLesson()

    const totalLessons = getAllLessons().length
    const completedCount = completedLessons.size
    const overallProgress = Math.round((completedCount / totalLessons) * 100)

    // Course overview view
    if (!currentLesson) {
        return (
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: {
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="space-y-16"
                    >
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                <span className="gradient-text">Permaculture Online Course</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                                A comprehensive self-paced learning journey with embedded content, from foundations to global impact.
                            </p>

                            {/* Progress */}
                            <Card variant="gradient" className="max-w-2xl mx-auto">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Award className="w-5 h-5 text-forest-600" />
                                            <span className="font-semibold">Your Progress</span>
                                        </div>
                                        <span className="text-2xl font-bold text-forest-700">{overallProgress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                                        <div
                                            className="bg-gradient-to-r from-forest-500 to-earth-500 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${overallProgress}%` }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {completedCount} of {totalLessons} lessons completed
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Modules */}
                        <div className="space-y-8">
                            {courseData.modules.map((module) => {
                                const ModuleIcon = module.icon
                                const moduleCompleted = module.lessons.filter(l => completedLessons.has(l.id)).length
                                const moduleProgress = Math.round((moduleCompleted / module.lessons.length) * 100)

                                return (
                                    <Card key={module.id} variant={module.color as "forest" | "sky"}>
                                        <CardContent className="p-8">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 bg-${module.color}-100 rounded-full flex items-center justify-center`}>
                                                        <ModuleIcon className={`w-6 h-6 text-${module.color}-600`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold">{module.title}</h3>
                                                        <p className="text-sm text-gray-600">{module.lessons.length} lessons</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-forest-700">{moduleProgress}%</div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {module.lessons.map((lesson) => (
                                                    <div
                                                        key={lesson.id}
                                                        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
                                                        onClick={() => setCurrentLesson(lesson.id)}
                                                    >
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                toggleLesson(lesson.id)
                                                            }}
                                                            className="flex-shrink-0"
                                                        >
                                                            {completedLessons.has(lesson.id) ? (
                                                                <CheckCircle2 className="w-6 h-6 text-forest-600" />
                                                            ) : (
                                                                <Circle className="w-6 h-6 text-gray-300" />
                                                            )}
                                                        </button>

                                                        <div className="flex-grow">
                                                            <div className="font-semibold">{lesson.title}</div>
                                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                                <Clock className="w-4 h-4" /> {lesson.duration}
                                                            </div>
                                                        </div>

                                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-forest-600 group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    }

    // Lesson view
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar */}
                <AnimatePresence>
                    {showSidebar && (
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            className="w-80 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="font-bold text-lg">Course Content</h2>
                                    <button onClick={() => setShowSidebar(false)} className="p-1 hover:bg-gray-100 rounded">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {courseData.modules.map((module) => (
                                        <div key={module.id}>
                                            <div className="font-semibold text-sm text-gray-700 mb-2">{module.title}</div>
                                            <div className="space-y-1">
                                                {module.lessons.map((lesson) => (
                                                    <button
                                                        key={lesson.id}
                                                        onClick={() => setCurrentLesson(lesson.id)}
                                                        className={`w-full text-left px-3 py-2 rounded text-sm flex items-center gap-2 ${currentLesson === lesson.id
                                                                ? 'bg-forest-100 text-forest-700 font-medium'
                                                                : ' hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {completedLessons.has(lesson.id) ? (
                                                            <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0" />
                                                        ) : (
                                                            <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                                                        )}
                                                        <span className="flex-grow">{lesson.title}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentLesson(null)}
                                    className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Back to Overview
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main content */}
                <div className="flex-grow">
                    {!showSidebar && (
                        <button
                            onClick={() => setShowSidebar(true)}
                            className="fixed top-4 left-4 z-10 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    )}

                    <div className="max-w-4xl mx-auto px-6 py-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentLesson}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                {/* Lesson header */}
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                        <Clock className="w-4 h-4" />
                                        {lessonData?.duration}
                                    </div>
                                    <h1 className="text-4xl font-bold mb-4">{lessonData?.title}</h1>

                                    <button
                                        onClick={() => toggleLesson(currentLesson)}
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${completedLessons.has(currentLesson)
                                                ? 'bg-forest-100 text-forest-700'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {completedLessons.has(currentLesson) ? (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                Completed
                                            </>
                                        ) : (
                                            <>
                                                <Circle className="w-5 h-5" />
                                                Mark as Complete
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Lesson content */}
                                <Card variant="gradient">
                                    <CardContent className="p-8 prose prose-lg max-w-none">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: lessonData?.content
                                                    .split('\n')
                                                    .map(line => {
                                                        if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`
                                                        if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`
                                                        if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-4 mb-2">${line.slice(4)}</h3>`
                                                        if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold mt-4">${line.slice(2, -2)}</p>`
                                                        if (line.startsWith('- ')) return `<li class="ml-6">${line.slice(2)}</li>`
                                                        if (line.startsWith('✓ ')) return `<li class="ml-6 text-forest-700"><span class="font-semibold">✓</span> ${line.slice(2)}</li>`
                                                        if (line.startsWith('❌ ')) return `<li class="ml-6"><span class="text-red-600">❌</span> ${line.slice(2)}</li>`
                                                        if (line.trim() === '---') return '<hr class="my-8 border-gray-300" />'
                                                        if (line.trim() === '') return '<br/>'
                                                        return `<p class="my-3 leading-relaxed">${line}</p>`
                                                    })
                                                    .join('')
                                            }}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Navigation */}
                                <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                                    {prevLesson ? (
                                        <Button
                                            variant="outline"
                                            onClick={() => setCurrentLesson(prevLesson.id)}
                                            className="group"
                                        >
                                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            Previous
                                        </Button>
                                    ) : <div />}

                                    {nextLesson ? (
                                        <Button
                                            onClick={() => setCurrentLesson(nextLesson.id)}
                                            className="group"
                                        >
                                            Next
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => setCurrentLesson(null)}
                                            variant="outline"
                                        >
                                            Back to Overview
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
