'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'forest' | 'earth' | 'sky' | 'sunset' | 'gradient' | 'lightGreen' | 'cyan' | 'mediumBlue' | 'purple' | 'magenta' | 'rosePink' | 'coral' | 'peach' | 'orange' | 'paleYellow'
}

export default function Card({ children, className, hover = true, variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white border-forest-100 hover:shadow-forest-200/20 hover:border-forest-200',
    forest: 'bg-gradient-to-br from-forest-50 to-forest-100 border-forest-200 hover:shadow-forest-300/30 hover:border-forest-300',
    earth: 'bg-gradient-to-br from-earth-50 to-earth-100 border-earth-200 hover:shadow-earth-300/30 hover:border-earth-300',
    sky: 'bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200 hover:shadow-sky-300/30 hover:border-sky-300',
    sunset: 'bg-gradient-to-br from-sunset-50 to-sunset-100 border-sunset-200 hover:shadow-sunset-300/30 hover:border-sunset-300',
    gradient: 'bg-gradient-to-br from-forest-50 via-earth-50 to-sky-50 border-forest-200 hover:shadow-lg hover:border-forest-300',
    lightGreen: 'bg-gradient-to-br from-lightGreen-50 to-lightGreen-100 border-lightGreen-200 hover:shadow-lightGreen-300/30 hover:border-lightGreen-300',
    cyan: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:shadow-cyan-300/30 hover:border-cyan-300',
    mediumBlue: 'bg-gradient-to-br from-mediumBlue-50 to-mediumBlue-100 border-mediumBlue-200 hover:shadow-mediumBlue-300/30 hover:border-mediumBlue-300',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-purple-300/30 hover:border-purple-300',
    magenta: 'bg-gradient-to-br from-magenta-50 to-magenta-100 border-magenta-200 hover:shadow-magenta-300/30 hover:border-magenta-300',
    rosePink: 'bg-gradient-to-br from-rosePink-50 to-rosePink-100 border-rosePink-200 hover:shadow-rosePink-300/30 hover:border-rosePink-300',
    coral: 'bg-gradient-to-br from-coral-50 to-coral-100 border-coral-200 hover:shadow-coral-300/30 hover:border-coral-300',
    peach: 'bg-gradient-to-br from-peach-50 to-peach-100 border-peach-200 hover:shadow-peach-300/30 hover:border-peach-300',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-orange-300/30 hover:border-orange-300',
    paleYellow: 'bg-gradient-to-br from-paleYellow-50 to-paleYellow-100 border-paleYellow-200 hover:shadow-paleYellow-300/30 hover:border-paleYellow-300'
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'rounded-xl shadow-md border-2 overflow-hidden',
        variants[variant],
        hover && 'hover:shadow-lg',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold text-gray-900', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn('text-gray-700 mt-2 leading-relaxed', className)}>
      {children}
    </p>
  )
}