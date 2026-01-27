'use client'

import { Button } from "@/components/ui/button"
import { Users, Music, Coffee, Zap } from "lucide-react"

const spaces = [
    {
        badge: "☕ COMMUNITY SPACE",
        icon: Coffee,
        when: "Monday-Friday, 11 AM EST",
        title: "Morning Community Space",
        what: [
            "Talk WaveWarz platform updates",
            "Discuss music industry trends",
            "Answer community questions",
            "Get feedback from artists & traders",
            "Share upcoming battle schedules",
        ],
        vibe: "Casual conversation. Coffee chat vibes. All questions welcome. Come learn, share ideas, or just hang out.",
        cta: "Join Next Space",
        color: "primary",
    },
    {
        badge: "🎵 LIVE TRADING SPACE",
        icon: Zap,
        when: "Monday-Friday, 8:30 PM EST",
        title: "Nightly Trading Space",
        what: [
            "Host 3 Quick BattleZ live",
            "Real-time trading with the community",
            "Discover new artists from the catalog",
            "Watch trades happen live",
            "Learn how to trade (no pressure)",
        ],
        vibe: "Party vibes. Fast-paced. Jump in anytime. Perfect for discovering WaveWarz in action.",
        cta: "Join Tonight's Trading",
        color: "secondary",
    },
]

export function CommunitySpaces() {
    return (
        <section className="py-20 bg-card/50 relative overflow-hidden" id="community-spaces">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">
                        Drop In Daily. Connect with the Community.
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6 text-primary">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-5 w-5 fill-current"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                        <a
                            href="https://x.com/WaveWarZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold hover:underline"
                        >
                            @WaveWarZ
                        </a>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're live on X Spaces Monday-Friday. Two different vibes, same mission:
                        building the future of music monetization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {spaces.map((space, i) => (
                        <div key={i} className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${space.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                                    }`}>
                                    {space.badge}
                                </span>
                                <space.icon className={`h-6 w-6 ${space.color === 'primary' ? 'text-primary' : 'text-secondary'
                                    }`} />
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-2">{space.title}</h3>
                            <p className="text-primary font-semibold mb-6">{space.when}</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">What We Do:</p>
                                <ul className="space-y-2">
                                    {space.what.map((item, j) => (
                                        <li key={j} className="text-sm text-foreground flex gap-2">
                                            <span className="text-primary">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 bg-muted/30 rounded-lg border border-border mb-8">
                                <p className="text-sm italic text-foreground">{space.vibe}</p>
                            </div>

                            <a
                                href="https://x.com/WaveWarZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button className={`w-full font-bold ${space.color === 'primary'
                                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                                    }`}>
                                    {space.cta} →
                                </Button>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-background/40 border border-border p-6 rounded-lg text-center">
                        <h4 className="font-bold text-foreground mb-2">New to WaveWarz?</h4>
                        <p className="text-sm text-muted-foreground mb-4">Start with 11 AM Community Space. Learn the basics, ask questions, no pressure.</p>
                    </div>
                    <div className="bg-background/40 border border-border p-6 rounded-lg text-center">
                        <h4 className="font-bold text-foreground mb-2">Want to See It in Action?</h4>
                        <p className="text-sm text-muted-foreground mb-4">Join 8:30 PM Trading Space. Watch live battles, see real trades, jump in when ready.</p>
                    </div>
                    <div className="bg-background/40 border border-border p-6 rounded-lg text-center">
                        <h4 className="font-bold text-foreground mb-2">Already Trading?</h4>
                        <p className="text-sm text-muted-foreground mb-4">Both! 11 AM for strategy & feedback, 8:30 PM for nightly action.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
