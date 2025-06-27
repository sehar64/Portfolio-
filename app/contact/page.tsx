"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "seharsajjad925@gmail.com",
      link: "mailto:seharsajjad925@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 4272003",
      link: "tel:+92 300 4272003",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/sehar64",
      color: "hover:text-gray-800",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seharsajjad/",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:seharsajjad925@gmail.com",
      color: "hover:text-pink-600",
    },
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
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say
              hello, feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-pink-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center">
                    <MessageCircle className="h-6 w-6 text-pink-500 mr-2" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target as HTMLFormElement)
                    const data = {
                      firstName: formData.get('firstName'),
                      lastName: formData.get('lastName'),
                      email: formData.get('email'),
                      subject: formData.get('subject'),
                      message: formData.get('message')
                    }
                    
                    window.location.href = `mailto:seharsajjad925@gmail.com?subject=${encodeURIComponent(data.subject as string)}&body=${encodeURIComponent(
                      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
                    )}`
                  }} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Your first name"
                          className="w-full border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg transition-all duration-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Your last name"
                          className="w-full border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        className="w-full border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg resize-none transition-all duration-200"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="border-pink-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-300"
                      >
                        <div className="p-3 bg-pink-100 rounded-full">
                          <IconComponent className="h-5 w-5 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-slate-600 hover:text-pink-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-pink-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 bg-pink-50 rounded-full text-slate-600 ${social.color} transition-all duration-300 transform hover:scale-110`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </motion.a>
                      )
                    })}
                  </div>
                  <p className="text-slate-600 mt-4">
                    Follow me on social media for updates on my latest projects and web development journey!
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Card className="border-pink-100 shadow-lg bg-gradient-to-r from-pink-50 to-purple-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Available for Projects</h3>
                    <p className="text-slate-600 mb-4">
                      I'm currently open to freelance opportunities and collaborations. Let's create something amazing
                      together!
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Available Now
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
