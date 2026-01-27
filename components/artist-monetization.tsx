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
            Get Paid Like Athletes,
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Not Like Streamers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streaming pays fractions of a penny. WaveWarz pays you from trading volume. Here's the real math.
          </p>
        </div>

        {/* What $10 in Artist Earnings Actually Means */}
        <div className="mb-16 bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border bg-muted/30 text-center">
            <h3 className="text-xl font-bold text-foreground">What $10 in Artist Earnings Actually Means</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/10">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">How You Earned It</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Time to Earn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-black text-primary text-lg">WaveWarz</td>
                  <td className="px-6 py-4 font-medium text-foreground">
                    1 Quick Battle <br />
                    <span className="text-xs text-muted-foreground">($1,000 in trading volume)</span>
                  </td>
                  <td className="px-6 py-4 text-center text-primary font-bold">30 Minutes</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-bold text-foreground">Spotify</td>
                  <td className="px-6 py-4 text-muted-foreground">3,300 streams @ $0.003</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Weeks/Months</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-bold text-foreground">Apple Music</td>
                  <td className="px-6 py-4 text-muted-foreground">2,500 streams @ $0.004</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Weeks/Months</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-bold text-foreground">YouTube</td>
                  <td className="px-6 py-4 text-muted-foreground">10,000 views @ $0.001</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">Weeks/Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Quick BattleZ */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">⚡ Quick BattleZ Earnings</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="font-bold text-foreground mb-3">Real Battle Example:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Battle Volume:</span>
                    <span className="text-foreground">$190 (typical)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Your Side Trades:</span>
                    <span className="text-foreground">$95</span>
                  </li>
                  <li className="flex justify-between font-bold text-primary">
                    <span>Your Trading Fees:</span>
                    <span>$0.95 (1% of side)</span>
                  </li>
                </ul>

                <hr className="my-4 border-border" />

                <div className="space-y-2">
                  <p className="font-bold text-foreground">Battle Ends (Loser Pool $3 typical):</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">If You Win (+5% bonus):</span>
                    <span className="text-primary font-black">$1.10 Total</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">If You Lose (+2% bonus):</span>
                    <span className="text-primary font-black">$1.01 Total</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                💡 The more your fans trade, the more you earn. Higher volume = Higher fees, regardless of who wins.
              </p>
            </div>
          </div>

          {/* Main Events */}
          <div className="bg-card border border-primary/20 rounded-lg p-8 ring-1 ring-primary/10">
            <h3 className="text-2xl font-bold text-secondary mb-6">🏆 Main Event Earnings</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <p className="font-bold text-foreground mb-3">Real Battle Example:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">3-Round Event Volume:</span>
                    <span className="text-foreground">$1,200-$2,600</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Your Side Trades:</span>
                    <span className="text-foreground">$600-$1,300</span>
                  </li>
                  <li className="flex justify-between font-bold text-secondary">
                    <span>Your Trading Fees:</span>
                    <span>$6-$13 (1% of side)</span>
                  </li>
                </ul>

                <hr className="my-4 border-secondary/20" />

                <div className="space-y-2">
                  <p className="font-bold text-foreground">Battle Ends (Loser Pool $300-$600):</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">If You Win (+5% bonus):</span>
                    <span className="text-secondary font-black">$21-$43 Total</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">If You Lose (+2% bonus):</span>
                    <span className="text-secondary font-black">$12-$25 Total</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-secondary font-semibold italic">
                💡 One Main Event = 4,000-14,000 Spotify streams worth of value. In 60 minutes instead of months.
              </p>
            </div>
          </div>
        </div>

        {/* Why Volume Matters More Than Winning */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center text-balance">Why Volume Matters More Than Winning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h4 className="font-bold text-muted-foreground mb-4">🎯 Traditional Streaming</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2"><span>×</span> <span>You get paid per play</span></li>
                <li className="flex gap-2"><span>×</span> <span>$0.003 per stream</span></li>
                <li className="flex gap-2"><span>×</span> <span>Need millions to make rent</span></li>
                <li className="flex gap-2"><span>×</span> <span>Takes months to accumulate</span></li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h4 className="font-bold text-muted-foreground mb-4">💔 Traditional Battles</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2"><span>×</span> <span>Winner takes all</span></li>
                <li className="flex gap-2"><span>×</span> <span>Loser gets nothing</span></li>
                <li className="flex gap-2"><span>×</span> <span>All-or-nothing pressure</span></li>
                <li className="flex gap-2"><span>×</span> <span>Earnings tied to winning</span></li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-card border border-primary/50 relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black px-2 py-0.5 rounded-bl">RECOMMENDED</div>
              <h4 className="font-bold text-primary mb-4">✅ WaveWarz Model</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2"><span className="text-primary">✓</span> <span>Earn from trading fees</span></li>
                <li className="flex gap-2"><span className="text-primary">✓</span> <span>1% of your side's volume</span></li>
                <li className="flex gap-2"><span className="text-primary">✓</span> <span>More trading = more earnings</span></li>
                <li className="flex gap-2"><span className="text-primary">✓</span> <span>Win or lose, you get paid</span></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-xs font-bold text-primary">Settlement bonus is just extra: Winner +5%, Loser +2%</p>
              </div>
            </div>
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
