"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const musicianFaqs = [
  {
    question: "How do I actually get paid?",
    answer:
      "Two ways, automatically: (1) DURING THE BATTLE: Fans trade on your side and you earn 1% of that volume continuously, no matter who wins. (2) WHEN BATTLE ENDS: Smart contract calculates settlement bonuses. Winner gets 5% of loser's pool, loser gets 2%. All paid instantly in SOL to your wallet.",
  },
  {
    question: "What if my fans don't trade much?",
    answer:
      "Then you don't earn much from that specific battle. But more battles = more chances. Quick BattleZ run 24/7. Think of it like streaming: consistent catalog + engaged fans = real income. WaveWarz pays 300x better per 'play' than Spotify.",
  },
  {
    question: "How does this compare to Spotify?",
    answer:
      "Quick Battle ($10 earned) = 3,300 Spotify streams. Main Event ($25 earned) = 8,300 Spotify streams. WaveWarz offers 300x higher per-play value, instant SOL payouts, and you keep 100% of your rights. Use Spotify for discovery, Battle on WaveWarz for income.",
  },
  {
    question: "How do I get my music into Quick BattleZ?",
    answer:
      "Step 1: Upload to Audius (audius.co). Step 2: Connect to WaveWarz and click 'Sync Audius Music'. Step 3: Authorize the sync. Your music automatically enters the Quick Battle rotation. No application or approval process needed.",
  },
  {
    question: "What if I don't have a Solana wallet?",
    answer:
      "Setup takes 2 minutes: Download Phantom wallet (free), create your wallet (save your seed phrase!), and we'll send earnings there. You can cash out SOL to USD anytime via Coinbase or other exchanges.",
  },
]

const traderFaqs = [
  {
    question: "What if I pick the losing side?",
    answer:
      "You get 50% downside protection automatically. If you stake 1 SOL and lose, you receive 0.5 SOL back instantly. No total wipeouts like other platforms.",
  },
  {
    question: "How do I know which artist will win?",
    answer:
      "The winner is whichever side has more SOL in their pool when time expires. You can use strategy: check artist stats, volume trends, and community sentiment. Early trades often get better prices on the bonding curve.",
  },
  {
    question: "Can I withdraw during a battle?",
    answer:
      "No, but battles are quick: 30-60 minutes. Once the battle settles (usually 1 minute after it ends), your SOL is instantly available in your wallet for withdrawal or next trade.",
  },
  {
    question: "What's the minimum stake?",
    answer:
      "Start small: Minimum is 0.01 SOL (~$2-3). We recommend 0.1-0.5 SOL for your first few battles to learn the flow and test the 50% downside protection.",
  },
  {
    question: "Is this gambling?",
    answer:
      "It's speculation with real stakes and real protection. You're supporting real artists and the 50% downside protection limits your risk. Every stake directly funds the musician you're backing.",
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
