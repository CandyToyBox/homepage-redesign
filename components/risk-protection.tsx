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
            Three Layers of Protection.<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Zero Rug Pulls.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike other platforms where you lose everything, WaveWarz battles resolve in minutes with mandatory protection.
            Losing side retains 50% of their pool.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Protection Card 1 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-xl font-bold text-foreground mb-4">50% Downside Protection</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Lose a battle? Get 50% of your stake back automatically. No bag-holding worthless tokens. Real SOL returned instantly.
            </p>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-xs">
              <p className="font-bold text-primary mb-2">Example:</p>
              <p className="text-foreground">Stake: 1 SOL</p>
              <p className="text-foreground">Your side loses</p>
              <p className="text-primary font-bold mt-2">You receive: 0.5 SOL back</p>
            </div>
          </div>

          {/* Protection Card 2 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-xl font-bold text-foreground mb-4">Smart Contract Settlement</h3>
            <p className="text-sm text-muted-foreground mb-6">
              All payouts handled by Solana smart contract. No human intervention possible. Fully automated, instant, and auditable onchain.
            </p>
            <Link href="#">
              <Button variant="outline" size="sm" className="w-full">
                View Contract on Solana Explorer →
              </Button>
            </Link>
          </div>

          {/* Protection Card 3 */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-6">💎</div>
            <h3 className="text-xl font-bold text-foreground mb-4">SOL Payouts Only</h3>
            <p className="text-sm text-muted-foreground mb-6">
              No volatile battle tokens to dump. Get paid in SOL (real money). No liquidity issues, no "exit tax", and no delays.
            </p>
            <div className="p-4 bg-muted/30 rounded-lg border border-border text-xs">
              <p className="font-bold text-foreground mb-1">Withdraw Instantly</p>
              <p className="text-muted-foreground">All earnings are real-time and liquid immediately after battle settlement.</p>
            </div>
          </div>
        </div>

        {/* Fee Structure Section */}
        <div className="mt-24 p-8 md:p-12 bg-card border border-border rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] font-black tracking-widest text-primary/40 uppercase">Economic Transparency</span>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-foreground mb-4">Fair Split. No Hidden Fees.</h3>
            <p className="text-muted-foreground">Total platform fee: 1.5% of trading volume. Here's exactly where it goes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Every $100 Traded on WaveWarz:</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">$1.00</div>
                  <div>
                    <p className="font-bold text-foreground">Artist on that side (1%)</p>
                    <p className="text-xs text-muted-foreground">Paid per trade, not per play.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">$0.50</div>
                  <div>
                    <p className="font-bold text-foreground">Platform operations (0.5%)</p>
                    <p className="text-xs text-muted-foreground">Maintains 24/7 automated engines.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center font-bold text-muted-foreground">$98.50</div>
                  <div>
                    <p className="font-bold text-foreground">Prize pools</p>
                    <p className="text-xs text-muted-foreground">Traders compete for this based on battle outcome.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl">
              <h4 className="font-bold text-foreground mb-4">At battle end, loser's pool is split:</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Returned to losing traders (protection)</span>
                  <span className="font-bold text-primary">50%</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Winning traders (prize money)</span>
                  <span className="font-bold text-foreground">40%</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Winning artist (bonus)</span>
                  <span className="font-bold text-foreground">5%</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Losing artist (bonus)</span>
                  <span className="font-bold text-foreground">2%</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform (bonus)</span>
                  <span className="font-bold text-foreground">3%</span>
                </li>
              </ul>
            </div>
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
