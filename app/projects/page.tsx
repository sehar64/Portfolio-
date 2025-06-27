"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Description } from "@radix-ui/react-toast"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Makli Thatta Travel Website",
      description:
        "A comprehensive travel website showcasing the historical site of Makli Thatta, featuring interactive galleries, booking systems, and detailed historical information.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://sehar64.github.io/Makli-website/",
      githubUrl: "https://github.com/sehar64/Makli-website",
      date: "2025",
      category: "Web Development",
    },
    {
      id: 2,
      title: "chat-app-cpp",
      description:
        "A real-time chat application built with C++ and Qt, featuring user authentication, private messaging, and group chats.",
      image:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000&auto=format&fit=crop",
      technologies: ["C++"],
      liveUrl: "#",
      githubUrl: "https://github.com/sehar64/chat-application-cpp",
      date: "2025",
      category: "C++ Development",
    },
    {
      id: 3,
      title: "book-catalog",
      description:
        "A book catalog application built with React, featuring search functionality, book details, and user authentication.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      liveUrl: "https://sehar64.github.io/book-catalog/index.html",
      githubUrl: "https://github.com/sehar64/book-catalog",
      date: "2024",
      category: "Web Development",
    },
  ];

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
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A collection of web development projects showcasing my skills in frontend development, responsive design,
              and modern web technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                        <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 text-slate-800 border-white hover:bg-white"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        <Tag className="h-3 w-3 mr-1" />
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-pink-200 text-pink-700 hover:bg-pink-50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
