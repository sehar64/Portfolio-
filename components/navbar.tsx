"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-slate-800">
            <span className="text-pink-500">S</span>ehar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-slate-600 hover:text-pink-500 transition-colors duration-300 relative ${
                  pathname === item.href ? "text-pink-500" : ""
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-500" />
                )}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:seharsajjad925@gmail.com"
              className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-pink-500 transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-pink-100 py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-slate-600 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 ${
                  pathname === item.href ? "text-pink-500 bg-pink-50" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-pink-100">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:seharsajjad925@gmail.com"
                className="text-slate-600 hover:text-pink-500 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
