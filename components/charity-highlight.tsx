import { Heart, GraduationCap, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CharityHighlight() {
  return (
    <section className="py-24 bg-[#030305] relative overflow-hidden" aria-labelledby="charity-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-1 lg:p-1 rounded-[2.5rem] bg-gradient-to-br from-pink-500/20 to-primary/20">
          <div className="relative rounded-[2.4rem] bg-[#0A0B10] overflow-hidden">
            {/* Background Image / Banner */}
            <div className="absolute inset-0 opacity-20 hover:opacity-30 transition-opacity duration-700">
              <img
                src="/images/holiday-heat-banner.jpg"
                alt="Holiday Heat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B10] via-[#0A0B10]/80 to-transparent" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
              {/* Left: Impact story */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                  <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
                  <span className="text-xs font-black text-pink-500 uppercase tracking-widest">Music for Good</span>
                </div>

                <h2 id="charity-title" className="text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
                  Charity Battles
                </h2>

                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                  We host high-impact battles where proceeds go directly to real causes around the globe.
                </p>

                <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-tight">Girls School</p>
                      <p className="text-xs text-muted-foreground">Education Support</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-tight">School for Blind</p>
                      <p className="text-xs text-muted-foreground">Healthcare Access</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats + CTA */}
              <div className="w-full lg:w-[400px] p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl text-center shadow-2xl">
                <div className="text-7xl font-black text-pink-500 mb-2 tabular-nums tracking-tighter">$300</div>
                <div className="text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest opacity-80">
                  Raised for Polyraider Foundation, Nigeria
                </div>

                <Link href="/charity/apply">
                  <Button className="w-full h-16 bg-pink-500 text-white hover:bg-pink-600 font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all active:scale-95">
                    <Heart className="h-5 w-5 mr-3" />
                    Propose a Charity Battle
                  </Button>
                </Link>

                <p className="mt-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  100% OF FEES DONATED ONCHAIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
    </section>
  )
}
