"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Github, Linkedin, MapPin, Code, ArrowDown, Briefcase, Mail, Download } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import ParticleBackground from "./particle-background"
import TypewriterEffect from "./typewriter-effect"

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
      leetcode?: string
    }
  }
}

export default function HeroEnhanced({ data }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)
  const opacitySpring = useSpring(opacity, springConfig)
  const scaleSpring = useSpring(scale, springConfig)

  const socialLinks = [
    {
      icon: Github,
      url: data.social.github,
      label: "GitHub",
      color: "hover:bg-gray-700",
      gradient: "from-gray-600 via-slate-600 to-gray-800",
    },
    {
      icon: Linkedin,
      url: data.social.linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-700",
      gradient: "from-blue-600 via-indigo-600 to-blue-800",
    },
    {
      icon: Code,
      url: data.social.leetcode || "https://leetcode.com/u/Raj_Mathur03/",
      label: "LeetCode",
      color: "hover:bg-orange-700",
      gradient: "from-orange-600 via-red-600 to-orange-800",
    },
  ]

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ParticleBackground />

      {/* Enhanced Gradient Orbs with More Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -80, 120, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-3/4 left-1/2 w-80 h-80 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 90, 0],
            y: [0, 70, -90, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-600/20 via-amber-600/20 to-orange-600/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: ySpring, opacity: opacitySpring, scale: scaleSpring }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4"
            >
              <motion.span
                className="text-lg text-gray-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Hello, I'm
              </motion.span>
            </motion.div>

            {/* Name with enhanced letter animation */}
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              {data.name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={
                    letter === " "
                      ? "mr-4"
                      : "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent inline-block"
                  }
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    color: "#10b981",
                    transition: { duration: 0.3 },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Enhanced Typewriter Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-6"
            >
              <TypewriterEffect
                words={[data.title, "Problem Solver", "Code Architect", "Tech Professional", "Backend Specialist"]}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200"
              />
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              {data.subtitle}
            </motion.p>

            {/* Enhanced Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-gray-300 text-sm">{data.location}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-green-400 rounded-full ml-2"
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    rotateY: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-white transition-all duration-300 ${social.color} overflow-hidden`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <social.icon size={20} className="relative z-10" />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap border border-gray-700"
                  >
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get In Touch</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.div>
              </motion.a>

              <motion.a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#10b981",
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400/10 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              {/* Multiple Animated Rings with More Colors */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-2 w-76 h-76 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 p-1 opacity-50"
              >
                <div className="w-full h-full rounded-full bg-transparent" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 p-1 opacity-30"
              >
                <div className="w-full h-full rounded-full bg-transparent" />
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 p-2 overflow-hidden">
                  <Image
                    src={data.avatar || "/placeholder.svg"}
                    alt={data.name}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Enhanced Floating Elements with More Colors */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Briefcase className="w-5 h-5 text-white" />
              </motion.div>

              {/* Enhanced Skill Badges with More Colors */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-1/4 -left-20 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="text-emerald-400 text-sm font-medium">Spring Boot</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute bottom-1/4 -right-20 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="text-orange-400 text-sm font-medium">Java</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-1/2 -right-24 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="text-purple-400 text-sm font-medium">React</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{
                y: [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
