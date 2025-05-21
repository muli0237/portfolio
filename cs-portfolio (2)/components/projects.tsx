"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Layout, Database, Smartphone } from "lucide-react"

const categories = ["All", "Web", "Mobile", "Backend", "Java"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
    icon: <Layout className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Java-based desktop application for task management with a clean UI.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Java",
    tags: ["Java", , "MySQL"],
    github: "#",
    demo: "#",
    icon: <Code className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description: "RESTful API for weather forecasting built with Spring Boot.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Backend",
    tags: ["Java", "Spring Boot", "API"],
    github: "#",
    demo: "#",
    icon: <Database className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "Fitness Tracker Mobile App",
    description: "A React Native mobile app for tracking fitness activities and goals.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile",
    tags: ["React Native", "Firebase", "JavaScript"],
    github: "#",
    demo: "#",
    icon: <Smartphone className="h-10 w-10" />,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS", "React"],
    github: "#",
    demo: "#",
    icon: <Layout className="h-10 w-10" />,
  },
  {
    id: 6,
    title: "Inventory Management System",
    description: "A Java-based inventory management system with database integration.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Java",
    tags: ["Java", "JDBC", "MySQL", "Swing"],
    github: "#",
    demo: "#",
    icon: <Code className="h-10 w-10" />,
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">My Projects</h2>
          <div className="mt-2 w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                {project.icon}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
