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
                  src="/images/wavewarz-logo.png"
                  alt="WaveWarZ"
                  width={400}
                  height={200}
                  className="w-72 sm:w-96 object-contain"
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
                Fans Trade The Outcome
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Artists earn 1% of every trade on their music—paid per trade, not play.
              Streaming pennies become SOL rewards.
            </p>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap justify-center gap-6 pt-2">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">$40K</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">371</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Battles Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">50%</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Downside Protection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">INSTANT</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">SOL Payouts</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#tabs-section">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(94,234,128,0.4)] font-bold px-8 py-6 h-auto"
              >
                Watch Live Battle →
              </Button>
            </Link>
            <Link href="#wallet-connect">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card bg-transparent font-semibold px-8 py-6 h-auto"
              >
                Connect Wallet & Trade →
              </Button>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground pt-2">
            No KYC • No Middlemen • Instant Payouts
          </div>

          {/* Live indicator */}
          <Link href="#tabs-section">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mt-4 cursor-pointer hover:bg-primary/20 transition-colors group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary group-hover:underline">Battles happening now</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
