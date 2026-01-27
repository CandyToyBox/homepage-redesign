'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Meet the Founders: Building the Future of Music Competition
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "Hurric4n3ike",
              title: "Co-Founder & Engineering",
              bio: "Solana developer who manages the production database and smart contracts. Built the onchain battle infrastructure powering music competition.",
              quote:
                '"We\'re building the onchain infrastructure for music competition. This is just the beginning."',
              links: [
                { label: "X/Twitter", url: "#" },
                { label: "GitHub", url: "#" },
              ],
              image: "/founder-hurric4n3ike.png",
            },
            {
              name: "Zaal",
              title: "Co-Founder & Systems Architecture",
              bio: "Handles networking, documentation, and system architecture. Ensures WaveWarz runs smoothly and scales effectively for the community.",
              quote: '"Building the infrastructure that connects artists, traders, and fans in a transparent ecosystem."',
              links: [
                { label: "X/Twitter", url: "https://twitter.com/BetterCallZaal" },
              ],
              image: "/founder-zaal.png",
            },
            {
              name: "Candy",
              title: "Co-Founder & Product",
              bio: "Music industry veteran and vibe coder (Ohara, Claude, Replit) who built the analytics platform serving the WaveWarz community. Passionate about fair artist compensation.",
              quote: '"Musicians deserve to be paid like the athletes they are. WaveWarz makes that happen."',
              links: [
                { label: "X/Twitter", url: "#" },
                { label: "LinkedIn", url: "#" },
              ],
              image: "/founder-candy.png",
            },
          ].map((founder, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
              {/* Founder Image */}
              <div className="h-64 bg-secondary/10 relative overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover grayscale"
                  priority={i === 0}
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">{founder.title}</p>
                </div>

                <p className="text-sm text-foreground">{founder.bio}</p>

                <p className="italic text-sm text-foreground">{founder.quote}</p>

                <div className="flex gap-2 pt-2">
                  {founder.links.map((link, j) => (
                    <Link key={j} href={link.url}>
                      <Button variant="ghost" size="sm">
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#">
            <Button size="lg">
              Join the Team →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
