"use client"

import { motion } from "framer-motion"
import type React from "react"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionOffset[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
