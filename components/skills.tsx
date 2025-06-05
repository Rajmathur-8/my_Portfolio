"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillsProps {
  data: Skill[]
}

export default function Skills({ data }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(data.map((skill) => skill.category)))]
  const filteredSkills = activeCategory === "All" ? data : data.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-medium">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                />
              </div>

              <div className="mt-2">
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
