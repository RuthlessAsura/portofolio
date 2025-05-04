"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SkillBarProps {
  name: string
  percentage: number
  color?: string
}

export function SkillBar({ name, percentage, color = "bg-primary" }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}
