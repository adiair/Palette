"use client"

import { useState, useEffect } from "react"

export function FooterStats() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const initializeVisitorCount = () => {
      const stored = localStorage.getItem("portfolio-visitor-count")
      const count = stored ? parseInt(stored, 10) : 100 // Start from 100 as base
      const newCount = count + 1
      localStorage.setItem("portfolio-visitor-count", newCount.toString())
      setVisitorCount(newCount)
    }

    const updateTime = () => {
      const now = new Date()
      const bhopalTime = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      const location = "Bhopal"
      setCurrentTime(`${location}, ${bhopalTime}`)
    }

    initializeVisitorCount()
    updateTime()

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div className="text-sm flex gap-2 justify-center items-center text-muted-foreground">
      <div 
        className="mb-2  flex justify-center items-center h-5 px-4 sm:px-6 rounded-full gap-2
          border-t border-white/20"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-85"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
        </div>
        <span className="text-sm sm:text-base font-medium">{visitorCount} Visitors</span>
        
      </div>
    </div>
    
  )
}
