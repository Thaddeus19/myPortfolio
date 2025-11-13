import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio Personal | Desarrollador Blockchain",
  description:
    "Portfolio personal de desarrollador Blockchain especializado en React, Next.js y TypeScript. Descubre mis proyectos y experiencia.",
  keywords: ["portfolio", "desarrollador", "full stack", "react", "nextjs", "typescript", "Blockchain", "smartcontracts"],
  icons: {
    icon: [
      {
        url: "/public/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/public/favicon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/public/favicon.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: ["/favicon.svg"],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
