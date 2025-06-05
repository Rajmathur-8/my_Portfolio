"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Mic, Zap, Users, Calendar, Building } from "lucide-react"
import { useState } from "react"

interface Achievement {
  id: number
  title: string
  organization: string
  date: string
  description: string
  icon: string
  category: string
}

interface AchievementsProps {
  data: Achievement[]
}

const iconMap = {
  award: Award,
  trophy: Trophy,
  star: Star,
  mic: Mic,
  zap: Zap,
  users: Users,
}

export default function Achievements({ data }: AchievementsProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(data.map((achievement) => achievement.category)))]

  const filteredAchievements =
    activeCategory === "All" ? data : data.filter((achievement) => achievement.category === activeCategory)

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Award

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    {achievement.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {achievement.title}
                </h3>

                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="mr-4">{achievement.organization}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{achievement.date}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
