"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Code, Database, Cloud, Palette, Brain, Zap, Server, Globe, GitBranch, Users } from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillsProps {
  data: Skill[]
}

const categoryIcons = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Language: Code,
  Design: Palette,
  DSA: Brain,
  "Version Control": GitBranch,
  "API Design": Server,
  Architecture: Database,
  "Soft Skills": Users,
  Other: Zap,
}

const categoryColors = {
  Frontend: {
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    bg: "from-cyan-500/10 to-purple-600/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/25",
  },
  Backend: {
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    bg: "from-emerald-500/10 to-teal-600/10",
    border: "border-emerald-400/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/25",
  },
  Database: {
    gradient: "from-orange-400 via-red-500 to-pink-600",
    bg: "from-orange-500/10 to-pink-600/10",
    border: "border-orange-400/30",
    text: "text-orange-400",
    glow: "shadow-orange-500/25",
  },
  DevOps: {
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bg: "from-violet-500/10 to-indigo-600/10",
    border: "border-violet-400/30",
    text: "text-violet-400",
    glow: "shadow-violet-500/25",
  },
  Language: {
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    bg: "from-yellow-500/10 to-orange-600/10",
    border: "border-yellow-400/30",
    text: "text-yellow-400",
    glow: "shadow-yellow-500/25",
  },
  DSA: {
    gradient: "from-rose-400 via-pink-500 to-red-600",
    bg: "from-rose-500/10 to-red-600/10",
    border: "border-rose-400/30",
    text: "text-rose-400",
    glow: "shadow-rose-500/25",
  },
  "Version Control": {
    gradient: "from-slate-400 via-gray-500 to-zinc-600",
    bg: "from-slate-500/10 to-zinc-600/10",
    border: "border-slate-400/30",
    text: "text-slate-400",
    glow: "shadow-slate-500/25",
  },
  "API Design": {
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
    bg: "from-teal-500/10 to-blue-600/10",
    border: "border-teal-400/30",
    text: "text-teal-400",
    glow: "shadow-teal-500/25",
  },
  Architecture: {
    gradient: "from-indigo-400 via-blue-500 to-cyan-600",
    bg: "from-indigo-500/10 to-cyan-600/10",
    border: "border-indigo-400/30",
    text: "text-indigo-400",
    glow: "shadow-indigo-500/25",
  },
  "Soft Skills": {
    gradient: "from-pink-400 via-rose-500 to-purple-600",
    bg: "from-pink-500/10 to-purple-600/10",
    border: "border-pink-400/30",
    text: "text-pink-400",
    glow: "shadow-pink-500/25",
  },
  Other: {
    gradient: "from-lime-400 via-green-500 to-emerald-600",
    bg: "from-lime-500/10 to-emerald-600/10",
    border: "border-lime-400/30",
    text: "text-lime-400",
    glow: "shadow-lime-500/25",
  },
}

export default function PremiumSkills({ data }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const categories = ["All", ...Array.from(new Set(data.map((skill) => skill.category)))]
  const filteredSkills = activeCategory === "All" ? data : data.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }

  return (
    <section
      ref={ref}
      id="skills"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/20 via-gray-900/30 to-slate-800/20 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Background Orbs */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-3/4 left-1/2 w-72 h-72 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 rounded-full border border-cyan-600/20 mb-8 backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-cyan-400 mr-3" />
            </motion.div>
            <span className="text-cyan-400 text-sm font-medium">Technical Expertise</span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Skills &{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Technologies
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : {}}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full mb-8"
          />

          {/* Enhanced Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Zap
              const isActive = activeCategory === category
              const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors.Other

              return (
                <motion.button
                  key={category}
                  variants={categoryVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-500 backdrop-blur-xl ${
                    isActive
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.glow} border border-white/20`
                      : `bg-white/5 text-gray-300 hover:bg-white/10 border ${colors.border} hover:${colors.text}`
                  }`}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <motion.div
                      animate={isActive ? { rotate: 360 } : {}}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                    <span>{category}</span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl -z-10`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                  />
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const colors = categoryColors[skill.category as keyof typeof categoryColors] || categoryColors.Other
            const IconComponent = categoryIcons[skill.category as keyof typeof categoryIcons] || Zap
            const isHovered = hoveredSkill === skill.name

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border transition-all duration-500 hover:border-white/30 ${colors.border} overflow-hidden`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
                  animate={
                    isHovered
                      ? {
                          background: [
                            `linear-gradient(45deg, ${colors.bg})`,
                            `linear-gradient(135deg, ${colors.bg})`,
                            `linear-gradient(225deg, ${colors.bg})`,
                            `linear-gradient(315deg, ${colors.bg})`,
                            `linear-gradient(45deg, ${colors.bg})`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 ${colors.text} rounded-full opacity-0 group-hover:opacity-60`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={
                        isHovered
                          ? {
                              y: [0, -20, 0],
                              opacity: [0, 0.6, 0],
                              scale: [0, 1, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${colors.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3
                          className={`text-lg font-bold text-white group-hover:${colors.text} transition-colors duration-300`}
                        >
                          {skill.name}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2 py-1 bg-gradient-to-r ${colors.bg} ${colors.text} rounded-full border ${colors.border}`}
                        >
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      className={`text-xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                      animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative mb-4">
                    <div className="w-full h-4 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0, x: "-100%" }}
                        animate={
                          isInView
                            ? {
                                width: `${skill.level}%`,
                                x: "0%",
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative overflow-hidden`}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: index * 0.2,
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Progress indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                      className={`absolute -top-8 bg-gradient-to-r ${colors.gradient} text-white text-xs px-2 py-1 rounded-md font-medium`}
                      style={{ left: `${Math.max(0, Math.min(85, skill.level - 5))}%` }}
                    >
                      {skill.level}%
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-current" />
                    </motion.div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Proficiency</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20) ? `bg-gradient-to-r ${colors.gradient}` : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${colors.gradient.split(" ")[1]}, transparent)`,
                    padding: "1px",
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Skills", value: data.length, color: "from-cyan-400 to-blue-500" },
              { label: "Categories", value: categories.length - 1, color: "from-emerald-400 to-teal-500" },
              {
                label: "Avg Proficiency",
                value: `${Math.round(data.reduce((acc, skill) => acc + skill.level, 0) / data.length)}%`,
                color: "from-orange-400 to-red-500",
              },
              {
                label: "Years Experience",
                value: "2+",
                color: "from-purple-400 to-pink-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10"
              >
                <motion.div
                  className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
