import { Heart, GraduationCap, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CharityHighlight() {
  return (
    <section className="py-16 px-4" aria-labelledby="charity">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-primary/5 border border-pink-500/20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Impact story */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
                <Heart className="h-3 w-3 text-pink-500" />
                <span className="text-xs font-semibold text-pink-500">Music for Good</span>
              </div>
              <h2 id="charity" className="text-2xl font-bold text-foreground mb-3">
                Charity Battles
              </h2>
              <p className="text-muted-foreground mb-4">We host battles where proceeds go to real causes.</p>
              <div className="flex items-center gap-4 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Girls School</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">School for Blind</span>
                </div>
              </div>
            </div>

            {/* Right: Stats + CTA */}
            <div className="text-center">
              <div className="text-4xl font-black text-pink-500 mb-1">$300</div>
              <div className="text-sm text-muted-foreground mb-4">Raised for Polyraider Foundation, Nigeria</div>
              <Link href="/charity/apply">
                <Button className="bg-pink-500 text-white hover:bg-pink-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Propose a Charity Battle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
