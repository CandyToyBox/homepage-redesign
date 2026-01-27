import { Music, Vote, Trophy, DollarSign } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Competition Breeds Quality",
    description: "The pressure of the stage pushes artists to perform better and create high-stakes hits.",
  },
  {
    icon: Vote,
    title: "Support Your Athletes",
    description: "Musicians are the athletes of the sonic world. Back them with SOL and share in their win.",
  },
  {
    icon: Trophy,
    title: "Reward Excellence",
    description: "Winning isn't just about the chart—it's about the payout. 1% of every trade goes straight to the artist.",
  },
  {
    icon: DollarSign,
    title: "Fans Get Skin in the Game",
    description: "Trade the outcome, manage your risk with 50% downside protection, and earn onchain.",
  },
]

export function WhatIsWaveWarz() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden" aria-labelledby="what-is-wavewarz">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="what-is-wavewarz" className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Beyond Streaming: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">True Music Competition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            WaveWarZ isn't just another platform. It's a digital arena where competition creates value.
            When artists battle, the music gets better, the fans get closer, and everyone gets paid fairly.
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
