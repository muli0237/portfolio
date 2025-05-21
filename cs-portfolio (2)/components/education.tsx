import { GraduationCap, Award, Briefcase } from "lucide-react"

const educationData = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2020 - 2024",
    description:
      "Focused on software engineering, algorithms, and web development. Maintained a 3.8 GPA and participated in various coding competitions.",
  },
  {
    id: 2,
    type: "experience",
    title: "Software Developer Intern",
    institution: "Tech Solutions Inc.",
    period: "Summer 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs.",
  },
  {
    id: 3,
    type: "award",
    title: "First Place - University Hackathon",
    institution: "University of Technology",
    period: "March 2023",
    description:
      "Led a team of three to develop an innovative solution for local businesses, winning first place among 30 teams.",
  },
  {
    id: 4,
    type: "experience",
    title: "Teaching Assistant - Data Structures",
    institution: "University of Technology",
    period: "Fall 2022",
    description:
      "Assisted professor in teaching data structures and algorithms. Conducted weekly lab sessions and graded assignments.",
  },
  {
    id: 5,
    type: "award",
    title: "Dean's List",
    institution: "University of Technology",
    period: "2020 - 2023",
    description: "Recognized for academic excellence by maintaining a GPA above 3.5 for six consecutive semesters.",
  },
]

export default function Education() {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-6 w-6" />
      case "experience":
        return <Briefcase className="h-6 w-6" />
      case "award":
        return <Award className="h-6 w-6" />
      default:
        return <GraduationCap className="h-6 w-6" />
    }
  }

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Education & Experience</h2>
          <div className="mt-2 w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                  {getIcon(item.type)}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-black">{item.title}</h3>
                      <span className="text-sm font-medium text-gray-500 mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
