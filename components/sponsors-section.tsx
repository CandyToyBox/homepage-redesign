import { Handshake, Megaphone, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const sponsorBenefits = [
  {
    icon: Megaphone,
    title: "Live Exposure",
    description: "Your brand featured during live battles with thousands of engaged music fans watching.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Connect with a passionate community of music lovers and crypto-native users.",
  },
  {
    icon: Zap,
    title: "Battle Naming Rights",
    description: "Sponsor specific battles or battle series with your brand prominently displayed.",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-24 bg-[#030305] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0A0B10] border border-white/5 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <span className="text-[10px] font-black text-secondary tracking-widest uppercase">Partnerships</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight leading-tight">
                Sponsor WaveWarZ
              </h2>

              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Get your brand in front of thousands of music fans, artists, and traders.
                Sponsor a battle, a tournament, or the entire league.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/sponsors/apply">
                  <Button className="h-14 px-8 bg-secondary text-white hover:bg-secondary/90 font-black uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    Become a Sponsor
                  </Button>
                </Link>
                <Link href="/media-kit">
                  <Button variant="ghost" className="h-14 px-8 text-foreground font-black uppercase tracking-widest hover:bg-white/5 rounded-2xl transition-all">
                    View Media Kit
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-help group/logo">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest group-hover/logo:text-secondary">Brand Slot {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
