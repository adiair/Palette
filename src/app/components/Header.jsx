import { Palette } from 'lucide-react'
import { ArrowRight, Zap } from "lucide-react";


export default function Header() {
  return (

    <>

      <div className='mb-6 sm:mb-10 md:mb-10 flex justify-center 
      items-center h-10 px-4 rounded-full gap-3 shadow-md
      bg-white backdrop-blur-md border-t border-white/20'>
        <div className="relative flex flex-row h- w-2 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-85"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </div>
        <span className="font-medium">Beautify Your App</span>
        <Zap className="h-3 w-3 text-orange-500" />
        <span className="hidden sm:inline-flex items-center">
          Read More
        </span>
        <ArrowRight className="h-3 w-3" />
      </div>

      <header className="text-center ">
        <p className="animate-pulse
        text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#ffffff] 
        bg-clip-text text-transparent mb-9">
          Beautiful Color Palettes
          <br /> for Developers
        </p>
      </header>

      <p className="text-center text-black opacity-75 text-2xl">
        Design your next color<br />
        story with perfect palettes
        and inspiring schemes.      </p>
    </>

  )
}