"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, MapPin, Calendar, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PDFViewer } from '@react-pdf/renderer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-slate-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Sehar</span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Aspiring Web Developer & IT Student passionate about creating beautiful, functional web experiences that
                make a difference.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link href="/projects">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/ressume.pdf">
                  <Button
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Image
                  src="/me.jpg?height=320&width=320&fit=crop&format=webp&quality=75"
                  alt="Sehar's Profile"
                  width={320}
                  height={320}


                  className="relative z-10 rounded-full border-4 border-white shadow-2xl object-cover aspect-square"
                  style={{ 
                    transform: 'perspective(1000px) rotateY(10deg)', 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Personal Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-pink-500" />
                      <span className="text-slate-600">Pakistan</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-pink-500" />
                      <span className="text-slate-600">Bachelor's in IT Student</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 leading-relaxed">
                    Currently pursuing my Bachelor's degree in Information Technology, I'm passionate about web
                    development and creating digital solutions that solve real-world problems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">What I Do</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Frontend Web Development</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Responsive Design</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">UI/UX Design</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-slate-600">Modern Web Technologies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Objective Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="h-16 w-16 text-pink-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Career Objective</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              To leverage my passion for web development and growing technical skills to contribute to innovative
              projects while continuously learning and evolving in the dynamic field of technology. I aim to create
              user-centric web solutions that combine functionality with beautiful design, ultimately making a positive
              impact in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
