'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArtistCatalog() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            The Roster: Quick BattleZ Athletes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            20+ artists synced from Audius. All verified. Ready to battle 24/7.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 p-4 bg-card border border-border rounded-lg space-y-4">
          <div className="flex flex-wrap gap-2">
            {["All Genres", "Hip-Hop", "Electronic", "R&B", "Pop", "Rock"].map((genre, i) => (
              <Button
                key={i}
                variant={i === 0 ? "default" : "outline"}
                size="sm"
              >
                {genre}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-foreground font-semibold">Sort By:</span>
            <select className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground">
              <option>Win Rate</option>
              <option>Earnings</option>
              <option>Battles Fought</option>
            </select>
          </div>
        </div>

        {/* Artist Grid - PLACEHOLDER for actual artist data */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 space-y-4">
              {/* Artist Avatar Placeholder */}
              <div className="h-32 bg-secondary/10 rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                [PLACEHOLDER: 200x150 - Artist avatar]
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">Artist Name {i + 1}</h3>
                <p className="text-sm text-primary">Genre • Tags</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-secondary/10 rounded text-center">
                  <p className="text-muted-foreground text-xs">Win Rate</p>
                  <p className="font-bold text-foreground">60%</p>
                </div>
                <div className="p-2 bg-secondary/10 rounded text-center">
                  <p className="text-muted-foreground text-xs">Battles</p>
                  <p className="font-bold text-foreground">12</p>
                </div>
                <div className="p-2 bg-secondary/10 rounded text-center">
                  <p className="text-muted-foreground text-xs">Earnings</p>
                  <p className="font-bold text-foreground">$180</p>
                </div>
                <div className="p-2 bg-secondary/10 rounded text-center">
                  <p className="text-muted-foreground text-xs">Audius</p>
                  <p className="font-bold text-foreground">5.2K</p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap text-xs">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">✓ Verified</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">✓ SOL Wallet</span>
              </div>

              <Link href="#">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Challenge to Battle →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#">
            <Button size="lg">
              Apply to Join Catalog →
            </Button>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg">
              Launch Quick Battle →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
