'use client'

import React from "react"
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'

export default function BlogPost() {
  const content = `
# Carbon Farming: Sequester Carbon While Growing Food

Implement regenerative practices that pull CO2 from the atmosphere while increasing yields. Fight climate change from your garden.

## Introduction

This comprehensive guide covers everything you need to know about implementing this permaculture practice in your own garden or homestead. Whether you're a beginner or experienced gardener, you'll find actionable techniques you can start using today.

## Key Benefits

- Increase garden productivity and efficiency
- Reduce water usage and maintenance time
- Build healthy, living soil naturally
- Create resilient, self-regulating systems
- Save money on inputs and amendments

## Getting Started

The first step is understanding the basic principles and how they apply to your specific situation. We'll walk through the process step-by-step.

### Materials Needed

- Basic hand tools (shovel, rake, pruners)
- Organic matter (compost, leaves, straw)
- Patience and observation skills
- Willingness to work with nature

### Step-by-Step Process

1. **Observe** your site conditions carefully
2. **Plan** your design on paper first
3. **Prepare** the area with minimal disturbance
4. **Implement** in small, manageable stages
5. **Monitor** and adjust as needed

## Common Challenges and Solutions

Every permaculture technique has potential challenges. Here's how to address them:

**Challenge 1**: Impatience for results
**Solution**: Start small, observe patterns, and celebrate small wins

**Challenge 2**: Overwhelming information
**Solution**: Focus on one technique at a time and master it before moving on

**Challenge 3**: Local climate differences
**Solution**: Adapt principles to your bioregion using native plants and natural patterns

## Next Steps

Now that you understand the basics, you're ready to implement this in your own space. Remember: permaculture is about working with nature, not against it. Start small, observe carefully, and let the system teach you.

## Further Reading

- [Permaculture Principles](/principles) - Understand the design principles behind this technique
- [Case Studies](/case-studies) - See real-world examples from around the globe  
- [Online Course](/course) - Deep dive into permaculture design
- [Find Projects](/opportunities) - Learn hands-on at permaculture sites worldwide

## Conclusion

This permaculture practice is a powerful tool for creating abundance while regenerating ecosystems. By implementing these strategies, you're not just growing food—you're building soil, sequestering carbon, creating habitat, and demonstrating that another way is possible.

Start today, even if it's just a small experiment. Nature will meet you halfway.
`

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <Link href="/blog">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Carbon Farming: Sequester Carbon While Growing Food</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">5-7 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Climate</span>
              </div>
            </div>
          </div>

          <Card variant="gradient">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: content.split('\n').map(line => {
                    let processed = line
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.+?)\*/g, '<em>$1</em>')
                      .replace(/\`(.+?)\`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                    
                    if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${processed.slice(2)}</h1>`
                    if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-6 mb-3 text-gray-800">${processed.slice(3)}</h2>`
                    if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">${processed.slice(4)}</h3>`
                    if (line.startsWith('- ')) return `<li class="ml-6 my-1">${processed.slice(2)}</li>`
                    if (line.match(/^\d+\. /)) return `<li class="ml-6 my-1">${processed.replace(/^\d+\. /, '')}</li>`
                    if (line.trim() === '---') return '<hr class="my-8 border-gray-300" />'
                    if (line.trim() === '') return '<div class="h-4"></div>'
                    return `<p class="my-3 leading-relaxed text-gray-700">${processed}</p>`
                  }).join('')
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
