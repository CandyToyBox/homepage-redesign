"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Rocket, Info } from "lucide-react"

interface QueuedBattle {
  id: string
  artist1_track_title: string
  artist2_track_title: string
  artist1_artwork_url: string
  artist2_artwork_url: string
}

interface QuickBattleQueueProps {
  queued: QueuedBattle[]
}

export function QuickBattleQueue({ queued }: QuickBattleQueueProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
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

  if (!queued || queued.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-6 text-center">
        <p className="text-muted-foreground mb-4">No battles in queue</p>
        <Link href="/audius/search">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Add to Queue</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Upcoming Quick BattleZ</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Anyone can launch a battle. Payouts go to the artist's wallet immediately.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/audius/search">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(94,255,130,0.3)]">
              <Rocket className="h-4 w-4 mr-2" />
              Launch Your Own Battle
            </Button>
          </Link>
          <Link href="/quick-battles" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
            View all
          </Link>
        </div>
      </div>

      <div className="relative">
        {/* Scroll arrows */}
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
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 px-1"
        >
          {queued.map((battle, index) => (
            <div
              key={battle.id}
              className="flex-shrink-0 w-72 snap-start bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors group"
            >
              {index === 0 && (
                <div className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1.5 text-center">
                  Next to launch
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={battle.artist1_artwork_url || "/placeholder.svg"}
                    alt={battle.artist1_track_title}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <span className="text-muted-foreground font-bold">VS</span>
                  <Image
                    src={battle.artist2_artwork_url || "/placeholder.svg"}
                    alt={battle.artist2_track_title}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                </div>

                <p className="text-sm font-medium text-foreground line-clamp-2">
                  {battle.artist1_track_title} vs {battle.artist2_track_title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
