"use client"

import { Button } from "@/components/ui/button"
import { QuickBattleHero } from "@/components/quick-battle-hero"
import { QuickBattleQueue } from "@/components/quick-battle-queue"
import { CommunityBattleCarousel } from "@/components/community-battle-carousel"
import Link from "next/link"
import { Zap, Users } from "lucide-react"

interface TabsSectionProps {
  activeTab: "quick" | "community"
  onTabChange: (tab: "quick" | "community") => void
  quickActive: any[]
  quickQueued: any[]
  activeCommunityBattles: any[]
}

export function TabsSection({
  activeTab,
  onTabChange,
  quickActive,
  quickQueued,
  activeCommunityBattles,
}: TabsSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#030305] border-y border-white/5">
      {/* Unique Brand Background for this section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150 px-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">
            Jump Into a Battle
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
              Anyone can launch a quick battle at anytime. Payouts go to the Artist's wallet automatically.
              <br className="hidden md:block" />
              We launch <a href="https://x.com/WaveWarZ" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline underline-offset-4 decoration-2">3 QUICK BATTLEZ LIVE IN X SPACES M-F at 8:30 PM EST.</a>
            </p>
            <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">Partnered with</span>
              <img
                src="/images/audius-logo-horizontal-white.png"
                alt="Audius"
                className="h-6 opacity-90"
              />
              <div className="h-4 w-[1px] bg-white/10 mx-2" />
              <span className="text-xs font-bold text-primary/80">SDK Sync Active</span>
            </div>
          </div>
        </div>

        {/* Tab Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 p-1 bg-card rounded-xl border border-border">
            <Button
              onClick={() => onTabChange("quick")}
              className={`relative px-6 py-2.5 rounded-lg font-semibold transition-all ${activeTab === "quick"
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(74,228,105,0.3)]"
                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              <Zap className="h-4 w-4 mr-2 inline" />
              Quick BattleZ
              {activeTab === "quick" && (
                <span className="ml-2 text-xs bg-primary-foreground/20 px-1.5 py-0.5 rounded">Fast</span>
              )}
            </Button>
            <Button
              onClick={() => onTabChange("community")}
              className={`relative px-6 py-2.5 rounded-lg font-semibold transition-all ${activeTab === "community"
                ? "bg-secondary text-secondary-foreground shadow-[0_0_20px_rgba(0,119,130,0.3)]"
                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              <Users className="h-4 w-4 mr-2 inline" />
              Community
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "quick" ? (
          <div className="space-y-6">
            <QuickBattleHero battle={quickActive[0]} />
            <QuickBattleQueue queued={quickQueued} />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/audius/search">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Create a Quick Battle
                </Button>
              </Link>
              <Link
                href="/quick-battles"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View completed battles
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <CommunityBattleCarousel battles={activeCommunityBattles} />
            <div className="text-center">
              <Link href="/v2/community/create">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Create Community Battle
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
