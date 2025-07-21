import { Copy } from 'lucide-react'
import { getContrastColor } from '../utils/colorUtils'

export default function ColorColumn({ color, isGenerating, onClick }) {
  const textColor = getContrastColor(color.hex)

  return (
    <div
      className={`
        flex-1 relative cursor-pointer transition-all duration-300 
        hover:scale-[1.03] hover:z-10 hover:shadow-xl
        flex flex-col justify-between p-4 sm:p-5 md:p-6 group
        ${isGenerating ? 'animate-pulse' : ''}
        min-w-[140px] sm:min-w-[160px]
      `}
      style={{ backgroundColor: color.hex }}
      onClick={onClick}
    >
      {/* Color Name & Hex */}
      <div style={{ color: textColor }}>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 drop-shadow-sm">
          {color.name}
        </h3>
        <p className="font-mono text-xs sm:text-sm md:text-base opacity-90 drop-shadow-sm break-all">
          {color.hex.toUpperCase()}
        </p>
      </div>

      {/* Copy Tooltip */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-black bg-opacity-60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md flex items-center gap-2 backdrop-blur-sm">
          <Copy className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-medium">Click to copy</span>
        </div>
      </div>
    </div>
  )
}
