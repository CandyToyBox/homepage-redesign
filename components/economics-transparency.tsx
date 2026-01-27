'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EconomicsTransparency() {
  return (
    <section className="py-20 md:py-24 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Clear Rules. Fair Split. No Hidden Fees.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fee Breakdown */}
          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Total Platform Fee: 1.5%</h3>
            <div className="space-y-4 mb-8">
              <p className="text-foreground font-semibold mb-4">Every $100 Traded:</p>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="text-foreground">Winning Artist</span>
                  <span className="text-primary font-semibold">$1.00</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-border">
                  <span className="text-foreground">Platform Operations</span>
                  <span className="text-muted-foreground">$0.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Traders (prize pool)</span>
                  <span className="text-primary font-semibold">$98.50</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">All payouts in SOL (no token conversions)</p>
          </div>

          {/* Comparison Table */}
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/10">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground text-xs">Platform</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground text-xs">Fee</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground text-xs">Token</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground text-xs">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 font-semibold text-primary">WaveWarz</td>
                    <td className="px-4 py-3 text-center text-primary font-semibold">1.5%</td>
                    <td className="px-4 py-3 text-center text-primary font-semibold">SOL</td>
                    <td className="px-4 py-3 text-center text-primary font-semibold">50% back</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-foreground">pump.fun</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">1%</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">Token</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">100%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-foreground">Polymarket</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">0-2%</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">USDC</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">100%</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-foreground">Spotify</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">30%</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">Fiat</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Settlement Flow */}
        <div className="bg-background border border-border rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">How Payouts Work</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <p className="font-semibold text-foreground">Battle Ends</p>
              </div>
            </div>
            <div className="ml-4 h-6 border-l-2 border-primary/20" />
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <p className="font-semibold text-foreground">Smart Contract Calculates:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Winning Side: stake + (50% of losing side)</li>
                  <li>• Losing Side: 50% of stake back</li>
                  <li>• Artist: 1% of total volume</li>
                </ul>
              </div>
            </div>
            <div className="ml-4 h-6 border-l-2 border-primary/20" />
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <p className="font-semibold text-foreground">All Payouts Instant, onchain, in SOL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://solscan.io/address/9TUfEHvk5fN5vogtQyrefgNqzKy2Bqb4nWVhSFUg2fYo?cluster=mainnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary text-primary-foreground font-bold px-8">
              Verify Program on Solscan →
            </Button>
          </a>
          <a
            href="https://orbmarkets.io/address/9TUfEHvk5fN5vogtQyrefgNqzKy2Bqb4nWVhSFUg2fYo/history"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            View Historical Data (Orb Markets)
          </a>
        </div>
      </div>
    </section>
  )
}
