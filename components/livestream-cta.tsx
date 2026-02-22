"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Youtube, CheckCircle, Loader2 } from "lucide-react"

export function LivestreamCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsSubmitting(false)
  }

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live schedule banner - highly visible */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#ff0000]/20 via-[#ff0000]/10 to-[#ff0000]/20 border border-[#ff0000]/30 px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left: Schedule */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff0000]" />
                </span>
                <span className="text-lg sm:text-xl font-black text-foreground">LIVE M-F</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-[#ff0000]">8:30 PM EST</span>
              <a
                href="https://youtube.com/@WaveWarZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#ff0000] transition-colors"
              >
                <Youtube className="h-4 w-4" />
                @WaveWarZ
              </a>
            </div>

            {/* Right: Email signup */}
            <div className="w-full lg:w-auto">
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">You're on the list!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Get notified"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-48 bg-card border-border text-foreground placeholder:text-muted-foreground text-sm"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="sm"
                    className="bg-[#ff0000] text-white hover:bg-[#ff0000]/90 font-semibold"
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
