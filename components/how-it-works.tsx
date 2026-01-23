import { Download, Search, Heart, CreditCard, Gift } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: 1,
    title: "Get a Wallet",
    description: "Download Phantom (free). Like Apple Pay for crypto.",
  },
  {
    icon: CreditCard,
    step: 2,
    title: "Add Funds",
    description: "Buy SOL with debit card. Start with as little as $5.",
  },
  {
    icon: Search,
    step: 3,
    title: "Find a Battle",
    description: "Browse Quick BattleZ, Main Events, or Community Battles.",
  },
  {
    icon: Heart,
    step: 4,
    title: "Pick Your Side",
    description: "Stake SOL on your artist. 50% back if you lose.",
  },
  {
    icon: Gift,
    step: 5,
    title: "Collect Winnings",
    description: "SOL hits your wallet instantly. Withdraw anytime.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 px-4 bg-card/50 border-y border-border"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Get Started in <span className="text-secondary">5 Minutes</span>
          </h2>
          <p className="text-muted-foreground">Never used crypto? No problem.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="relative w-14 h-14 rounded-full bg-card border-2 border-secondary flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
