"use client"

import { motion } from "framer-motion"
import type React from "react"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export function StaggerContainer({ children, className, delay = 0, staggerChildren = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
