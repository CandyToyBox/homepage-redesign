"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "50K+", label: "Battles" },
  { value: "2.5M", label: "SOL Won" },
  { value: "120K+", label: "Users" },
  { value: "500+", label: "Artists" },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 border-y border-border" aria-label="Platform statistics">
      <div className="max-w-5xl mx-auto">
        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <h3 className="font-semibold text-foreground">Live Analytics</h3>
              <p className="text-xs text-muted-foreground">Real-time battle data - fully transparent</p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-muted bg-transparent"
            >
              <a href="https://analytics-wave-warz.vercel.app/" target="_blank" rel="noopener noreferrer">
                Full Dashboard
                <ExternalLink className="w-3 h-3 ml-1.5" />
              </a>
            </Button>
          </div>
          <div className="relative">
            <iframe
              src="https://analytics-wave-warz.vercel.app/"
              title="WaveWarZ Analytics"
              className="w-full h-[350px]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
