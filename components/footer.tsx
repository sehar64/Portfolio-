"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-pink-400">S</span>ehar
          </h3>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">
            Aspiring web developer passionate about creating beautiful and
            functional web experiences.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/sehar64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/seharsajjad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:seharsajjad925@gmail.com"
              className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-pink-400 mx-1" /> by
              Sehar © 2024
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
