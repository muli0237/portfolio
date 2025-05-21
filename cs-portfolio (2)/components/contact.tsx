"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { sendContactEmail } from "@/actions/contact"
import { useFormStatus } from "react-dom"

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState<{
    errors?: Record<string, string[]>
    success?: boolean
  }>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await sendContactEmail(formData)

    if (result.success) {
      setFormState({ success: true })
      formRef.current?.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState({})
      }, 5000)
    } else {
      setFormState({ errors: result.errors })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Get In Touch</h2>
          <div className="mt-2 w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black flex items-center justify-center text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Email</h4>
                  <p className="text-gray-600">jmuli0237@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black flex items-center justify-center text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black flex items-center justify-center text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-black">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Send Me a Message</h3>

            {formState.success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form ref={formRef} action={handleSubmit} className="space-y-6">
                {formState.errors?._form && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {formState.errors._form.map((error, i) => (
                      <p key={i}>{error}</p>
                    ))}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className={`w-full ${formState.errors?.name ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.name && <p className="text-red-500 text-sm mt-1">{formState.errors.name[0]}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`w-full ${formState.errors?.email ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.email && <p className="text-red-500 text-sm mt-1">{formState.errors.email[0]}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className={`w-full ${formState.errors?.subject ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.subject && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.subject[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className={`w-full min-h-[150px] ${formState.errors?.message ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.message && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.message[0]}</p>
                  )}
                </div>

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
