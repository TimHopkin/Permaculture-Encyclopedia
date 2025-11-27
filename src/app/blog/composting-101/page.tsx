'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function BlogPost() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="initial" animate="animate" className="space-y-8">
          {/* Back button */}
          <Link href="/blog">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>

          {/* Header */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Composting 101: Turn Kitchen Waste Into Black Gold
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">5 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Techniques</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp}>
            <Card variant="gradient">
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `# Composting 101: Turn Kitchen Waste Into Black Gold

## Why Compost?

Composting is the cornerstone of permaculture—it closes nutrient loops, builds soil, and eliminates waste. Every year, households send tons of organic material to landfills where it produces methane, a potent greenhouse gas. Composting transforms this "waste" into black gold that makes plants thrive.

## The Science of Composting

Composting is controlled decomposition. Microorganisms break down organic matter, releasing heat and creating humus—the stable, nutrient-rich end product. The process requires four key ingredients:

1. **Carbon (Browns)**: Dry leaves, cardboard, paper, wood chips
2. **Nitrogen (Greens)**: Food scraps, grass clippings, coffee grounds
3. **Air**: Oxygen for aerobic bacteria
4. **Water**: Moisture like a wrung-out sponge

### The Magic Ratio: 30:1

For optimal decomposition, aim for 30 parts carbon to 1 part nitrogen by volume. Too much nitrogen = smelly, slimy compost. Too much carbon = slow decomposition.

## Two Methods: Hot vs Cold

### Hot Composting (Fast: 3-6 months)
- Build a pile at least 3x3x3 feet
- Mix greens and browns in 30:1 ratio
- Turn weekly to aerate
- Pile heats to 130-160°F, killing weed seeds and pathogens
- Finished compost in 3-6 months

### Cold Composting (Slow: 6-12+ months)
- Add materials as available
- No turning required
- Takes longer but requires less effort
- Perfect for busy gardeners

## What to Compost

### YES:
- Fruit and vegetable scraps
- Coffee grounds and filters
- Tea bags
- Eggshells
- Yard trimmings
- Shredded paper and cardboard
- Wood ash (small amounts)

### NO:
- Meat, bones, fish (attracts pests)
- Dairy products
- Oily foods
- Pet waste
- Diseased plants
- Weeds with seeds (unless hot composting)

## Common Problems & Solutions

**Smelly compost**: Too wet or too much nitrogen. Add browns and turn.
**Not heating up**: Too small, too dry, or needs nitrogen. Add greens and water.
**Pests**: Avoid meat/dairy. Bury food scraps in the center.

## Getting Started

1. Choose a spot (partial shade is ideal)
2. Start with a layer of browns (6-8 inches)
3. Add greens (2-3 inches)
4. Repeat layers
5. Water until moist
6. Turn or wait—your choice!

Composting is permaculture in a pile: waste becomes resource, patterns emerge, and you work with nature. Start today—your garden will thank you.
`.split('\n').map(line => {
                      let processedLine = line
                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.+?)\*/g, '<em>$1</em>')
                        .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                      
                      if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${processedLine.slice(2)}</h1>`
                      if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-6 mb-3 text-gray-800">${processedLine.slice(3)}</h2>`
                      if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">${processedLine.slice(4)}</h3>`
                      if (line.startsWith('- ')) return `<li class="ml-6 my-1">${processedLine.slice(2)}</li>`
                      if (line.match(/^\d+\. /)) return `<li class="ml-6 my-1">${processedLine.replace(/^\d+\. /, '')}</li>`
                      if (line.trim() === '---') return '<hr class="my-8 border-gray-300" />'
                      if (line.trim() === '') return '<div class="h-4"></div>'
                      return `<p class="my-3 leading-relaxed text-gray-700">${processedLine}</p>`
                    }).join('')
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
