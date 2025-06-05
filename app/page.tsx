"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Footer from "@/components/footer"
import ClientOnly from "@/components/client-only"
import ThreeScene from "@/components/three-scene"
import ParticleBackground from "@/components/particle-background"
import HeroEnhanced from "@/components/hero-enhanced"
import PremiumSkills from "@/components/premium-skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Achievements from "@/components/achievements"
import LeetCodeStats from "@/components/leetcode-stats"
import Contact from "@/components/contact"
import portfolioData from "@/data/portfolio.json"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const handleScroll = useCallback(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "achievements", "leetcode", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Debounced scroll handler for better performance
    let timeoutId: NodeJS.Timeout
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 10)
    }

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-2xl font-bold text-white"
              >
                Loading Portfolio...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Background Elements - Client-side only */}
      <ClientOnly>
        <ThreeScene />
        <ParticleBackground />
      </ClientOnly>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 1.5 : 0 }}
        className="relative z-10"
      >
        {/* Core sections loaded immediately */}
        <HeroEnhanced data={portfolioData.personal} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <About data={portfolioData.about} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PremiumSkills data={portfolioData.skills} />
        </motion.div>

        {/* Secondary sections loaded lazily */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects data={portfolioData.projects} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Experience data={portfolioData.experience} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Achievements data={portfolioData.achievements} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <LeetCodeStats username="Raj_Mathur03" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact data={portfolioData.contact} personal={portfolioData.personal} />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Footer />
        </motion.div>
      </motion.main>
    </div>
  )
}
