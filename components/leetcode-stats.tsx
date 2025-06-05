"use client"

import { motion } from "framer-motion"
import { Code, CheckCircle, Award, Star, Clock, TrendingUp } from "lucide-react"

interface LeetCodeStatsProps {
  username: string
}

export default function LeetCodeStats({ username }: LeetCodeStatsProps) {
  const stats = {
    username,
    totalSolved: 896,
    easySolved: 283,
    mediumSolved: 519,
    hardSolved: 96,
    ranking: 30500,
    contestRating: 1948,
    streak: 111,
  }

  const categories = [
    { name: "Easy", solved: stats.easySolved, color: "from-emerald-400 to-teal-500", percentage: 60 },
    { name: "Medium", solved: stats.mediumSolved, color: "from-amber-400 to-orange-500", percentage: 70 },
    { name: "Hard", solved: stats.hardSolved, color: "from-rose-400 to-red-500", percentage: 35 },
  ]

  return (
    <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">LeetCode</span>{" "}
            DSA Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">Knight status with 1948 rating and 900+ problems solved</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* LeetCode Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{stats.username}</h3>
                <p className="text-blue-300">LeetCode Knight</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Problems Solved
                </span>
                <span className="text-white font-bold">{stats.totalSolved}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-blue-400" />
                  Global Ranking
                </span>
                <span className="text-white font-bold">#{stats.ranking}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                  Contest Rating
                </span>
                <span className="text-white font-bold text-yellow-400">{stats.contestRating}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Day Streak
                </span>
                <span className="text-white font-bold">{stats.streak} days</span>
              </div>
            </div>

            <div className="mt-6">
              <motion.a
                href={`https://leetcode.com/u/Raj_Mathur03/`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg text-center hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                View Profile
              </motion.a>
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Problem Solving Stats
            </h3>

            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{category.name}</span>
                    <span className="text-white font-medium">{category.solved} solved</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Knight Status Achieved!</span>
              </div>
              <p className="text-gray-300 text-sm mt-1">Top 3% competitive programmer with consistent performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
