import { Copy } from 'lucide-react'
import { getContrastColor } from '../utils/colorUtils'

export default function ColorColumn({ color, isGenerating, onClick }) {
  const textColor = getContrastColor(color.hex)

  return (
    <div
      className={`
        flex-1 relative cursor-pointer transition-all duration-300 
        hover:scale-105 hover:z-10 hover:shadow-2xl
        flex flex-col justify-between p-6 group
        ${isGenerating ? 'animate-pulse' : ''}
      `}
      style={{ backgroundColor: color.hex }}
      onClick={onClick}
    >
      <div style={{ color: textColor }}>
        <h3 className="text-lg md:text-xl font-semibold mb-2 drop-shadow-sm">
          {color.name}
        </h3>
        <p className="font-mono text-sm md:text-base opacity-90 drop-shadow-sm">
          {color.hex.toUpperCase()}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm">
          <Copy className="w-4 h-4" />
          <span className="text-sm font-medium">Click to copy</span>
        </div>
      </div>
    </div>
  )
}