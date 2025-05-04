"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
                <p className="text-green-700 dark:text-green-400">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:translate-x-1"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:translate-x-1"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:translate-x-1"
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:translate-x-1"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <Button type="submit" className="w-full transition-transform hover:scale-105" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <Link href="mailto:nicolas.varga@example.com" className="text-primary hover:underline">
                    nicolas.varga@example.com
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <Link href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">Belgium</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <Link
                    href="https://linkedin.com/in/nicolasvarga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/nicolasvarga
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Github className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">GitHub</h3>
                  <Link
                    href="https://github.com/nicolasvarga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/nicolasvarga
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 border-t pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between transition-all duration-300 hover:translate-x-1">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between transition-all duration-300 hover:translate-x-1">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between transition-all duration-300 hover:translate-x-1">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
