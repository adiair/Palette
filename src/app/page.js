'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Download, Shuffle } from 'lucide-react'
import Header from './components/Header'
import Navbar from "./components/navbar";
import PaletteWindow from './components/PaletteWindow'
import FeatureSection from './components/FeatureSection'
import Preview from './components/preview'


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
  'Asmita', 'Rangat', 'Soumya', 'Ranjan', 'Vismrit',
  'Anaahat', 'Neelam', 'Nayan', 'Raina', 'Prabha', 'Nishi',
  'Rimjhim', 'Ambar', 'Shuktij', 'Nirja', 'Indu', 'Ratna',
  'Manik', 'Heera', 'Firoza', 'Chandni', 'Saundarya', 'Samay',
  'Vihan', 'Aarambh', 'Anant', 'Taru', 'Sharad', 'Nilay', 'Tushar',
  'Tejas', 'Neer', 'Aahan', 'Divit', 'Prithvi', 'Agantuk', 'Kshitij',
  'Hriday', 'Manthan', 'Samar', 'Uday', 'Anvay', 'Chaitanya', 'Naimish',
  'Yugant', 'Saanjh', 'Rajhans', 'Darpan', 'Tanmay', 'Vasudha', 'Sharanya',
  'Jeevan', 'Swara', 'Milan'
]

// Components
function Button({ onClick, disabled, children, variant = 'primary' }) {
  const baseClasses = "px-6 py-3  rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:-translate-y-1 disabled:opacity-50"
  const variants = {
    primary: " text-black bg-white shadow-2xl bg-opacity-10 backdrop-blur-md border border-white/20",
    secondary: "text-black  bg-white shadow-2xl bg-opacity-10 backdrop-blur-md border border-white/20"
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

function ControlPanel({ onGenerate, onExportCSS, isGenerating }) {
  return (
    <div className="mt-8 flex text-black flex-wrap gap-4 justify-center">
      <Button onClick={onGenerate} disabled={isGenerating}>
        <Shuffle className="w-5 h-5" />
        {isGenerating ? 'Generating...' : 'Generate New'}
      </Button>

      <Button onClick={onExportCSS} variant="secondary">
        <Download className="w-5 text-black h-5" />
        Export CSS
      </Button>
    </div>
  )
}

function Notification({ message }) {
  if (!message) return null

  return (
    <div
      className="fixed top-6 right-10 z-50 
             px-6 py-3 rounded-lg shadow-lg text-white 
             bg-gradient-to-r from-green-500 to-emerald-600 
             w-[300px] animate-slide-in-right"
    >
      <div className="flex items-center gap-2">
        <Copy className="w-4 h-4" />
        <span className="text-sm font-medium">{message}</span>
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

    const shuffledNames = [...COLOR_NAMES].sort(() => Math.random() - 0.5)
    for (let i = 0; i < 5; i++) {
      const color = generateRandomColor()
      const name = shuffledNames[i]
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

  const [showPreview, setShowPreview] = useState(false)


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

    <div className="min-h-screen w-full bg-white relative">
      {/* White Sphere Grid Background ~ Pattern Craft*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
      `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      <main className="relative z-10  min-h-screen flex flex-col items-center p-4 md:p-10">

        <Navbar />
        <Header />

        <FeatureSection />

        <PaletteWindow
          palette={palette}
          isGenerating={isGenerating}
          onColorClick={copyToClipboard}
        />

        <ControlPanel
          onGenerate={generatePalette}
          onExportCSS={exportAsCSS}
          isGenerating={isGenerating}
        />

        <br />
        <Button className="mt-4 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 text-black " onClick={() => setShowPreview(true)} variant="secondary">
          Show Preview
        </Button>
        {
          showPreview && (
            <Preview palette={palette} onClose={() => setShowPreview(false)} />
          )
        }

        <Notification message={notification} />

        <footer className="mt-5 border-t px-4 sm:px-20 md:px-40 lg:px-60 pt-5 text-center text-black opacity-85">
          <p>
            Made with ❤️ by{" "}
            <a href="https://adiair.netlify.app" className="text-lg  hover:text-blue-600 transition">
              adiair
            </a>
          </p>
        </footer>


      </main>
    </div>
  )
}
