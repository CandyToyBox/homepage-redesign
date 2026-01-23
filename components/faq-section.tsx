"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const musicianFaqs = [
  {
    question: "How much can I earn?",
    answer:
      "It depends on how many people trade on your music. Quick BattleZ averages $10-50 per battle. Main Events average $200-400. More promotion = More battles = More earnings. There's no limit to how many times your music can battle.",
  },
  {
    question: "How do I add my music?",
    answer:
      "Upload your music to Audius (free). Come to WaveWarz, connect your Solana wallet, click 'Join Catalog,' log in with your Audius profile, and authorize the sync. Your music will then be available for Quick BattleZ battles immediately.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Instantly. 1% of every trade on your music hits your Solana wallet in real-time. When the battle ends, any settlement bonuses are paid immediately. No waiting. No delays.",
  },
  {
    question: "What if I lose?",
    answer:
      "You still earn. Losing artists get 1% of all trades on their side + 2% from the loser's pool. You don't earn as much as winning, but you still get paid.",
  },
  {
    question: "Do I have to promote my music?",
    answer:
      "Promotion helps. More people know about your battle = More traders come = More volume = More earnings. WaveWarz does promotion on our channels, but your effort multiplies the effect.",
  },
]

const traderFaqs = [
  {
    question: "What's the risk?",
    answer:
      "Maximum loss per battle is 50%. You always get 50% back if you lose. No total wipeouts.",
  },
  {
    question: "When can I trade?",
    answer:
      "Anytime a battle is live. New Quick BattleZ launches every few minutes. Main Events are scheduled. Community Battles are hosted by creators. There's always something to trade.",
  },
  {
    question: "How do I know the results are fair?",
    answer:
      "Main Events use triple judging: Charts (TVL), Judges panel, and Community poll. Quick BattleZ use Charts (TVL). Community Battles use Charts + Community voting. All data is traceable on Solana. Check Statz for real-time battle data.",
  },
  {
    question: "Is this gambling?",
    answer:
      "It's speculation with real stakes and real protections. You're betting on real music, real artists, real community engagement. The 50% back guarantee means it's not pure gambling. And your stake directly pays the artist you're backing.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "After the battle ends, yes. SOL settles instantly. You can then withdraw to your personal wallet or re-stake in the next battle.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("musician-0")

  const handleToggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <section id="faq" className="py-24 px-4 bg-card/50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Common <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything musicians and traders need to know.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Musicians FAQ */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">For Musicians</h3>
            <dl className="space-y-4">
              {musicianFaqs.map((faq, index) => {
                const id = `musician-${index}`
                return (
                  <div key={id} className="border border-border rounded-lg overflow-hidden bg-background">
                    <dt>
                      <button
                        onClick={() => handleToggle(id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
                        aria-expanded={openIndex === id}
                        aria-controls={`faq-answer-${id}`}
                      >
                        <span className="font-medium text-foreground pr-4 text-sm">{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
                            openIndex === id && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${id}`}
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        openIndex === id ? "max-h-96" : "max-h-0",
                      )}
                    >
                      <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* Traders FAQ */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-6">For Traders</h3>
            <dl className="space-y-4">
              {traderFaqs.map((faq, index) => {
                const id = `trader-${index}`
                return (
                  <div key={id} className="border border-border rounded-lg overflow-hidden bg-background">
                    <dt>
                      <button
                        onClick={() => handleToggle(id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
                        aria-expanded={openIndex === id}
                        aria-controls={`faq-answer-${id}`}
                      >
                        <span className="font-medium text-foreground pr-4 text-sm">{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
                            openIndex === id && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${id}`}
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        openIndex === id ? "max-h-96" : "max-h-0",
                      )}
                    >
                      <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-xl bg-primary/10 border border-primary/30 text-center">
          <p className="text-foreground font-medium mb-3">Still have questions?</p>
          <p className="text-muted-foreground">
            Join our Discord community where thousands of members help newcomers every day.
          </p>
        </div>
      </div>
    </section>
  )
}
