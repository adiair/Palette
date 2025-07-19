'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Download, Shuffle, Palette } from 'lucide-react'
import Header from './components/Header'
import Navbar from "./components/navbar";
import PaletteWindow from './components/PaletteWindow'
import FeatureSection from './components/FeatureSection'

// Utility functions
const hslToHex = (h, s, l) => {
  l /= 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = n => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360)
  const saturation = Math.floor(Math.random() * 30) + 70
  const lightness = Math.floor(Math.random() * 40) + 30
  return hslToHex(hue, saturation, lightness)
}


const COLOR_NAMES = [
  'Primary', 'Secondary', 'Accent', 'Success', 'Warning',
  'Crimson', 'Ocean', 'Forest', 'Sunset', 'Lavender',
  'Coral', 'Mint', 'Slate', 'Rose', 'Amber',
  'Indigo', 'Teal', 'Emerald', 'Ruby', 'Sapphire'
]

// Components
function Button({ onClick, disabled, children, variant = 'primary' }) {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-1 disabled:opacity-50"
  const variants = {
    primary: "bg-white bg-opacity-20 backdrop-blur-md text-white hover:bg-opacity-30",
    secondary: "bg-white bg-opacity-10 backdrop-blur-md text-white hover:bg-opacity-20"
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

function ControlPanel({ onGenerate, onExportCSS, onExportJSON, isGenerating }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <Button onClick={onGenerate} disabled={isGenerating}>
        <Shuffle className="w-5 h-5" />
        {isGenerating ? 'Generating...' : 'Generate New'}
      </Button>
      
      <Button onClick={onExportCSS} variant="secondary">
        <Download className="w-5 h-5" />
        Export CSS
      </Button>

      <Button onClick={onExportJSON} variant="secondary">
        <Download className="w-5 h-5" />
        Export JSON
      </Button>
    </div>
  )
}

function Notification({ message }) {
  if (!message) return null

  return (
    <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right-full duration-300 z-50">
      <div className="flex items-center gap-2">
        <Copy className="w-4 h-4" />
        {message}
      </div>
    </div>
  )
}

// Main App Component
export default function Home() {
  const [palette, setPalette] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [notification, setNotification] = useState('')

  const generatePalette = useCallback(() => {
    setIsGenerating(true)
    const newPalette = []
    
    for (let i = 0; i < 5; i++) {
      const color = generateRandomColor()
      const name = COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)]
      newPalette.push({ id: i, name, hex: color })
    }
    
    setTimeout(() => {
      setPalette(newPalette)
      setIsGenerating(false)
    }, 300)
  }, [])

  const copyToClipboard = async (text, type = 'color') => {
    try {
      await navigator.clipboard.writeText(text)
      setNotification(`${type === 'color' ? 'Color' : 'CSS'} copied to clipboard!`)
      setTimeout(() => setNotification(''), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const exportAsCSS = () => {
    if (palette.length === 0) return

    let css = ':root {\n'
    palette.forEach((color) => {
      css += `  --color-${color.name.toLowerCase()}: ${color.hex};\n`
    })
    css += '}\n\n/* Usage examples */\n'
    css += '.primary-btn { background-color: var(--color-primary); }\n'
    css += '.secondary-text { color: var(--color-secondary); }'

    copyToClipboard(css, 'CSS')
  }

  const exportAsJSON = () => {
    if (palette.length === 0) return
    
    const jsonPalette = {
      name: 'Generated Palette',
      colors: palette.reduce((acc, color) => {
        acc[color.name.toLowerCase()] = color.hex
        return acc
      }, {})
    }
    
    copyToClipboard(JSON.stringify(jsonPalette, null, 2), 'JSON')
  }

  useEffect(() => {
    generatePalette()
  }, [generatePalette])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !e.target.closest('button')) {
        e.preventDefault()
        generatePalette()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [generatePalette])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex flex-col items-center p-4 md:p-10">
      <Navbar />
      <Header />
      
      <PaletteWindow 
        palette={palette}
        isGenerating={isGenerating}
        onColorClick={copyToClipboard}
      />
      
      <ControlPanel 
        onGenerate={generatePalette}
        onExportCSS={exportAsCSS}
        onExportJSON={exportAsJSON}
        isGenerating={isGenerating}
      />
      
      <FeatureSection />
      
      <Notification message={notification} />
      
      <footer className="mt-16 text-center text-white opacity-75">
        <p className="text-sm">
          Made with ❤️ by <a href=''>adiair</a> • Press spacebar for new palettes
        </p>
      </footer>
    </main>
  )
}