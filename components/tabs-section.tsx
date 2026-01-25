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
    <section className="py-12 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Jump Into a Battle</h2>
          <p className="text-muted-foreground">
            Quick battles run every few minutes. Community battles have bigger pools.
          </p>
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
