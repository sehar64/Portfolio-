"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, Globe, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 90, icon: Code },
    { name: "CSS3", level: 85, icon: Palette },
    { name: "JavaScript", level: 80, icon: Code },
    { name: "Bootstrap", level: 85, icon: Palette },
    { name: "Git & GitHub", level: 75, icon: Database },
    { name: "c", level: 60, icon: Code },
    { name: "Canva", level: 70, icon: Code },
    { name: "Responsive Design", level: 90, icon: Globe },
  ]

  const education = [
    {
      degree: "Bachelor's in Information Technology",
      institution: "University Name",
      period: "2022 - Present",
      status: "In Progress",
      description: "Focusing on web development, software engineering, and database management.",
    },
    {
      degree: "Web Development Certification",
      institution: "Online Platform",
      period: "2023",
      status: "Completed",
      description: "Comprehensive course covering modern web development technologies and best practices.",
    },
  ]

  const achievements = [
    "Dean's List - Academic Excellence",
    "Best Web Design Project - University Competition",
    "Frontend Development Certificate",
    "Responsive Design Specialist",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />

      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                Education
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My technical skills, educational background, and continuous learning journey in web development.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-pink-100 rounded-lg mr-3 group-hover:bg-pink-200 transition-colors duration-300">
                            <IconComponent className="h-5 w-5 text-pink-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                          <span className="ml-auto text-sm font-medium text-pink-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-slate-800 mb-2">{edu.degree}</CardTitle>
                          <p className="text-pink-600 font-medium">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-slate-500 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.period}
                          </div>
                          <Badge
                            variant={edu.status === "Completed" ? "default" : "secondary"}
                            className={
                              edu.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Achievements</h2>
            <Card className="border-pink-100 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-300"
                    >
                      <Award className="h-5 w-5 text-pink-500 flex-shrink-0" />
                      <span className="text-slate-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
