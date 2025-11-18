'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const variants = {
  primary: 'bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 text-white shadow-lg hover:shadow-xl border border-forest-400',
  secondary: 'bg-gradient-to-r from-sunset-500 to-earth-500 hover:from-sunset-600 hover:to-earth-600 text-white shadow-lg hover:shadow-xl border border-sunset-400',
  outline: 'border-2 border-forest-500 text-forest-700 bg-white hover:bg-gradient-to-r hover:from-forest-500 hover:to-forest-600 hover:text-white shadow-md hover:shadow-lg',
  ghost: 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50 hover:from-forest-100 hover:to-earth-100 border border-forest-200 hover:border-forest-300'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children,
  onClick
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2 transform hover:scale-[1.02]',
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}