'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const battleTypes = [
  {
    badge: "🏆 CHAMPIONSHIP BATTLES",
    tagline: "Elite Battles. Professional Production. Real Stakes.",
    when: "Scheduled Main Events | Professional Livestreams",
    format: [
      "Three rounds, six songs per artist",
      "Judges panel + live charts + community voting",
      "Professional production & livestream",
      "WaveWarz handles promotion",
    ],
    earnings: ["Artists: $200-400 per battle average", "Traders: $600-1,600 average pools", "50% back guarantee on losses"],
    vibe: "The main event. Live-streamed. Judges picked. Artists signed up in advance. Think NBA Finals.",
    stats: "98 battles completed | $40K+ volume | $450+ to artists",
    primaryCta: "Watch Main Events",
    secondaryCta: "Apply as Artist",
    image: "/main-event.png",
  },
  {
    badge: "⚡ AUTOMATED BATTLES",
    tagline: "Constant Opportunities. Passive Earnings. Zero Gatekeeping.",
    when: "Every few minutes | Live sessions M-F 8:30 PM EST",
    format: [
      "Song vs song from Audius catalog",
      "Any artist can add their music",
      "Any trader can launch a battle",
      "No permission required",
    ],
    earnings: ["Artists: $10-50 per battle average", "Traders: $3-15 average pools", "Your music battles 24/7 automatically"],
    vibe: "Fast. Constant. Automated. Pure market. Like sports betting—always a game on.",
    stats: "337+ Quick Battles | $80K+ volume | 240+ artists",
    primaryCta: "Explore Quick BattleZ",
    secondaryCta: "Add Your Music",
    image: "/quick-battlez.png",
  },
  {
    badge: "🎤 DIY BATTLES",
    tagline: "You Host. You Promote. You Earn.",
    when: "Anytime | Any duration | Your community",
    format: [
      "You pick duration, format, and music",
      "You promote to your community",
      "Your community trades on your battle",
      "100% of fees and bonuses to you",
    ],
    earnings: ["Artists: 1% trading fees + settlement bonus", "Traders: Variable pools $100-2,000+", "Full creative control"],
    vibe: "DIY. For everyone. Run it your way. Community-driven discovery.",
    stats: "1000+ community battles | User-hosted tournaments",
    primaryCta: "Browse Community Battles",
    secondaryCta: "Host Your Battle",
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
