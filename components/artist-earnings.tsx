import { DollarSign, TrendingUp, Headphones, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const earnings = [
  {
    icon: DollarSign,
    stat: "1%",
    label: "Every Trade",
    description: "You earn 1% of every trade on your side.",
  },
  {
    icon: TrendingUp,
    stat: "Bonus",
    label: "Loser Pool",
    description: "Winners get a cut of the losing side's pot.",
  },
  {
    icon: Headphones,
    stat: "120K+",
    label: "Streams Paid",
    description: "We've paid artists 120K+ Spotify stream equivalent.",
  },
  {
    icon: Zap,
    stat: "Instant",
    label: "Payouts",
    description: "Money hits your wallet when battles end.",
  },
]

export function ArtistEarnings() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent" aria-labelledby="artist-earnings">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Artists</span>
          </div>
          <h2 id="artist-earnings" className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Artists Get <span className="text-primary">Paid</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Unlike streaming (fractions of a cent), WaveWarZ gives artists real money from fan engagement.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {earnings.map((item) => (
            <article
              key={item.label}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="inline-flex p-2 rounded-lg bg-primary/10 mb-3">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="text-2xl font-black text-foreground">{item.stat}</div>
              <div className="text-xs font-semibold text-primary mb-1">{item.label}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/artists/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply as Artist</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
