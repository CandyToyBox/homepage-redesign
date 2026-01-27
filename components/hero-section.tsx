import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-12 pb-8 relative overflow-hidden bg-[#030305]">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/wavewarz-20logo.png"
                  alt="WaveWarZ"
                  width={256}
                  height={256}
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance">
              Music Battles That Pay.
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Trade. Win. Repeat.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Watch live music showdowns on Solana. Artists earn 1% of every trade. Traders speculate on songs. Only 1.5% fees total.
            </p>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              💰 $2,500+ per match
            </div>
            <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              🎤 60% Artists earning
            </div>
            <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
              📊 337 Battles completed
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/quick-battles">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(94,234,128,0.4)] font-bold px-8 py-6 h-auto"
              >
                <Zap className="h-5 w-5 mr-2" />
                Watch Live Battle →
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card bg-transparent font-semibold px-8 py-6 h-auto"
              >
                See How It Works ↓
              </Button>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground pt-2">
            No wallet needed
          </div>

          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Battles happening now</span>
          </div>
        </div>
      </div>
    </section>
  )
}
