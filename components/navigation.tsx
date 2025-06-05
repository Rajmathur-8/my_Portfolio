"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Briefcase, Download } from "lucide-react"
import ClientOnly from "./client-only"

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "leetcode", label: "LeetCode" },
  { id: "contact", label: "Contact" },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }, [])

  return (
    <ClientOnly
      fallback={
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Portfolio</span>
              </div>
              <div className="hidden md:flex space-x-2">
                {navItems.map((item) => (
                  <div key={item.id} className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      }
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mb-4 border border-white/10 overflow-hidden"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-white bg-gradient-to-r from-blue-500 to-blue-600"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-2"
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </ClientOnly>
  )
}
