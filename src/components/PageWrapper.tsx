import React from 'react'
import { motion } from 'framer-motion'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-20 pb-10 ${className}`}
    >
      {children}
    </motion.div>
  )
}
