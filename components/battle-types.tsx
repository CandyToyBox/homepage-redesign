'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const battleTypes = [
  {
    badge: "🏆 CHAMPIONSHIP BATTLES",
    title: "Main Event",
    tagline: "Elite Battles. Professional Production. Real Stakes.",
    when: "Scheduled Main Events | Professional Livestreams",
    format: [
      "Three rounds, six songs per artist",
      "Judges panel + live charts + community voting",
      "Professional production & livestream",
      "WaveWarz handles promotion",
    ],
    earnings: [
      "Artists: $200-400 per battle average",
      "Traders: $600-1,600 average pools",
      "50% back guarantee on losses",
    ],
    vibe: "The main event. Live-streamed. Judges picked. Artists signed up in advance. Think NBA Finals.",
    stats: "98 battles completed | $40K+ volume | $450+ to artists",
    primaryCta: "Watch Main Events",
    secondaryCta: "Apply as Artist",
    image: "/images/main-event-logo.png",
  },
  {
    badge: "⚡ AUTOMATED BATTLES",
    title: "Quick BattleZ",
    tagline: "Constant Opportunities. Passive Earnings. Zero Gatekeeping.",
    when: "Every few minutes | Live sessions M-F 8:30 PM EST",
    format: [
      "Song vs song from Audius catalog",
      "Any artist can add their music",
      "Any trader can launch a battle",
      "No permission required",
    ],
    earnings: [
      "Artists: $10-50 per battle average",
      "Traders: $3-15 average pools",
      "Your music battles 24/7 automatically",
    ],
    vibe: "Fast. Constant. Automated. Pure market. Like sports betting—always a game on.",
    stats: "337+ Quick Battles | $80K+ volume | 240+ artists",
    primaryCta: "Explore Quick BattleZ",
    secondaryCta: "Add Your Music",
    image: "/images/quick-battlez-logo.png",
  },
  {
    badge: "🎤 DIY BATTLES",
    title: "Community BattleZ",
    tagline: "You Host. You Promote. You Earn.",
    when: "Anytime | Any duration | Your community",
    format: [
      "You pick duration, format, and music",
      "You promote to your community",
      "Your community trades on your battle",
      "100% of fees and bonuses to you",
    ],
    earnings: [
      "Artists: 1% trading fees + settlement bonus",
      "Traders: Variable pools $100-2,000+",
      "Full creative control",
    ],
    vibe: "DIY. For everyone. Run it your way. Community-driven discovery.",
    stats: "1000+ community battles | User-hosted tournaments",
    primaryCta: "Browse Community Battles",
    secondaryCta: "Host Your Battle",
    image: "/images/community-battlez-logo.png",
  },
]

export function BattleTypes() {
  return (
    <section className="py-20 md:py-24 bg-[#030305] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 uppercase tracking-tight">
            Three Ways to Battle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're here for high-stakes showdowns, quick trades, or community
            tournaments—choose your battle type.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {battleTypes.map((battle, i) => (
            <div key={i} className="flex flex-col bg-[#0A0B10] border border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all duration-500 group">
              {/* Battle Header Image Area */}
              <div className="h-64 flex items-center justify-center p-12 bg-gradient-to-b from-white/5 to-transparent relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Image
                  src={battle.image}
                  alt={battle.title}
                  width={300}
                  height={150}
                  className="object-contain relative z-10 transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-4">
                    {battle.badge}
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                    {battle.tagline}
                  </h3>
                </div>

                <div className="space-y-6 mb-8 flex-grow">
                  <div>
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">When</h4>
                    <p className="text-sm font-bold text-foreground">{battle.when}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Format</h4>
                    <ul className="space-y-2">
                      {battle.format.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Earnings</h4>
                    <ul className="space-y-2">
                      {battle.earnings.map((item, j) => (
                        <li key={j} className="text-sm text-foreground font-semibold leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      {battle.vibe}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="text-[10px] font-bold text-muted-foreground mb-6 uppercase tracking-widest opacity-60">
                    {battle.stats}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-10 text-xs font-black uppercase tracking-widest border-white/10 bg-white/5 hover:bg-white/10">
                      {battle.primaryCta}
                    </Button>
                    <Button variant="ghost" className="h-10 text-xs font-black uppercase tracking-widest hover:text-primary">
                      {battle.secondaryCta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
