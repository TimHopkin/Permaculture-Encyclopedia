'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'

export default function BlogPost() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sheet Mulching: Create Garden Beds Without Tilling
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">5-7 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Techniques</span>
              </div>
            </div>
          </div>

          <Card variant="gradient">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none space-y-6">

                <p className="text-lg leading-relaxed text-gray-700">
                  Sheet mulching, also called lasagna gardening, transforms grass or weeds into fertile garden beds without the back-breaking work of digging or tilling. By layering cardboard and organic matter directly on top of existing vegetation, you smother weeds while simultaneously building rich, living soil. This no-dig method preserves soil structure, protects beneficial microorganisms and earthworms, and can be done in a single afternoon. You can even plant immediately into a sheet-mulched bed.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Start by mowing existing grass or weeds short, then lay down overlapping cardboard (remove tape and staples) or 10-12 sheets of newspaper over the entire area. Water thoroughly. Next, add 4-6 inches of compost or aged manure, followed by 4-6 inches of mulch (straw, leaves, or wood chips). The cardboard blocks light, killing grass and weeds beneath, while the layers above provide nutrients and habitat for soil organisms. Within months, the cardboard decomposes and earthworms create pathways for plant roots. For immediate planting, add more compost on top and plant right into it.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Sheet mulching works best in spring or fall when decomposition is active. You can create new beds annually or maintain existing ones by adding fresh mulch each season. This technique is perfect for converting lawns to gardens, establishing new food forests, or preparing neglected areas for planting. The best part? No soil disturbance means you're building soil structure and carbon storage rather than depleting it. Your soil will improve dramatically year after year with this regenerative approach.
                </p>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
