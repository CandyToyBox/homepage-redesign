'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArtistMonetization() {
  return (
    <section className="py-24 bg-[#030305] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 uppercase tracking-tight">
            Musicians Finally <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Paid</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            WaveWarz fundamentally changes how musicians earn from their work. Not per-stream. Not per-play. Per-trade. Instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Spotify Economics */}
          <div className="bg-[#0A0B10] border border-white/5 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-black text-foreground mb-10">Spotify Economics</h3>
            <div className="space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-muted-foreground font-bold">10,000 streams</span>
                <span className="text-foreground font-black text-xl">= $30-50</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-muted-foreground font-bold">100,000 streams</span>
                <span className="text-foreground font-black text-xl">= $300-500</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-muted-foreground font-bold">1,000,000 streams</span>
                <span className="text-foreground font-black text-xl">= $3,000-5,000</span>
              </div>
            </div>
            <div className="mt-12 space-y-2">
              <p className="text-sm text-muted-foreground">You get: <span className="text-foreground font-bold">$0.003-0.005 per stream</span></p>
              <p className="text-sm text-muted-foreground">Time to earn: <span className="text-foreground font-bold">Months to years</span></p>
            </div>
          </div>

          {/* WaveWarZ Economics */}
          <div className="bg-[#0A0B10] border border-primary/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-black text-primary mb-10">WaveWarZ Economics</h3>
            <ol className="space-y-4 mb-12">
              {[
                "Artist enters battle (free to apply)",
                "Fans stake SOL on their favorite",
                "Trading volume accumulates during battle",
                "Winner gets 1% of total volume in SOL",
                "Instant payout when battle ends",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-foreground font-bold">
                  <span className="text-primary">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-primary font-black text-sm uppercase tracking-widest mb-4">Real Example:</p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground font-bold">Battle: Artist A vs Artist B</p>
                <p className="text-muted-foreground font-bold">Total Volume: $10,000 SOL traded</p>
                <p className="text-foreground font-black text-lg">Winner (Artist A) receives: <span className="text-primary">$100 SOL</span></p>
                <div className="pt-4 mt-4 border-t border-primary/10 space-y-1">
                  <p className="text-primary font-bold">= 33,000 Spotify streams worth of value</p>
                  <p className="text-primary font-bold">= Earned in 30 minutes, not 3 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-[#0A0B10] border border-white/5 rounded-3xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-8 py-6 text-left text-xs font-black text-muted-foreground uppercase tracking-widest">Metric</th>
                  <th className="px-8 py-6 text-left text-xs font-black text-muted-foreground uppercase tracking-widest">Spotify</th>
                  <th className="px-8 py-6 text-left text-xs font-black text-primary uppercase tracking-widest">WaveWarz Main</th>
                  <th className="px-8 py-6 text-left text-xs font-black text-secondary uppercase tracking-widest">WaveWarz Quick</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Per Play", spotify: "$0.003", main: "N/A", quick: "N/A" },
                  { metric: "Per Battle", spotify: "N/A", main: "$150-400", quick: "$20-60" },
                  { metric: "Payout Time", spotify: "30-90 days", main: "Instant", quick: "Instant" },
                  { metric: "Your Cut", spotify: "70%", main: "100% (1% vol)", quick: "100% (1% vol)" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-8 py-6 text-sm font-bold text-foreground">{row.metric}</td>
                    <td className="px-8 py-6 text-sm font-bold text-muted-foreground">{row.spotify}</td>
                    <td className="px-8 py-6 text-sm font-black text-primary">{row.main}</td>
                    <td className="px-8 py-6 text-sm font-black text-secondary">{row.quick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefit Tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { title: "Volume-Driven Revenue", desc: "More fans = more trades = more earnings" },
            { title: "Instant SOL Payouts", desc: "No 30-day wait, no label cut" },
            { title: "Build Your Fanbase", desc: "Fans invest in you, literally" },
            { title: "Keep Your Rights", desc: "You own everything, we just host" },
          ].map((benefit, i) => (
            <div key={i} className="bg-[#0A0B10] border border-white/5 p-6 rounded-2xl">
              <h4 className="font-black text-foreground text-sm uppercase tracking-tight mb-2">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/artists/signup">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-black px-10 h-14 rounded-2xl shadow-[0_0_30px_rgba(94,234,128,0.2)]">
              Apply as Artist →
            </Button>
          </Link>
          <Link href="/audius/search">
            <Button size="lg" variant="outline" className="border-white/10 bg-white/5 text-foreground hover:bg-white/10 font-black px-10 h-14 rounded-2xl">
              View Artist Catalog →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
