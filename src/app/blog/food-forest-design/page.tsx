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
              How to Design a Food Forest in Your Backyard
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">5-7 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Design</span>
              </div>
            </div>
          </div>

          <Card variant="gradient">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none space-y-6">

                <p className="text-lg leading-relaxed text-gray-700">
                  A food forest is a low-maintenance, high-yield garden that mimics the structure of a natural forest ecosystem. Instead of annual vegetables that need replanting every year, food forests emphasize perennial plants arranged in seven distinct layers: canopy trees (nut and fruit trees), understory trees (dwarf fruits), shrubs (berries), herbaceous layer (perennial vegetables and herbs), ground cover (edible groundcovers like strawberries), root layer (root vegetables), and vertical layer (climbing vines). This diversity creates a self-regulating system where plants support each other.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Start by observing your site for at least one season, noting sun patterns, water flow, and microclimates. Begin with the canopy layer—plant your largest, longest-lived trees first, as they'll take years to mature. Choose species adapted to your climate and soil. Then add understory trees and shrubs in guilds: groups of plants that benefit each other. For example, nitrogen-fixing plants like clover or lupines feed nearby fruit trees, while aromatic herbs like thyme deter pests. Mulch heavily to suppress weeds and build soil.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Food forests require patience—it takes 3-7 years to establish and begin producing significant yields. But once mature, they produce abundant food with minimal input: no tilling, little watering (deep roots access moisture), and few pests (diversity creates balance). You'll harvest fruits, nuts, berries, greens, mushrooms, and more throughout the seasons. Start small with a 100-200 square foot area, master the principles, then expand. Your food forest will outlive you, feeding future generations while building soil and sequestering carbon.
                </p>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
