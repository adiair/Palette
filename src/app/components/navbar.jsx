"use client"

import { Github, Twitter } from "lucide-react"


export default function Navbar() {

  return (
    <nav className="w-full py-4 mb-12">
      <div className="container flex items-center justify-between sm:justify-around mx-auto px-4 sm:px-6 lg:px-6">
        <h1 className="text-2xl font-medium text-white">
        Palettes
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 sm:gap-4">
            <a
              href="https://twitter.com/adiair_twt"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 sm:p-2 transition-all duration-300`}
              aria-label="Twitter"
            >
              <Twitter
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 
                }`}
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://github.com/adiair"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 sm:p-2 transition-all duration-300`}
              aria-label="GitHub"
            >
              <Github
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300
                  `}
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}