import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">About Me</h2>
          <div className="mt-2 w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 border-2 border-black transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="John Doe"
                width={400}
                height={400}
                className="object-cover w-full h-full grayscale"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">Hello, I'm Joshua Muli</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Computer Science student with a focus on software development and web technologies. I
              enjoy solving complex problems and building applications that make a difference.
            </p>
            <p className="text-gray-700 mb-6">
              With a strong foundation in Java, React, JavaScript, HTML, and CSS, I strive to create clean, efficient,
              and user-friendly solutions. I'm constantly learning and exploring new technologies to expand my skill
              set.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or
              exploring the latest advancements in technology.
            </p>

            <Button className="bg-black text-white hover:bg-gray-800">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
