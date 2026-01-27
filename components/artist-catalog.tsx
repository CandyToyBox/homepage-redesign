'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArtistCatalog() {
  const artists = [
    {
      name: "$PEPEWavez x Hurric4n3ike",
      handle: "@Hurric4n3ike",
      tracks: ["10. You are my protector (remastered)", "AI LUI - WEB3 BLESSED"],
    },
    {
      name: "$PSYOPWavez x Hurric4n3ike",
      handle: "@Hurric4n3ike",
      tracks: ["11. standing-tall", "AI LUI - RL4L"],
    },
    {
      name: "100 On The Dash",
      handle: "@Katz7yxt",
      tracks: ["1. My Lamb", "9. How To Love Yourself"],
    },
    {
      name: "Emotional Waves",
      handle: "@KateMurphy90",
      tracks: ["3. Emotional Waves", "5. still-belongs-to-you"],
    },
    {
      name: "Through-the-flames",
      handle: "@Stormbourne",
      tracks: ["6. Through-the-flames", "12 Days of Twitter Christmas"],
    },
    {
      name: "2AM",
      handle: "@Stormbourne",
      tracks: ["2AM", "741Hz"],
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#030305] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-[10px] font-black text-primary tracking-widest uppercase">The Roster</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight leading-tight">
            Quick BattleZ Musicians
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Search across tracks from Audius artists synced to WaveWarZ.
            All artists battle-ready with active on-chain catalogs.
          </p>
        </div>

        {/* Search Bar - Visual Polish */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative flex gap-2 p-2 bg-[#0A0B10] border border-white/5 rounded-2xl">
              <input
                type="text"
                placeholder="Search by track title or @artist handle..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-foreground px-4 py-2"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl transition-all active:scale-95">
                Search
              </Button>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Currently indexing <span className="text-primary font-bold">20+</span> Audius verified profiles
          </p>
        </div>

        {/* Artist Grid - Simplified to Match Screenshot */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {artists.map((artist, i) => (
            <div key={i} className="group bg-[#0A0B10] border border-white/5 rounded-2xl p-4 hover:border-primary/30 transition-all duration-300">
              <div className="flex gap-4 items-center">
                {/* Track/Artist Thumbnail Placeholder */}
                <div className="w-16 h-16 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-black uppercase text-center p-1 leading-tight">
                    {artist.name.slice(0, 3)}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-foreground truncate group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-bold text-primary mb-1">
                    {artist.handle}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-black opacity-50">
                    {artist.tracks[0].slice(0, 20)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://audius.co/signup" target="_blank">
            <Button size="lg" className="h-14 px-8 bg-white/5 hover:bg-white/10 text-foreground border border-white/10 font-black uppercase tracking-widest rounded-2xl transition-all">
              Connect Audius Profile
            </Button>
          </Link>
          <Link href="#jump-into-battle">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              Launch Quick Battle
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
