'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Leaf, Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Introduction', href: '/introduction' },
  { name: 'Ethics', href: '/ethics' },
  { name: 'Principles', href: '/principles' },
  { name: 'Techniques', href: '/techniques' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'UN SDGs', href: '/sdg' },
  { name: 'Getting Started', href: '/start' },
  { name: 'Resources', href: '/resources' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-forest-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-to-br from-forest-100 to-earth-100 rounded-lg shadow-sm"
            >
              <Leaf className="w-6 h-6 text-forest-600" />
            </motion.div>
            <span className="font-bold text-xl gradient-text">
              Permaculture Encyclopedia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
                  pathname === item.href
                    ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50 shadow-sm'
                    : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-forest-100 via-earth-100 to-sky-100 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-earth-50 transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === item.href
                      ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50'
                      : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}