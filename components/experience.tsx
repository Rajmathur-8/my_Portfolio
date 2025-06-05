"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, CheckCircle } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
}

interface ExperienceProps {
  data: Experience[]
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>

          {data.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold">{experience.company}</h4>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{experience.description}</p>

                  <div className="space-y-2">
                    <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
