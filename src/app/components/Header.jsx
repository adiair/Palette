import {ArrowRight, Zap } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* Notification Badge */}
      <a href="https://github.com/adiair/Palette"
        className="mb-6 sm:mb-10 flex justify-center items-center h-10 px-4 sm:px-6 rounded-full gap-2 sm:gap-3 shadow-md
        bg-white/70 backdrop-blur-md border-t border-white/20"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-85"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </div>
        <span className="text-sm sm:text-base font-medium">Beautify Your App</span>
        <Zap className="h-4 w-4 text-orange-500" />
        <span className="hidden sm:inline-flex items-center text-sm sm:text-base">
          Read More
        </span>
        <ArrowRight className="h-4 w-4" />
      </a>

      {/* Main Heading */}
      <header className="text-center px-4 sm:px-6">
        <p
          className="animate-pulse text-2xl sm:text-3xl md:text-5xl font-bold 
           mb-6 sm:mb-9"
        >
          Beautiful Color Palettes
          <br />
          for Developers
        </p>
      </header>

      {/* Subheading */}
      <p className="text-center text-black opacity-75 text-base sm:text-lg md:text-xl px-4 sm:px-0">
        Design your next color
        <br className="hidden sm:block" />
        story with perfect palettes and inspiring schemes.
      </p>
    </>
  )
}
