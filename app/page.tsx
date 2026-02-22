"use client"

import { useState } from "react"
import { HypeBanner } from "@/components/hype-banner"
import { MainnetBanner } from "@/components/mainnet-banner"
import { Header } from "@/components/header"
import { TabsSection } from "@/components/tabs-section"
import { BattleSearch } from "@/components/battle-search"
import { FeaturedBattle } from "@/components/featured-battle"
import { PastBattles } from "@/components/past-battles"
import { ArtistSignup } from "@/components/artist-signup"
import { BattleTypes } from "@/components/battle-types"
import { Footer } from "@/components/footer"
import { EconomicsSimplified } from "@/components/economics-simplified"

// Mock data
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
  const [activeTab, setActiveTab] = useState("quick")
  const [showArtistForm, setShowArtistForm] = useState(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#050507" }}>
      <HypeBanner />
      <MainnetBanner />
      <Header />

      <main className="flex-grow">
        {/* ACTIVE QUICK BATTLE: Feature the currently trading battle at the top */}
        <TabsSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          quickActive={mockQuickActive}
          quickQueued={mockQuickQueued}
          activeCommunityBattles={mockActiveCommunityBattles}
        />

        {/* BATTLE OPTIONS: 3 clean cards showing Main Event, Quick BattleZ, Community BattleZ */}
        <BattleTypes />

        {/* FEATURED BATTLE: Center stage for the most traded battle */}
        <FeaturedBattle battle={mockFeaturedBattle} />

        {/* PAST BATTLES: Social proof - see what's already happened */}
        <PastBattles battles={mockPastBattles} />

        {/* SEARCH & DISCOVER */}
        <BattleSearch />

        {/* ECONOMICS: Clean, simplified fee & payout structure */}
        <EconomicsSimplified />
      </main>

      {/* Artist signup CTA */}
      <ArtistSignup showForm={showArtistForm} onToggleForm={() => setShowArtistForm(!showArtistForm)} />
      <Footer />
    </div>
  )
}
