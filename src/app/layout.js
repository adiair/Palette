import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Palette - Color Palettes for developers',
  description: 'Generate beautiful, developer-friendly color palettes with instant CSS export',
  keywords: ['color palette', 'web development', 'design tools', 'CSS colors'],
  icons: {
    icon: "/Favi-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}