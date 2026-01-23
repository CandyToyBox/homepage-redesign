'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Real Athletes. Real Competition. Real Payouts.
          </h2>
        </div>

        {/* Aggregated Data */}
        <p className="text-center text-muted-foreground mb-8">
          From 92 Quick BattleZ: 847 traders participated. $38,500 traded. Artists earned instant SOL. Traders earned or got 50% back. Zero delays. Zero rugpulls.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {[
            { number: "$40,283", label: "Total Volume" },
            { number: "$450", label: "Paid to Artists" },
            { number: "98", label: "Main Battles" },
            { number: "337", label: "All Battles" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-lg bg-background border border-border">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.number}</div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "DJ Nova",
              role: "Hip-Hop Producer, Miami",
              quote:
                '"I made $200 in one night on WaveWarz. That\'s more than 6 months of Spotify royalties for my entire catalog. The crowd was live, the energy was insane, and I got paid instantly in SOL."',
              badge: "3 battles • $200 earned • 2 wins = 66,000 Spotify streams",
              cta: "Apply as Artist →",
            },
            {
              name: "Marcus Chen",
              role: "Solana Trader, Austin",
              quote:
                '"After getting rugged on pump.fun for the hundredth time, the 50% back protection actually lets me trade for entertainment without the constant fear. Plus the battles are legitimately fun to watch live."',
              badge: "15 battles traded • 60% win rate • Net positive in SOL",
              cta: "Watch a Battle →",
            },
            {
              name: "Luna Beats",
              role: "Electronic Producer, London",
              quote:
                '"Quick Battles on WaveWarz pay me instantly in SOL. I\'ve earned $180 in 30-minute battles—that\'s 60,000 Spotify streams worth of value. No label. No middleman. Just music and money."',
              badge: "8 Quick Battles • $180 earned • 5 wins",
              cta: "Browse Artist Catalog →",
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <p className="text-sm italic text-foreground">{testimonial.quote}</p>
              <div className="p-3 bg-primary/10 rounded border border-primary/20">
                <p className="text-xs font-semibold text-primary">{testimonial.badge}</p>
              </div>
              <Link href="#">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  {testimonial.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-background border border-border rounded-lg">
          <h3 className="font-bold text-foreground mb-4">Live Leaderboard: Top Artists & Traders</h3>
          <Link href="#">
            <Button variant="outline">
              View Full Statz Dashboard →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
