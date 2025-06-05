"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Code } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  data: {
    name: string
    title: string
    subtitle: string
    location: string
    avatar: string
    resume: string
    social: {
      github: string
      linkedin: string
      twitter: string
      website: string
      leetcode?: string
    }
  }
}

export default function Hero({ data }: HeroProps) {
  const socialLinks = [
    { icon: Github, url: data.social.github, label: "GitHub" },
    { icon: Linkedin, url: data.social.linkedin, label: "LinkedIn" },
    { icon: ExternalLink, url: data.social.website, label: "Website" },
    { icon: Code, url: data.social.leetcode || "https://leetcode.com/johndoe", label: "LeetCode" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start mb-4"
            >
              <MapPin className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300">{data.location}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {data.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              {data.subtitle}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/20 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </motion.a>

              <motion.a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 p-2">
                  <Image
                    src={data.avatar || "/placeholder.svg?height=400&width=400"}
                    alt={data.name}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
