import Link from "next/link"
import { Flame } from "lucide-react"

export function HypeBanner() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-neon-blue text-primary-foreground border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Flame className="h-4 w-4 animate-pulse" />
          <span>Community Battles are live!</span>
          <Link
            href="/v2/community/create"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold"
          >
            Launch a Battle →
          </Link>
        </div>
      </div>
    </div>
  )
}
