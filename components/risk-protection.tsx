'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RiskProtection() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden" id="risk-protection">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Trade with a Safety Net:<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50% Downside Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike pump.fun where you lose everything, or Polymarket where you wait months,
            WaveWarz battles resolve in minutes. Losing side retains 50% of their pool.
          </p>
        </div>

        {/* Comparison Table - PLACEHOLDER */}
        <div className="mb-12 bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/10">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">pump.fun</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Polymarket</th>
                  <th className="px-6 py-4 text-center font-semibold text-primary">WaveWarz</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Loss Risk</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">100% loss</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">100% loss</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">50% max loss</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Settlement</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Hope for buyers</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Weeks to months</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">Minutes</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Payout Token</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Volatile bags</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">USDC</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">SOL</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-foreground">Entertainment</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">None</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Boring news</td>
                  <td className="px-6 py-4 text-center text-primary font-semibold">Live battles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Math Box */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">How 50% Downside Protection Works</h3>
            <div className="space-y-4 text-foreground mb-6">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">You Stake:</span>
                <span className="font-semibold">1 SOL</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Your Pick:</span>
                <span className="font-semibold">Artist A</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Winner:</span>
                <span className="font-semibold">Artist B</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">You Retain:</span>
                <span className="font-semibold text-primary">0.5 SOL (50%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Loss:</span>
                <span className="font-semibold text-primary">50% of your stake</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              All payouts automatic. All on-chain. All SOL. Plus, Artist A earned 1% of all trading volume on their side, so they get paid even though they lost.
            </p>
          </div>

          {/* Benefits Grid - PLACEHOLDER for icons */}
          <div className="space-y-4">
            {[
              { title: "No Worthless Bags", desc: "All payouts in SOL, not volatile tokens", icon: "💼" },
              { title: "Instant Settlement", desc: "Battles end in 1-60 minutes, payouts automatic", icon: "⚡" },
              { title: "Transparent Math", desc: "On-chain smart contracts, view on Solana Explorer", icon: "🔍" },
              { title: "Entertainment Value", desc: "Watch live performances while you trade", icon: "🎭" },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="#">
            <Button variant="outline" size="lg">
              View Settlement Logic →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
