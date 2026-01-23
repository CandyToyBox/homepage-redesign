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
    <section className="py-20 px-4 bg-background" aria-label="Platform statistics">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Live Battle Statistics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every battle is transparent. Watch trading volume, artist earnings, trader performance, and pool distributions in real-time. All data is traceable on Solana.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-card border border-border">
              <div className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Statz App Embed - Made larger and more prominent */}
        <div className="rounded-2xl border-2 border-border bg-card overflow-hidden shadow-xl shadow-primary/5">
          <div className="flex items-center justify-between p-6 border-b border-border bg-card/80">
            <div>
              <h3 className="text-xl font-bold text-foreground">Live Battle Data</h3>
              <p className="text-sm text-muted-foreground">Real-time stats for every battle. See who's trading, volume generated, and artist earnings per second.</p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
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
              title="WaveWarZ Analytics - Live Battle Data"
              className="w-full h-[500px]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
