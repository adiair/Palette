"use client"

import { Github, Twitter } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="w-full py-4 mb-12">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
          <a href="/">Palettes</a>
        </h1>

        {/* Socials */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/adiair/Palette"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="rounded-full p-2 hover:bg-blue-100 transition-colors"
          >
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-black/80 hover:text-blue-500" strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/adiair"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full flex gap-2 p-2 bg-black/10 text-black shadow-lg px-4 hover:bg-yellow-100 transition-colors"
          >Star Here
            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-black/80 hover:text-black-900 hover:bg-yellow-100" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  )
}
