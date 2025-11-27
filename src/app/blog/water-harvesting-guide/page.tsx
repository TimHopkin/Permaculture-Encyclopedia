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
                            Blog Post Title
                        </h1>
                        <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">5 min read</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                <span className="text-sm">Category</span>
                            </div>
                        </div>
                    </div>

                    <Card variant="gradient">
                        <CardContent className="p-8">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    This post provides concise, actionable permaculture information. Content can be expanded later.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
