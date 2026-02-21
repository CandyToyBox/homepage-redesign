'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TeamSection() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
            Meet the Founders: Building the Future of Music Competition
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {[
            {
              name: "Hurric4n3ike",
              title: "Co-Founder & Engineering",
              quote:
                '"We\'re building the onchain infrastructure for music competition. This is just the beginning."',
              links: [
                { label: "X/Twitter", url: "https://x.com/hurric4n3ike" },
                { label: "GitHub", url: "#" },
              ],
              image: "/images/team-hurric4n3ike.png",
            },
            {
              name: "Zaal",
              title: "Co-Founder & Systems Architecture",
              quote: '"Building the infrastructure that connects artists, traders, and fans in a transparent ecosystem."',
              links: [
                { label: "X/Twitter", url: "https://x.com/bettercallzaal" },
              ],
              image: "/images/team-zaal.png",
            },
            {
              name: "Candy",
              title: "Co-Founder & Product",
              quote: '"Musicians deserve to be paid like the athletes they are. WaveWarz makes that happen."',
              links: [
                { label: "X/Twitter", url: "https://x.com/candytoyboxyt1" },
                { label: "LinkedIn", url: "#" },
              ],
              image: "/images/team-candy.png",
            },
          ].map((founder, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Image Placeholder */}
              <div className="h-64 bg-secondary/10 flex items-center justify-center text-sm text-muted-foreground p-4 text-center">
                {founder.image}
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">{founder.title}</p>
                </div>

                <p className="italic text-sm text-foreground">{founder.quote}</p>

                <div className="flex gap-4 pt-4">
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

      </div>
    </section>
  )
}
