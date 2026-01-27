"use client"

import Link from "next/link"
import { Flame } from "lucide-react"
import { useState, useEffect } from "react"

const MESSAGES = [
  {
    text: "Community Battles LIVE NOW",
    link: { text: "Launch a Battle", href: "/v2/community/create" }
  },
  {
    text: "$2,500+ traded per battle | 1% Trading Fees go Directly to Artists | 337 battles completed",
    link: null
  },
  {
    text: "Artists making real money from fan engagement",
    link: null
  }
]

export function HypeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length)
    }, 6000) // Rotate every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const currentMessage = MESSAGES[currentIndex]

  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-neon-blue text-primary-foreground border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Flame className="h-4 w-4 animate-pulse" />
          <span className="transition-opacity duration-300">{currentMessage.text}</span>
          {currentMessage.link && (
            <Link
              href={currentMessage.link.href}
              className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold"
            >
              {currentMessage.link.text} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
