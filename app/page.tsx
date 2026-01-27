"use client"

import { useState } from "react"
import { HypeBanner } from "@/components/hype-banner"
import { MainnetBanner } from "@/components/mainnet-banner"
import { Header } from "@/components/header"
import { TabsSection } from "@/components/tabs-section"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { BattleSearch } from "@/components/battle-search"
import { FeaturedBattle } from "@/components/featured-battle"
import { PastBattles } from "@/components/past-battles"
import { ArtistSignup } from "@/components/artist-signup"
import { WhatIsWaveWarz } from "@/components/what-is-wavewarz"
import { HowItWorks } from "@/components/how-it-works"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { LivestreamCTA } from "@/components/livestream-cta"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { ArtistEarnings } from "@/components/artist-earnings"
import { CharityHighlight } from "@/components/charity-highlight"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"
import { RiskProtection } from "@/components/risk-protection"
import { BattleTypes } from "@/components/battle-types"
import { SocialProof } from "@/components/social-proof"
import { ArtistMonetization } from "@/components/artist-monetization"
import { EconomicsTransparency } from "@/components/economics-transparency"
import { TeamSection } from "@/components/team-section"
import { ContentCommunity } from "@/components/content-community"
import { ArtistCatalog } from "@/components/artist-catalog"

// Mock data - replace with real API calls
const mockFeaturedBattle = {
  battleId: "featured-001",
  artist1Name: "Kendrick Lamar",
  artist2Name: "Drake",
  imageUrl: "/epic-music-battle-concert-stage-neon.jpg",
  volume5mSol: 12.5,
  endsAt: new Date(Date.now() + 86400000).toISOString(),
}

const mockPastBattles = [
  {
    battleId: "past-001",
    artist1Name: "Taylor Swift",
    artist2Name: "Beyoncé",
    imageUrl: "/pop-music-battle-stage.jpg",
  },
  { battleId: "past-002", artist1Name: "Eminem", artist2Name: "Jay-Z", imageUrl: "/rap-battle-hip-hop-stage.jpg" },
  {
    battleId: "past-003",
    artist1Name: "The Weeknd",
    artist2Name: "Bruno Mars",
    imageUrl: "/rnb-music-performance-stage.jpg",
  },
  {
    battleId: "past-004",
    artist1Name: "Billie Eilish",
    artist2Name: "Olivia Rodrigo",
    imageUrl: "/alternative-music-concert.jpg",
  },
]

const mockQuickActive = [
  {
    battle_id: "quick-active-001",
    artist1_track_title: "Not Like Us",
    artist2_track_title: "Family Matters",
    artist1_artwork_url: "/hip-hop-album-cover-neon-green.jpg",
    artist2_artwork_url: "/rap-album-cover-dark-blue.jpg",
  },
]

const mockQuickQueued = [
  {
    id: "queue-001",
    artist1_track_title: "Espresso",
    artist2_track_title: "Good Luck, Babe!",
    artist1_artwork_url: "/pop-song-cover.jpg",
    artist2_artwork_url: "/indie-pop-album-cover.png",
  },
  {
    id: "queue-002",
    artist1_track_title: "Lose Yourself",
    artist2_track_title: "Forgot About Dre",
    artist1_artwork_url: "/placeholder-5b3nq.png",
    artist2_artwork_url: "/placeholder-as5y5.png",
  },
  {
    id: "queue-003",
    artist1_track_title: "Blinding Lights",
    artist2_track_title: "Levitating",
    artist1_artwork_url: "/synth-pop-album-neon.jpg",
    artist2_artwork_url: "/disco-pop-album-cover.png",
  },
]

const mockActiveCommunityBattles = [
  {
    id: "comm-001",
    battleId: "comm-battle-001",
    artist1Name: "Post Malone",
    artist2Name: "Doja Cat",
    imageUrl: "/music-festival-stage-neon-lights.jpg",
    volume5mSol: 8.3,
    endsAt: new Date(Date.now() + 7200000).toISOString(),
  },
  {
    id: "comm-002",
    battleId: "comm-battle-002",
    artist1Name: "SZA",
    artist2Name: "Summer Walker",
    imageUrl: "/rnb-concert-stage-purple-lights.jpg",
    volume5mSol: 5.1,
    endsAt: new Date(Date.now() + 14400000).toISOString(),
  },
  {
    id: "comm-003",
    battleId: "comm-battle-003",
    artist1Name: "Travis Scott",
    artist2Name: "Future",
    imageUrl: "/trap-music-stage-smoke-effects.jpg",
    volume5mSol: 15.7,
    endsAt: new Date(Date.now() + 3600000).toISOString(),
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<"quick" | "community">("quick")
  const [showArtistForm, setShowArtistForm] = useState(false)

  // Production flow: Hook → Trust → Battle types → Risk → Proof → Monetization → Economics → Catalog → Community → Charity/Sponsors → Team → FAQ
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HypeBanner />
      <MainnetBanner />
      <Header />

      <main className="flex-grow">
        {/* 1. ABOVE THE FOLD: Hook + CTAs */}
        <HeroSection />
        <TrustBadges />
        
        {/* 2. IMMEDIATE ACTION: Livestream + Quick Battles */}
        <LivestreamCTA />
        <TabsSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          quickActive={mockQuickActive}
          quickQueued={mockQuickQueued}
          activeCommunityBattles={mockActiveCommunityBattles}
        />

        {/* 3. EDUCATE: What is this? */}
        <WhatIsWaveWarz />

        {/* 4. RISK MANAGEMENT: Safety net message */}
        <RiskProtection />

        {/* 5. SHOW OPTIONS: Three battle types */}
        <BattleTypes />

        {/* 6. HOW TO START: Beginner steps */}
        <HowItWorks />

        {/* 7. SOCIAL PROOF: Real people + stats */}
        <SocialProof />

        {/* 8. MONETIZATION: Why artists care */}
        <ArtistMonetization />

        {/* 9. ECONOMICS: Transparency */}
        <EconomicsTransparency />

        {/* 10. ARTIST CATALOG: Browse & battle */}
        <ArtistCatalog />

        {/* 11. COMMUNITY: More than battles */}
        <ContentCommunity />

        {/* 12. VALUES: Charity + Sponsors */}
        <CharityHighlight />
        <SponsorsSection />

        {/* 13. TEAM: Who's building */}
        <TeamSection />

        {/* 14. DISCOVERY: Past battles */}
        <FeaturedBattle battle={mockFeaturedBattle} />
        <PastBattles battles={mockPastBattles} />

        {/* 15. TRUST: Video + FAQ */}
        <YoutubeEmbed />
        <FAQSection />
      </main>

      <ArtistSignup showForm={showArtistForm} onToggleForm={() => setShowArtistForm(!showArtistForm)} />
      <Footer />
    </div>
  )
}
