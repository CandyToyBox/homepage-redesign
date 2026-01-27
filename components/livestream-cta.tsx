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
        {/* Notification Signup Bar - Enhanced UI */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left: Message */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center lg:text-left flex-grow">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-lg animate-pulse" />
                  <Bell className="h-8 w-8 text-primary relative z-10 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tighter mb-1">
                    Stay in the loop
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                    Get notified about upcoming <span className="text-primary font-bold">Main Events</span>, live spaces, and exclusive <span className="text-secondary font-bold">SOL rewards</span>.
                  </p>
                </div>
              </div>

              {/* Right: Email signup */}
              <div className="w-full lg:w-auto">
                {isSubscribed ? (
                  <div className="flex items-center justify-center gap-3 text-primary bg-primary/10 px-6 py-4 rounded-xl border border-primary/20">
                    <CheckCircle className="h-6 w-6" />
                    <span className="font-bold text-lg">You're on the list!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full sm:w-72 h-12 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground text-base rounded-xl focus:border-primary/50 transition-all"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-black px-8 rounded-xl shadow-[0_0_20px_rgba(94,234,128,0.3)] transition-all active:scale-95"
                    >
                      {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "NOTIFY ME →"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
