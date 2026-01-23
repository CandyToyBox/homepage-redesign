'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContentCommunity() {
  return (
    <section className="py-20 md:py-24 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            More Than Battles: A Whole Ecosystem
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: "🎥",
              title: "Video Content",
              subtitle: "WaveWarz Studios",
              items: [
                "Battle trailers & recaps",
                "Artist interviews",
                "Pre-battle face-offs",
                "Post-battle reactions",
                "Producer tournaments",
                "Fan highlights",
              ],
              stats: "100+ videos | 50K+ views",
              cta: "Watch on YouTube →",
            },
            {
              icon: "🎨",
              title: "Fan Art & Graphics",
              subtitle: "Community Creations",
              items: [
                "Battle posters",
                "Trading card designs",
                "Jersey mockups",
                "Meme culture",
                "Artist spotlights",
              ],
              stats: "[PLACEHOLDER: Featured designs images]",
              cta: "Submit Fan Art →",
            },
            {
              icon: "🏅",
              title: "Merchandise & Collectibles",
              subtitle: "WaveWarz Gear",
              items: [
                "Sports jerseys",
                "Trading cards",
                "Battle posters",
                "Limited edition drops",
              ],
              stats: "Physical merch shop coming soon",
              cta: "View Designs →",
            },
            {
              icon: "🎮",
              title: "Tournaments & Events",
              subtitle: "Compete for Glory",
              items: [
                "Producer Tournament 2025",
                "Seasonal championships",
                "Genre-specific leagues",
                "Charity showcases",
              ],
              stats: "[PLACEHOLDER: Tournament schedule graphic]",
              cta: "View Tournament Schedule →",
            },
          ].map((card, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div className="text-4xl">{card.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">{card.subtitle}</p>
              </div>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="text-sm text-foreground flex gap-2">
                    <span className="flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">{card.stats}</p>
              <Link href="#">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  {card.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Community Hub */}
        <div className="bg-background border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Join the Movement</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Join Discord", icon: "💬" },
              { label: "Follow on X", icon: "𝕏" },
              { label: "Subscribe on YouTube", icon: "▶️" },
              { label: "Follow on IG", icon: "📸" },
            ].map((platform, i) => (
              <Link key={i} href="#">
                <Button variant="outline">
                  {platform.icon} {platform.label} →
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
