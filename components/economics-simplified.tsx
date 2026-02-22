import { Zap, Users, TrendingUp } from "lucide-react"

export function EconomicsSimplified() {
  return (
    <section className="w-full py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How the Money Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent economics. Everyone gets paid. No hidden fees.
          </p>
        </div>

        {/* Fee Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Total Platform Fees</h3>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">1.5%</div>
              <p className="text-muted-foreground text-sm">Of all trading volume goes to platform operations</p>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Artist Earnings</span>
                  <span className="font-semibold text-foreground">1.0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform & Operations</span>
                  <span className="font-semibold text-foreground">0.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Trader Economics</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground">Win a Battle</span>
                    <span className="text-primary font-bold">+45-65%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Your share from winner's pool</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground">Lose a Battle</span>
                    <span className="text-primary font-bold">50% Back</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Guaranteed refund on losses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settlement Distribution */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Settlement Distribution (Winner's Pool)</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">After battle concludes, payout breakdown</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Winner Traders", pct: "50%", desc: "Split winning pool" },
              { label: "Winning Artist", pct: "30%", desc: "1% + settlement share" },
              { label: "Loser Refund", pct: "10%", desc: "50% back guarantee" },
              { label: "Loser Artist", pct: "5%", desc: "Consolation share" },
              { label: "Platform", pct: "5%", desc: "Operations & dev" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-primary mb-1">{item.pct}</div>
                <div className="text-xs font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
