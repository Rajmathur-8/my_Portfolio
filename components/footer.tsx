"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react"
import ClientOnly from "./client-only"

export default function Footer() {
  const socialLinks = [
    { icon: Github, url: "https://github.com/Rajmathur-8", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/raj-mathur-778181258/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:mathurraj188@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Raj Mathur</h3>
            <p className="text-gray-400 mb-4">
              Backend Developer passionate about building scalable systems and exceptional digital experiences.
            </p>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Bhubaneswar, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Feel free to reach out for collaborations or just a friendly hello!</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <ClientOnly
            fallback={<p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Raj Mathur. All rights reserved.</p>}
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Raj Mathur. All rights reserved.
            </p>
          </ClientOnly>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="mx-1"
            >
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
