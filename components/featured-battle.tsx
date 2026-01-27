import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Clock } from "lucide-react"

interface FeaturedBattleProps {
  battle?: {
    battleId: string
    artist1Name: string
    artist2Name: string
    imageUrl: string
    volume5mSol: number
    endsAt: string
  } | null
}

export function FeaturedBattle({ battle }: FeaturedBattleProps) {
  if (!battle) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-12 text-center">
            <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Featured Battle</h3>
            <p className="text-muted-foreground">Check back soon for featured battles!</p>
          </div>
        </div>
      </section>
    )
  }

  const formatTimeRemaining = (endsAt: string) => {
    const diff = new Date(endsAt).getTime() - Date.now()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Star className="h-6 w-6 text-warning fill-warning" />
          <h2 className="text-2xl font-bold text-foreground">Featured Battle</h2>
        </div>

        <Link href={`/v2/battles/${battle.battleId}`} className="block group">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(94,255,130,0.2)]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80">
                <Image
                  src={battle.imageUrl || "/placeholder.svg"}
                  alt={`${battle.artist1Name} vs ${battle.artist2Name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/20 text-warning text-sm font-semibold w-fit mb-4">
                  <Star className="h-4 w-4 fill-current" />
                  Featured
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                  {battle.artist1Name} <span className="text-muted-foreground">vs</span> {battle.artist2Name}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <span className="flex items-center gap-1.5 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    {battle.volume5mSol} SOL volume
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Ends in {formatTimeRemaining(battle.endsAt)}
                  </span>
                </div>

                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(94,255,130,0.3)]">
                  Enter Battle
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
