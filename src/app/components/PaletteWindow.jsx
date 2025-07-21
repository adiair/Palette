import WindowFrame from './ui/WindowFrame'
import ColorColumn from './ColorColumn'

export default function PaletteWindow({ palette, isGenerating, onColorClick }) {
  return (
    <WindowFrame title="Current Palette">
      <div className="flex flex-col md:flex-row h-[420px] md:h-80 lg:h-[20rem] overflow-hidden">
        {palette.map((color) => (
          <ColorColumn
            key={color.id}
            color={color}
            isGenerating={isGenerating}
            onClick={() => onColorClick(color.hex)}
          />
        ))}
      </div>
    </WindowFrame>
  )
}
