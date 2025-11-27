'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    BookOpen, CheckCircle2, Circle, Clock, ArrowRight, Award,
    Leaf, Target, Building2, Map, Globe, Sprout, Lock
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

const courseModules = [
    {
        id: 1,
        title: "Foundations of Permaculture",
        duration: "2 hours",
        lessons: [
            {
                title: "What is Permaculture?",
                description: "Understand the core concepts and history of permaculture design",
                href: "/introduction",
                duration: "20 min"
            },
            {
                title: "The Three Ethics",
                description: "Earth Care, People Care, and Fair Share as guiding principles",
                href: "/ethics",
                duration: "25 min"
            },
            {
                title: "Observing Your Environment",
                description: "Learning to read landscapes and identify patterns",
                href: "/principles",
                duration: "30 min"
            },
            {
                title: "Getting Started Basics",
                description: "First steps for your permaculture journey",
                href: "/start",
                duration: "45 min"
            }
        ],
        icon: Leaf,
        color: "forest"
    },
    {
        id: 2,
        title: "Design Principles Mastery",
        duration: "3 hours",
        lessons: [
            {
                title: "The 12 Design Principles - Part 1",
                description: "Principles 1-6: From observation to renewable resources",
                href: "/principles",
                duration: "45 min"
            },
            {
                title: "The 12 Design Principles - Part 2",
                description: "Principles 7-12: From patterns to creative responses",
                href: "/principles",
                duration: "45 min"
            },
            {
                title: "Applying Principles to Your Site",
                description: "Hands-on exercises and design thinking",
                href: "/principles",
                duration: "60 min"
            },
            {
                title: "Principle Case Studies",
                description: "See principles in action around the world",
                href: "/case-studies",
                duration: "30 min"
            }
        ],
        icon: Target,
        color: "sky"
    },
    {
        id: 3,
        title: "Practical Techniques",
        duration: "4 hours",
        lessons: [
            {
                title: "Water Management Systems",
                description: "Harvesting, storage, and distribution strategies",
                href: "/techniques",
                duration: "50 min"
            },
            {
                title: "Soil Building & Composting",
                description: "Creating healthy, living soil systems",
                href: "/techniques",
                duration: "45 min"
            },
            {
                title: "Food Production Systems",
                description: "Gardens, food forests, and integrated agriculture",
                href: "/techniques",
                duration: "60 min"
            },
            {
                title: "Energy & Infrastructure",
                description: "Passive solar, renewable energy, and efficient design",
                href: "/techniques",
                duration: "40 min"
            },
            {
                title: "Natural Building Basics",
                description: "Eco-friendly construction methods",
                href: "/techniques",
                duration: "45 min"
            }
        ],
        icon: Building2,
        color: "earth"
    },
    {
        id: 4,
        title: "Learning from the World",
        duration: "2.5 hours",
        lessons: [
            {
                title: "Global Case Studies Overview",
                description: "Successful projects from every continent",
                href: "/case-studies",
                duration: "30 min"
            },
            {
                title: "Climate-Specific Strategies",
                description: "Adapting permaculture to different environments",
                href: "/case-studies",
                duration: "40 min"
            },
            {
                title: "Rewilding and Ecosystem Restoration",
                description: "Large-scale regeneration strategies",
                href: "/rewilding",
                duration: "50 min"
            },
            {
                title: "Urban Permaculture Success Stories",
                description: "Transforming cities one garden at a time",
                href: "/case-studies",
                duration: "30 min"
            }
        ],
        icon: Map,
        color: "forest"
    },
    {
        id: 5,
        title: "Scaling for Impact",
        duration: "3 hours",
        lessons: [
            {
                title: "Permaculture and the UN SDGs",
                description: "Aligning your work with global sustainability goals",
                href: "/sdg",
                duration: "45 min"
            },
            {
                title: "Community Organizing",
                description: "Building networks and collaborative projects",
                href: "/community-toolkit",
                duration: "50 min"
            },
            {
                title: "Implementation Strategies",
                description: "Taking permaculture from design to reality",
                href: "/blog",
                duration: "45 min"
            },
            {
                title: "Finding Your Opportunities",
                description: "Connect with projects and continue learning",
                href: "/opportunities",
                duration: "40 min"
            }
        ],
        icon: Globe,
        color: "sky"
    }
]

export default function Course() {
    const [completedLessons, setCompletedLessons] = React.useState<Set<string>>(
        new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'))
    )

    const toggleLesson = (moduleId: number, lessonTitle: string) => {
        const lessonKey = `${moduleId}-${lessonTitle}`
        const newCompleted = new Set(completedLessons)
        if (newCompleted.has(lessonKey)) {
            newCompleted.delete(lessonKey)
        } else {
            newCompleted.add(lessonKey)
        }
        setCompletedLessons(newCompleted)
        localStorage.setItem('completedLessons', JSON.stringify(Array.from(newCompleted)))
    }

    const isLessonCompleted = (moduleId: number, lessonTitle: string) => {
        return completedLessons.has(`${moduleId}-${lessonTitle}`)
    }

    const getModuleProgress = (moduleId: number) => {
        const module = courseModules.find(m => m.id === moduleId)
        if (!module) return 0
        const completed = module.lessons.filter(l => isLessonCompleted(moduleId, l.title)).length
        return Math.round((completed / module.lessons.length) * 100)
    }

    const totalLessons = courseModules.reduce((acc, m) => acc + m.lessons.length, 0)
    const completedCount = Array.from(completedLessons).length
    const overallProgress = Math.round((completedCount / totalLessons) * 100)

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
                            <span className="gradient-text">Permaculture Online Course</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                            A comprehensive self-paced learning journey through permaculture design, from foundations to global impact.
                        </p>

                        {/* Progress Bar */}
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

                    {/* Course Info */}
                    <motion.section variants={fadeInUp}>
                        <Card variant="forest">
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-3 gap-8 text-center">
                                    <div>
                                        <Clock className="w-8 h-8 text-forest-600 mx-auto mb-2" />
                                        <div className="font-bold text-2xl text-forest-700">14.5 hours</div>
                                        <div className="text-gray-600 text-sm">Total Duration</div>
                                    </div>
                                    <div>
                                        <BookOpen className="w-8 h-8 text-forest-600 mx-auto mb-2" />
                                        <div className="font-bold text-2xl text-forest-700">{courseModules.length} modules</div>
                                        <div className="text-gray-600 text-sm">Structured Learning</div>
                                    </div>
                                    <div>
                                        <Sprout className="w-8 h-8 text-forest-600 mx-auto mb-2" />
                                        <div className="font-bold text-2xl text-forest-700">Self-Paced</div>
                                        <div className="text-gray-600 text-sm">Learn at Your Speed</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Course Modules */}
                    <motion.section variants={fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
                            <p className="text-lg text-gray-600">
                                Progress through each module at your own pace. Track your learning and build confidence step by step.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {courseModules.map((module, moduleIndex) => {
                                const progress = getModuleProgress(module.id)
                                const ModuleIcon = module.icon

                                return (
                                    <Card key={module.id} variant={module.color as "forest" | "sky" | "earth"}>
                                        <CardContent className="p-8">
                                            {/* Module Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 bg-${module.color}-100 rounded-full flex items-center justify-center`}>
                                                        <ModuleIcon className={`w-6 h-6 text-${module.color}-600`} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-500 mb-1">
                                                            Module {module.id} of {courseModules.length}
                                                        </div>
                                                        <h3 className="text-2xl font-bold">{module.title}</h3>
                                                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-4 h-4" />
                                                                {module.duration}
                                                            </div>
                                                            <div>•</div>
                                                            <div>{module.lessons.length} lessons</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-forest-700">{progress}%</div>
                                                    <div className="text-xs text-gray-500">Complete</div>
                                                </div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                                <div
                                                    className={`bg-${module.color}-500 h-2 rounded-full transition-all duration-500`}
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>

                                            {/* Lessons */}
                                            <div className="space-y-3">
                                                {module.lessons.map((lesson, lessonIndex) => {
                                                    const completed = isLessonCompleted(module.id, lesson.title)

                                                    return (
                                                        <div
                                                            key={lessonIndex}
                                                            className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all group"
                                                        >
                                                            <button
                                                                onClick={() => toggleLesson(module.id, lesson.title)}
                                                                className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-forest-500 rounded-full"
                                                            >
                                                                {completed ? (
                                                                    <CheckCircle2 className="w-6 h-6 text-forest-600" />
                                                                ) : (
                                                                    <Circle className="w-6 h-6 text-gray-300 group-hover:text-forest-400 transition-colors" />
                                                                )}
                                                            </button>

                                                            <div className="flex-grow">
                                                                <div className="font-semibold text-gray-900">{lesson.title}</div>
                                                                <div className="text-sm text-gray-600">{lesson.description}</div>
                                                            </div>

                                                            <div className="flex items-center gap-4">
                                                                <div className="text-sm text-gray-500 flex items-center gap-1">
                                                                    <Clock className="w-4 h-4" />
                                                                    {lesson.duration}
                                                                </div>
                                                                <Link href={lesson.href}>
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="group-hover:translate-x-1 transition-transform"
                                                                    >
                                                                        Start
                                                                        <ArrowRight className="ml-2 w-4 h-4" />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </motion.section>

                    {/* Completion CTA */}
                    <motion.section variants={fadeInUp} className="text-center">
                        <Card variant="earth" className="bg-earth-50 border-earth-200">
                            <CardContent className="p-8">
                                <Award className="w-16 h-16 text-earth-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold mb-4">Complete Your Journey</h3>
                                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                                    Take your learning to the next level by participating in real-world projects and connecting with
                                    the global permaculture community.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/opportunities">
                                        <Button size="lg" className="group">
                                            <Map className="mr-2 w-5 h-5" />
                                            Find Opportunities
                                        </Button>
                                    </Link>
                                    <Link href="/resources">
                                        <Button size="lg" variant="outline" className="group">
                                            <BookOpen className="mr-2 w-5 h-5" />
                                            Additional Resources
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                </motion.div>
            </div>
        </div>
    )
}
