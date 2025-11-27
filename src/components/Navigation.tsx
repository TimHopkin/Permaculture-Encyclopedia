'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Leaf, Menu, X, ChevronDown } from 'lucide-react'

const navigationGroups = [
  { name: 'Home', href: '/', type: 'single' },
  {
    name: 'Learn',
    type: 'dropdown',
    items: [
      { name: 'Introduction', href: '/introduction' },
      { name: 'Ethics', href: '/ethics' },
      { name: 'Principles', href: '/principles' },
      { name: 'Techniques', href: '/techniques' },
    ]
  },
  {
    name: 'See It',
    type: 'dropdown',
    items: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Rewilding', href: '/rewilding' },
    ]
  },
  {
    name: 'Take Action',
    type: 'dropdown',
    items: [
      { name: 'Getting Started', href: '/start' },
      { name: 'Find Opportunities', href: '/opportunities' },
    ]
  },
  {
    name: 'Scale',
    type: 'dropdown',
    items: [
      { name: 'UN SDGs', href: '/sdg' },
      { name: 'Global Solutions', href: '/blog' },
      { name: 'Community Toolkit', href: '/community-toolkit' },
    ]
  },
  { name: 'Resources', href: '/resources', type: 'single' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const isActiveLink = (href: string) => pathname === href
  const isActiveGroup = (items: { href: string }[] | undefined) => {
    return items?.some(item => pathname.startsWith(item.href))
  }

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
            {navigationGroups.map((group) => {
              if (group.type === 'single') {
                return (
                  <Link
                    key={group.name}
                    href={group.href!}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isActiveLink(group.href!)
                        ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50 shadow-sm'
                        : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                    )}
                  >
                    {group.name}
                  </Link>
                )
              }

              return (
                <div
                  key={group.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(group.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1',
                      isActiveGroup(group.items)
                        ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50 shadow-sm'
                        : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                    )}
                  >
                    {group.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openDropdown === group.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {group.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            'block px-4 py-2 text-sm transition-colors',
                            isActiveLink(item.href)
                              ? 'text-forest-700 bg-forest-50 font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-forest-600'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              )
            })}
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
              {navigationGroups.map((group) => {
                if (group.type === 'single') {
                  return (
                    <Link
                      key={group.name}
                      href={group.href!}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isActiveLink(group.href!)
                          ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50'
                          : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                      )}
                    >
                      {group.name}
                    </Link>
                  )
                }

                return (
                  <div key={group.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {group.name}
                    </div>
                    {group.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'block px-6 py-2 rounded-lg text-sm transition-all duration-200',
                          isActiveLink(item.href)
                            ? 'text-forest-700 bg-gradient-to-r from-forest-50 to-earth-50 font-medium'
                            : 'text-gray-700 hover:text-forest-600 hover:bg-gradient-to-r hover:from-forest-50 hover:to-sky-50'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}