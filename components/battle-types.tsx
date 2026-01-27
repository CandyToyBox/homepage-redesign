'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

const battleTypes = [
  {
    badge: "🏆 MAIN BATTLES",
    tagline: "The Championship League",
    when: "Sundays 7 PM EST + Daily X Spaces M-F 11 AM & 8:30 PM EST",
    format: [
      "Live-streamed performances",
      "3 rounds × 20 mins = 60 mins total",
      "Judges + Charts + Fan voting",
      "Professional production",
    ],
    earnings: ["Artists: $200-400 per battle", "Traders: High stakes, entertainment value", "Sponsors: Featured placement"],
    vibe: "The main event. Live-streamed. Judges picked. Artists signed up in advance. Think NBA Finals.",
    stats: "98 battles completed | $40K+ volume | $450+ to artists",
    primaryCta: "View Schedule →",
    secondaryCta: "Sponsor a Battle →",
    image: "[PLACEHOLDER: 400x250 - Main battle showcase image]",
  },
  {
    badge: "⚡ QUICK BATTLEZ",
    tagline: "The Fast League",
    when: "Anytime, 24/7 | New battle every 30 mins (automated)",
    format: [
      "1 minute × 2 songs",
      "Winner decided by charts + volume",
      "Auto-selected from Audius catalog",
      "Pure market mechanics",
    ],
    earnings: ["Artists: $10-50 per battle", "Traders: Constant action, low stakes", "20+ artists in catalog"],
    vibe: "Fast. Constant. Automated. Pure market. Like sports betting—always a game on.",
    stats: "337+ Quick Battles | $80K+ volume | 240+ artists",
    primaryCta: "Browse Catalog →",
    secondaryCta: "Launch Quick Battle →",
    image: "[PLACEHOLDER: 400x250 - Quick battle interface mockup]",
  },
  {
    badge: "🎤 COMMUNITY BATTLES",
    tagline: "The User League",
    when: "Always live, any length | User-hosted tournaments | Custom rules",
    format: [
      "User-hosted, any duration",
      "Artists play their own music",
      "Traders vote with wallets",
      "Build your audience",
    ],
    earnings: ["Artists: $20-100 per battle", "Traders: Support your favorites", "Creators: Build your league"],
    vibe: "DIY. For everyone. Run it your way. Community-driven discovery.",
    stats: "1000+ community battles | User-hosted tournaments",
    primaryCta: "Launch Community Battle →",
    secondaryCta: null,
    image: "[PLACEHOLDER: 400x250 - Community battle showcase]",
  },
]

export function BattleTypes() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Three Leagues. Pick Your Game.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're here for high-stakes showdowns, quick trades, or community tournaments—choose your battle type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {battleTypes.map((battle, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              {/* Image Placeholder */}
              <div className="h-48 bg-secondary/10 border-b border-border flex items-center justify-center text-sm text-muted-foreground p-4 text-center">
                {battle.image}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                    {battle.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{battle.tagline}</h3>
                </div>

                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">When</p>
                  <p className="text-sm text-foreground">{battle.when}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Format</p>
                  <ul className="space-y-1">
                    {battle.format.map((item, j) => (
                      <li key={j} className="text-sm text-foreground flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Earnings</p>
                  <ul className="space-y-1">
                    {battle.earnings.map((item, j) => (
                      <li key={j} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-secondary/10 rounded-lg border border-border">
                  <p className="text-sm italic text-foreground">{battle.vibe}</p>
                </div>

                <div className="text-xs text-muted-foreground">{battle.stats}</div>

                <div className="flex gap-2 pt-4">
                  <Link href="#" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {battle.primaryCta}
                    </Button>
                  </Link>
                  {battle.secondaryCta && (
                    <Link href="#" className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full">
                        {battle.secondaryCta}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
