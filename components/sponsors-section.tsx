import { Handshake, Megaphone, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const sponsorBenefits = [
  {
    icon: Megaphone,
    title: "Live Exposure",
    description: "Your brand featured during live battles with thousands of engaged music fans watching.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Connect with a passionate community of music lovers and crypto-native users.",
  },
  {
    icon: Zap,
    title: "Battle Naming Rights",
    description: "Sponsor specific battles or battle series with your brand prominently displayed.",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-16 px-4 bg-card/30" aria-labelledby="sponsors">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
          <Handshake className="h-3 w-3 text-secondary" />
          <span className="text-xs font-semibold text-secondary">Partnerships</span>
        </div>
        <h2 id="sponsors" className="text-2xl font-bold text-foreground mb-3">
          Sponsor WaveWarZ
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Reach engaged music fans during live battles. Brand exposure, battle naming rights, and community integration.
        </p>

        {/* Sponsor slots */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="px-8 py-4 rounded-xl bg-card border border-dashed border-border text-muted-foreground text-sm"
            >
              Your Brand Here
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/sponsors/apply">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Become a Sponsor</Button>
          </Link>
          <Link href="/sponsors/media-kit">
            <Button variant="outline" className="border-border text-foreground hover:bg-card bg-transparent">
              Media Kit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
