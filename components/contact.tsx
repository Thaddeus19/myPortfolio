"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Youtube } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


type AlertState =
  | {
    variant: "default" | "destructive"
    title: string
    message: string
  }
  | null

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<AlertState>(null)

  useEffect(() => {
    if (!status) return
    const timer = setTimeout(() => setStatus(null), 6000)
    return () => clearTimeout(timer)
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormData({ name: "", email: "", message: "" })
      setStatus({ variant: "default", title: "Message sent", message: "Thanks for reaching out — I’ll reply shortly." })
    } catch (error) {
      console.error(error)
      setStatus({
        variant: "destructive",
        title: "Something went wrong",
        message: "Please try again in a moment.",
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mtsa95@gmail.com",
      href: "mailto:mtsa95@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote (Queretaro, Mexico)",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Thaddeus19",
      href: "https://github.com/Thaddeus19",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mariano-salazar-alvarez",
      href: "https://www.linkedin.com/in/mariano-salazar-alvarez/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@thaddeuscrypto",
      href: "https://www.youtube.com/@thaddeuscrypto",
    },
  ]

  return (
    <section id="contacto" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Let’s talk</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Need to reinforce your protocol’s security or want me embedded through launch? Book a review and we’ll plan
            the path to mainnet together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status && (
                <Alert
                  variant={status.variant}
                  className={status.variant === "default" ? "bg-primary/5 border-primary/40" : undefined}
                  aria-live="assertive"
                >
                  <AlertTitle>{status.title}</AlertTitle>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your protocol, deadlines, and current risks..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              const content = (
                <Card key={info.label} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </Card>
              )

              return info.href ? (
                <a key={info.label} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              )
            })}

            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Let’s review your contracts, deployment processes, and monitoring needs so you can ship with confidence.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:mtsa95@gmail.com">Email me now</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p className="text-sm">© {new Date().getFullYear()} Mariano Salazar. All rights reserved.</p>
      </footer>
    </section>
  )
}
