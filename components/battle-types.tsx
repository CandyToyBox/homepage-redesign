'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const battleTypes = [
  {
    badge: "🏆 MAIN BATTLES",
    tagline: "The Championship League",
    when: "Sundays 7 PM EST",
    format: [
      "Live-streamed performances",
      "3 rounds × 20 mins = 60 mins total",
      "Professional judges + fan voting",
      "High-stakes prize pools",
      "Curated artist lineups",
    ],
    earnings: [
      "Artists: 1% trading volume on your side ($12-$26 typically)",
      "Winner bonus: 5% of losing pool",
      "Loser bonus: 2% of losing pool",
    ],
    vibe: "The main event. Three rounds. Professional production. Real prize money. Think NBA Finals—but for musicians.",
    stats: "Event volume: $1,200-$2,600 typically",
    primaryCta: "Apply as Artist",
    secondaryCta: "View Schedule",
    image: "/main-event.png",
  },
  {
    badge: "⚡ QUICK BATTLEZ",
    tagline: "The Fast League",
    when: "24/7 Automated | Nightly 8:30 PM EST Live Space",
    format: [
      "30-minute automated battles",
      "Auto-selected from Audius catalog",
      "Algorithm + market decides winner",
      "Constant action, lower stakes",
      "Join our nightly space to trade live",
    ],
    earnings: [
      "Artists: 1% trading volume ($2-$10 typically)",
      "Winner bonus: 5% of losing pool",
      "Loser bonus: 2% of losing pool",
    ],
    vibe: "Fast. Automated. Always on. Discovery boost: Your track gets featured in our nightly trading spaces.",
    stats: "92+ battles | $190-$950 typical volume",
    primaryCta: "Sync Your Audius Music",
    secondaryCta: "Browse Artist Catalog",
    image: "/quick-battlez.png",
  },
  {
    badge: "🎤 COMMUNITY BATTLES",
    tagline: "The User League",
    when: "Always live | User-hosted | Custom rules",
    format: [
      "Host your own tournament",
      "Set your own duration",
      "Invite specific artists",
      "Build your own league",
    ],
    earnings: [
      "Artists: 1% trading fees on your side",
      "Same settlement bonuses as other battles",
      "Perfect for testing new music",
    ],
    vibe: "DIY. Your rules. Your artists. Community-driven discovery and fan building.",
    stats: "User-hosted | Variable prize pools",
    primaryCta: "Launch Community Battle",
    secondaryCta: "",
    image: "/community-battlez.png",
  },
]

export function BattleTypes() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Three Ways to Battle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're here for high-stakes showdowns, quick trades, or community tournaments—choose your battle type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {battleTypes.map((battle, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              {/* Battle Image */}
              <div className="h-48 bg-secondary/10 border-b border-border relative overflow-hidden">
                <Image
                  src={battle.image}
                  alt={battle.tagline}
                  fill
                  className="object-contain"
                  priority={i === 0}
                />
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
