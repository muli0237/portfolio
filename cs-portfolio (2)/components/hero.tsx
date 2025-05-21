"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import AnimatedLogo from "./animated-logo"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Science Student"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 relative"
    >
      <AnimatedLogo />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Joshua Muli</h1>
        <div className="h-8">
          <h2 className="text-xl md:text-2xl font-medium">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
        </div>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Building innovative solutions with Java, React, JavaScript, HTML, and CSS
        </p>
        <div className="mt-10">
          <Button onClick={scrollToAbout} className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
            View My Work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full border border-white"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border border-white"></div>
      </div>
    </section>
  )
}
