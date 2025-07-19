import { Palette } from 'lucide-react'
import { ArrowRight, Zap } from "lucide-react";


export default function Header() {
  return (

    <>

      <div className='mb-6 sm:mb-10 md:mb-10 flex justify-center 
      items-center h-10 px-4 rounded-full gap-3 border-t shadow-md'>
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

      <header className="text-center text-white">
        <p className="animate-pulse
        text-4xl font-bold bg-gradient-to-r from-[#000000] to-[#ffffff] 
        bg-clip-text text-transparent mb-9">
          Beautiful Color Palettes
          <br /> for Developers
        </p>
      </header>

      <p className="text-center text-white text-2xl font-light opacity-80">
        Design your next color<br />
        story with perfect palettes
        and inspiring schemes.      </p>

      <div className="flex gap-5">
        <p className="flex mt-9 justify-center items-center gap-2 mt-4 text-sm bg-[#ffffff] 
        border-t rounded-md px-4 py-4 bg-clip-text text-transparent shadow-md">
          • Click colors to copy •
        </p>
        <p className="flex mt-9 justify-center items-center gap-2 mt-4 text-sm bg-[#ffffff] 
        border-t rounded-md px-4 py-4 bg-clip-text text-transparent shadow-md">
          • Build Modern Apps •
        </p>
      </div>

      <p className="font-medium text-white mb-5 mt-4 opacity-75">
        Press Spacebar to generate
      </p>
    </>

  )
}