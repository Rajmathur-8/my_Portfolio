"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface AboutProps {
  data: {
    description: string
    highlights: string[]
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">{data.description}</p>

            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">900+</div>
                  <div className="text-gray-400">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
