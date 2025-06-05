"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
}

interface ProjectsProps {
  data: Project[]
}

export default function Projects({ data }: ProjectsProps) {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? data : filter === "featured" ? data.filter((project) => project.featured) : data

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "featured"].map((filterType) => (
              <motion.button
                key={filterType}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                  filter === filterType
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {filterType === "all" ? "All Projects" : "Featured"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=300&width=500"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
