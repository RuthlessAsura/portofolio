"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxBackgroundProps {
  className?: string
}

export function ParallaxBackground({ className }: ParallaxBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10" style={{ y: y1 }}>
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-secondary"></div>
      </motion.div>
      <motion.div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10" style={{ y: y2 }}>
        <div className="absolute bottom-20 right-[20%] w-72 h-72 rounded-full bg-primary"></div>
        <div className="absolute bottom-40 left-[25%] w-80 h-80 rounded-full bg-secondary"></div>
      </motion.div>
    </div>
  )
}
