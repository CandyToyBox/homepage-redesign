import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp } from "lucide-react"

interface QuickBattleHeroProps {
  battle?: {
    battle_id: string
    artist1_track_title: string
    artist2_track_title: string
    artist1_artwork_url: string
    artist2_artwork_url: string
  }
}

export function QuickBattleHero({ battle }: QuickBattleHeroProps) {
  if (!battle) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center">
        <p className="text-muted-foreground">No active Quick BattleZ right now</p>
        <Link href="/audius/search">
          <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">Create One Now</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted border border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Active Quick BattleZ
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Artwork VS Display */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src={battle.artist1_artwork_url || "/placeholder.svg"}
                alt={battle.artist1_track_title}
                width={150}
                height={150}
                className="relative rounded-xl object-cover border-2 border-primary/50"
              />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-foreground">VS</span>
              <Zap className="h-6 w-6 text-warning animate-pulse" />
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-neon-blue rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src={battle.artist2_artwork_url || "/placeholder.svg"}
                alt={battle.artist2_track_title}
                width={150}
                height={150}
                className="relative rounded-xl object-cover border-2 border-secondary/50"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              {battle.artist1_track_title} <span className="text-muted-foreground">vs</span>{" "}
              {battle.artist2_track_title}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Jump into this Quick BattleZ and ride the bonding curve! Back your favorite track with SOL and watch your
              position grow.
            </p>

            <div className="flex items-center gap-2 text-sm text-primary">
              <TrendingUp className="h-4 w-4" />
              <span>Bonding curve active</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/quick-battles">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                  View Queue
                </Button>
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(94,255,130,0.3)]">
                Jump into Battle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
