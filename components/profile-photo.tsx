"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProfilePhotoProps {
  src: string
  alt: string
  className?: string
}

export function ProfilePhoto({ src, alt, className = "" }: ProfilePhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-full overflow-hidden border-4 border-background shadow-xl ${className}`}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={300} height={300} className="object-cover" priority />
      <motion.div
        className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </motion.div>
  )
}
