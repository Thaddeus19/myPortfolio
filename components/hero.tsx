"use client"

import { ArrowDown, Github, Linkedin, Mail, MapPin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Thaddeus19",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mariano-salazar-alvarez/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@thaddeuscrypto",
    icon: Youtube,
  },
]

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-6 animate-fade-in-up">
          <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-primary/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Web3 auditing & smart-contract security
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mariano Salazar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Smart Contract Security Engineer & Solidity Lead
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I design, audit, and harden DeFi, NFT, and RWA protocols. My workflow mixes manual reviews, invariant tests,
            and on-chain experience to ship resilient products with teams across LATAM and Europe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="mailto:mtsa95@gmail.com">
                Book a review
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#proyectos">See deployments</a>
            </Button>
          </div>

          <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            Remote (Queretaro, Mexico)
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
