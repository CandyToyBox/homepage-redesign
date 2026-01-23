"use client"

import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Search, Clock } from "lucide-react"

interface CommunityBattle {
  id: string
  battleId: string
  artist1Name: string
  artist2Name: string
  imageUrl: string
  volume5mSol: number
  endsAt: string
}

interface CommunityBattleCarouselProps {
  battles: CommunityBattle[]
}

export function CommunityBattleCarousel({ battles }: CommunityBattleCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeft(scrollLeft > 0)
      setShowRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const filteredBattles = battles.filter(
    (b) =>
      b.artist1Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.artist2Name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatTimeRemaining = (endsAt: string) => {
    const diff = new Date(endsAt).getTime() - Date.now()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-foreground">Active Community Battles</h3>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by artist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
        )}
        {showRight && filteredBattles.length > 2 && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur border border-border flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 px-1"
        >
          {filteredBattles.map((battle) => (
            <Link
              key={battle.id}
              href={`/v2/battles/${battle.battleId}`}
              className="flex-shrink-0 w-80 snap-start group"
            >
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(94,255,130,0.15)]">
                <div className="relative">
                  <Image
                    src={battle.imageUrl || "/placeholder.svg"}
                    alt={`${battle.artist1Name} vs ${battle.artist2Name}`}
                    width={320}
                    height={180}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-foreground" />
                      </span>
                      Active
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {battle.artist1Name} <span className="text-muted-foreground">vs</span> {battle.artist2Name}
                  </h4>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      Ends in {formatTimeRemaining(battle.endsAt)}
                    </span>
                    <span className="text-primary font-medium">{battle.volume5mSol} SOL</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {filteredBattles.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No battles found matching &ldquo;{searchQuery}&rdquo;
        </div>
      )}
    </div>
  )
}
