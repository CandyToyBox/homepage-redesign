import { Music, Vote, Trophy, DollarSign } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Music Battles",
    description: "Two artists go head-to-head. You pick the winner.",
  },
  {
    icon: Vote,
    title: "Back Your Pick",
    description: "Put money behind your artist. Start with as little as $1.",
  },
  {
    icon: Trophy,
    title: "Win If You're Right",
    description: "Your artist wins? You get a share of the prize pool.",
  },
  {
    icon: DollarSign,
    title: "Cash Out Anytime",
    description: "Sell your position before the battle ends. Never locked in.",
  },
]

export function WhatIsWaveWarz() {
  return (
    <section className="py-16 px-4" aria-labelledby="what-is-wavewarz">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="what-is-wavewarz" className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            What is <span className="text-primary">WaveWarZ</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A music battle game where fans compete. Pick a side, back your artist, win money.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
