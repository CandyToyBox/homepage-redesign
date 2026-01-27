"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do I need to know anything about crypto to use WaveWarZ?",
    answer:
      "Nope! If you can download an app and use Apple Pay or Venmo, you can use WaveWarZ. We've designed everything to feel familiar. The 'crypto' part happens in the background - you just pick artists and win prizes.",
  },
  {
    question: "What's a wallet and why do I need one?",
    answer:
      "A wallet is like a secure digital pocket for your money - similar to Apple Pay or PayPal, but you control it completely. We recommend Phantom (free app). It stores your funds and lets you participate in battles. Download it, set a password, and you're ready.",
  },
  {
    question: "What is SOL and how do I get it?",
    answer:
      "SOL is the digital currency WaveWarZ uses - think of it like arcade tokens or chips at a casino. You can buy SOL directly in your Phantom wallet using a regular debit or credit card. $5-10 is plenty to start exploring.",
  },
  {
    question: "How much money do I need to start?",
    answer:
      "You can join battles with as little as $1 worth of SOL. We recommend starting small ($5-10) while you learn how it works. Transaction fees are tiny - usually less than a penny.",
  },
  {
    question: "Can I lose money?",
    answer:
      "Yes - just like betting on sports or playing poker, you can lose what you put in. If your artist loses the battle, you lose your entry. That's why we say: only play with money you're okay losing. Start small, have fun, and treat it as entertainment.",
  },
  {
    question: "How do I actually win?",
    answer:
      "Pick the artist you think will get more support. If more people (and more money) back your artist by the time the battle ends, you win! Your prize is a share of what the losing side put in. The earlier you join and the more you put in, the bigger your share.",
  },
  {
    question: "What's the difference between Quick BattleZ and Community Battles?",
    answer:
      "Quick BattleZ are fast (just a few minutes), have smaller stakes, and are perfect for beginners. Community Battles last longer (hours or days), have bigger prize pools, and are created by users like you. Start with Quick BattleZ to learn the ropes.",
  },
  {
    question: "How do I get my winnings back to my bank account?",
    answer:
      "Your winnings appear as SOL in your wallet. To convert to regular money, you can sell SOL in your Phantom wallet and withdraw to your bank - similar to cashing out on Venmo. The whole process takes a few minutes.",
  },
  {
    question: "Is this legal? Is my money safe?",
    answer:
      "WaveWarZ operates on public blockchain technology, meaning all transactions are transparent and verifiable. Your wallet is controlled only by you - we can't access your funds. As for legality, it varies by location. Please check your local regulations regarding prediction markets.",
  },
  {
    question: "What if I pick the wrong artist?",
    answer:
      "You can sell your position anytime before the battle ends! If you change your mind or see the odds shifting, just sell and get (some of) your money back. You're never locked in until the battle concludes.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 bg-card/50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Common <span className="text-neon">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            New to this? We get it. Here are the answers to everything beginners ask.
          </p>
        </header>

        <dl className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-background">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 p-8 rounded-xl bg-neon/10 border border-neon/30 text-center">
          <p className="text-foreground font-medium mb-3">Still confused? That&apos;s okay!</p>
          <p className="text-muted-foreground">
            Join our Discord community where thousands of members help newcomers every day.
          </p>
        </div>
      </div>
    </section>
  )
}
