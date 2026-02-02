import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { Heart, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/greeting', label: 'Greeting' },
  { path: '/love-story', label: 'Love Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/messages', label: 'Messages' },
  { path: '/surprise', label: 'Surprise' },
  { path: '/developer', label: 'Developer' },
]

export function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-200/50 dark:border-pink-800/30 bg-white/80 dark:bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl group" onClick={closeMobileMenu}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="group-hover:drop-shadow-lg transition-all"
            >
              <Heart className="w-6 h-6 text-pink-600 fill-pink-600 dark:text-pink-500" />
            </motion.div>
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 bg-clip-text text-transparent">
              Valentine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-sm font-medium transition-colors group"
                >
                  <span className={`${isActive ? 'text-pink-600 dark:text-pink-500' : 'text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-500'} transition-colors`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-600 dark:text-pink-500" />
              ) : (
                <Menu className="w-6 h-6 text-pink-600 dark:text-pink-500" />
              )}
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-pink-200/50 dark:border-pink-800/30 bg-white/95 dark:bg-black/80 backdrop-blur-md"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-pink-600 dark:text-pink-500 bg-pink-50 dark:bg-pink-950/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
