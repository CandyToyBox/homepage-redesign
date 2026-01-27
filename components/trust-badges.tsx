'use client'

const badges = [
  {
    title: "Built on Solana Mainnet",
    description: "Every transaction is verified onchain. Transparent and permanent."
  },
  {
    title: "50% Downside Protection",
    description: "Losing side retains 50% of their trading pool. Limited risk on every battle."
  },
  {
    title: "Instant SOL Payouts",
    description: "No waiting. Musicians and traders get paid instantly when battles settle."
  },
  {
    title: "Artists Earn 1% Per Trade",
    description: "Paid per trade, not per play. 1% to artist, 0.5% to platform. That's it."
  },
]

export function TrustBadges() {
  return (
    <section className="py-10 bg-card/50 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="text-center space-y-2 p-4">
              <div className="text-2xl text-primary">✓</div>
              <p className="text-sm font-semibold text-foreground">{badge.title}</p>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
