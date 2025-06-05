"use client"

import { motion, useInView } from "framer-motion"
import { CheckCircle, Award, Code, Zap, Target } from "lucide-react"
import { useRef } from "react"

interface AboutProps {
  data: {
    description: string
    highlights: string[]
  }
}

export default function ProfessionalAbout({ data }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, value: "2+", label: "Years Experience", color: "from-emerald-400 via-teal-500 to-cyan-600" },
    { icon: Award, value: "20+", label: "Projects Completed", color: "from-purple-400 via-violet-500 to-indigo-600" },
    { icon: Zap, value: "15+", label: "Technologies", color: "from-orange-400 via-red-500 to-pink-600" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={ref} id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-emerald-600/15 via-teal-600/15 to-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-r from-purple-600/15 via-violet-600/15 to-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-cyan-600/10 rounded-full border border-emerald-600/20 mb-6"
          >
            <Target className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-400 text-sm font-medium">About Me</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="prose prose-lg">
              <p className="text-xl text-gray-300 leading-relaxed">{data.description}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <span>Download Resume</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />

                  <div className="flex items-center space-x-6">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${stat.color} rounded-xl group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="text-4xl font-bold text-white mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-emerald-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-dashed border-purple-400/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
