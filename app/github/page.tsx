"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink, Calendar, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GitHubPortfolio() {
  const stats = [
    { label: "Public Repositories", value: "8", icon: Code },
    { label: "Total Stars", value: "20", icon: Star },
    { label: "Followers", value: "28", icon: Users },
    { label: "Following", value: "35", icon: Users },
  ]

  const repositories = [
    {
      name: "makli-thatta-website",
      description:
        "A comprehensive travel website showcasing the historical site of Makli Thatta with interactive features and booking system.",
      language: "JavaScript",
      stars: 12,
      forks: 3,
      updated: "2 days ago",
      topics: ["html", "css", "javascript", "travel", "responsive"],
    },
    {
      name: "chat-app-cpp",
      description: "A real-time chat application built with C++ and Qt, featuring user authentication and group chats.",
      language: "C++",
      stars: 8,
      forks: 2,
      updated: "1 week ago",
      topics: ["c++", "qt", "chat", "real-time", "authentication"],
    },
    {
      name: "book-catalog",
      description:
        "A book catalog application built with React, featuring search functionality, book details, and user authentication.",
      language: "JavaScript",
      stars: 10,
      forks: 5,
      updated: "1 month ago",
      topics: ["react", "javascript", "book", "catalog", "authentication"],
    },
  ]

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      React: "bg-cyan-400",
      Python: "bg-green-500",
    }
    return colors[language] || "bg-gray-400"
  }

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
              GitHub{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                Portfolio
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore my open-source contributions and coding journey through my GitHub repositories.
            </p>

            <a href="https://github.com/sehar64" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile

            </a>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">GitHub Statistics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                      <CardContent className="p-6">
                        <div className="p-3 bg-pink-100 rounded-full w-fit mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                          <IconComponent className="h-6 w-6 text-pink-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                        <p className="text-slate-600">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Featured Repositories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {repositories.map((repo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-slate-800 group-hover:text-pink-600 transition-colors duration-300 flex items-center">
                            <Github className="h-5 w-5 mr-2" />
                            {repo.name}
                          </CardTitle>
                          <p className="text-slate-600 mt-2 leading-relaxed">{repo.description}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="text-slate-500 hover:text-pink-600">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors duration-300"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                            <span>{repo.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="h-4 w-4" />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{repo.updated}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contribution Activity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="border-pink-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 text-center">Contribution Activity</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-8 mb-6">
                  <h3 className="text-4xl font-bold text-slate-800 mb-2">365</h3>
                  <p className="text-slate-600">Contributions in the last year</p>
                </div>
                <p className="text-slate-600 mb-6">
                  Consistently contributing to open-source projects and building my coding skills every day.
                </p>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  View Full Activity
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
