"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react"

interface PastBattle {
  battleId: string
  artist1Name: string
  artist2Name: string
  imageUrl: string
}

interface PastBattlesProps {
  battles: PastBattle[]
}

export function PastBattles({ battles }: PastBattlesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
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

  if (!battles || battles.length === 0) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-12 text-center">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Past Battles</h3>
            <p className="text-muted-foreground">Completed battles will appear here.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-6 w-6 text-secondary" />
          <h2 className="text-2xl font-bold text-foreground">Past Battles</h2>
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
          {showRight && (
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
            {battles.map((battle) => (
              <Link
                key={battle.battleId}
                href={`/v2/battles/${battle.battleId}`}
                className="flex-shrink-0 w-64 snap-start group"
              >
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-secondary/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  <div className="relative h-36">
                    <Image
                      src={battle.imageUrl || "/placeholder.svg"}
                      alt={`${battle.artist1Name} vs ${battle.artist2Name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-4">
                    <p className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                      {battle.artist1Name} <span className="text-muted-foreground">vs</span> {battle.artist2Name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Completed</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
