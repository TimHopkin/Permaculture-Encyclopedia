'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const variants = {
  primary: 'bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 text-white shadow-md hover:shadow-lg',
  secondary: 'bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600 text-white shadow-md hover:shadow-lg',
  outline: 'border-2 border-forest-500 text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-earth-50 hover:text-forest-700',
  ghost: 'text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50 hover:text-forest-700'
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
  ...props 
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
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}