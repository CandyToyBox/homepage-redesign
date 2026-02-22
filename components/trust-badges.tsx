'use client'

export function TrustBadges() {
  return (
    <section className="py-8 bg-card/50 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <div className="text-2xl">✓</div>
            <p className="text-sm font-medium text-foreground">Built on Solana Mainnet</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">✓</div>
            <p className="text-sm font-medium text-foreground">50% Back Protection</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">✓</div>
            <p className="text-sm font-medium text-foreground">Instant Payouts</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">✓</div>
            <p className="text-sm font-medium text-foreground">1.5% Fee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
