'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArtistMonetization() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Musicians Finally
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Paid</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WaveWarz fundamentally changes how musicians earn from their work. Not per-stream. Not per-play. Per-trade. Instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Spotify Economics */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Spotify Economics</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between pb-3 border-b border-border">
                <span className="text-foreground">10,000 streams</span>
                <span className="text-muted-foreground">= $30-50</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-border">
                <span className="text-foreground">100,000 streams</span>
                <span className="text-muted-foreground">= $300-500</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-border">
                <span className="text-foreground">1,000,000 streams</span>
                <span className="text-muted-foreground">= $3,000-5,000</span>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">You get:</span> $0.003-0.005 per stream
                </p>
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Time to earn:</span> Months to years
                </p>
              </div>
            </div>
          </div>

          {/* WaveWarz Economics */}
          <div className="bg-card border border-primary/20 rounded-lg p-8 ring-1 ring-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-6">WaveWarz Economics</h3>
            <div className="space-y-4 mb-8">
              <ol className="space-y-3 text-foreground">
                <li>
                  <span className="font-semibold">1.</span> Artist enters battle (free to apply)
                </li>
                <li>
                  <span className="font-semibold">2.</span> Fans stake SOL on their favorite
                </li>
                <li>
                  <span className="font-semibold">3.</span> Trading volume accumulates during battle
                </li>
                <li>
                  <span className="font-semibold">4.</span> Winner gets 1% of total volume in SOL
                </li>
                <li>
                  <span className="font-semibold">5.</span> Instant payout when battle ends
                </li>
              </ol>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary mb-3">Real Example:</p>
              <p className="text-sm text-foreground mb-2">Battle: Artist A vs Artist B</p>
              <p className="text-sm text-foreground mb-2">Total Volume: $10,000 SOL traded</p>
              <p className="text-sm text-foreground mb-2">Winner (Artist A) receives: <span className="text-primary font-semibold">$100 SOL</span></p>
              <p className="text-sm text-primary font-semibold mt-4">= 33,000 Spotify streams worth of value</p>
              <p className="text-sm text-primary font-semibold">= Earned in 30 minutes, not 3 months</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12 bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/10">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Metric</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Spotify</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">WaveWarz Main</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">WaveWarz Quick</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Per Play</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">$0.003</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">N/A</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">N/A</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Per Battle</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">N/A</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">$150-400</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">$20-60</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Payout Time</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">30-90 days</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">Instant</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">Instant</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Your Cut</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">70%</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">100% (1% vol)</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">100% (1% vol)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Volume-Driven Revenue", desc: "More fans = more trades = more earnings" },
            { title: "Instant SOL Payouts", desc: "No 30-day wait, no label cut" },
            { title: "Build Your Fanbase", desc: "Fans invest in you, literally" },
            { title: "Keep Your Rights", desc: "You own everything, we just host" },
          ].map((benefit, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border">
              <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#">
            <Button size="lg">
              Apply as Artist →
            </Button>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg">
              View Artist Catalog →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
