import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import {
  Inter as V0_Font_Inter,
  Roboto_Mono as V0_Font_Roboto_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"

// Initialize fonts
const _inter = V0_Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _robotoMono = V0_Font_Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "WaveWarZ | Music Battles on Solana - Vote, Trade & Win",
    template: "%s | WaveWarZ",
  },
  description:
    "WaveWarZ is the first music battle platform on Solana blockchain. Create battles between artists, vote with SOL, trade on bonding curves, and earn rewards. Join Quick BattleZ or launch Community Battles today.",
  keywords: [
    "WaveWarZ",
    "music battles",
    "Solana",
    "blockchain music",
    "music voting",
    "artist battles",
    "crypto music",
    "web3 music",
    "music trading",
    "bonding curve",
    "Quick BattleZ",
    "Community Battles",
    "music NFT",
    "decentralized music",
    "SOL voting",
  ],
  authors: [{ name: "WaveWarZ Team", url: "https://wavewarz.com" }],
  creator: "WaveWarZ",
  publisher: "WaveWarZ",
  generator: "v0.app",
  applicationName: "WaveWarZ",
  referrer: "origin-when-cross-origin",
  category: "Music, Entertainment, Blockchain, Web3",
  classification: "Music Battle Platform",

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wavewarz.com",
    siteName: "WaveWarZ",
    title: "WaveWarZ | Music Battles on Solana - Vote, Trade & Win",
    description:
      "The first music battle platform on Solana. Create battles between your favorite artists, vote with SOL, and earn rewards on the bonding curve.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WaveWarZ - Music Battles Meet Music Markets on Solana",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@wavewarz",
    creator: "@wavewarz",
    title: "WaveWarZ | Music Battles on Solana",
    description: "Battle your favorite artists on Solana. Vote with SOL, trade on bonding curves, win rewards.",
    images: ["/twitter-card.png"],
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: "https://wavewarz.com",
    languages: {
      "en-US": "https://wavewarz.com",
    },
  },

  // Icons
  icons: {
    icon: [{ url: "/images/icon.png", sizes: "any" }],
    apple: "/images/icon.png",
    shortcut: "/images/icon.png",
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Other meta
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#0a0a0a",
    "msapplication-TileColor": "#5eff82",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://wavewarz.com/#organization",
      name: "WaveWarZ",
      url: "https://wavewarz.com",
      logo: {
        "@type": "ImageObject",
        url: "/images/monochrome-20wavewarz-20logo.png",
        width: 512,
        height: 512,
      },
      sameAs: ["https://twitter.com/wavewarz", "https://discord.gg/wavewarz"],
      description: "WaveWarZ is the first decentralized music battle platform built on Solana blockchain.",
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://wavewarz.com/#website",
      url: "https://wavewarz.com",
      name: "WaveWarZ",
      description: "Music Battles on Solana - Vote, Trade & Win",
      publisher: { "@id": "https://wavewarz.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://wavewarz.com/audius/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // WebApplication Schema
    {
      "@type": "WebApplication",
      "@id": "https://wavewarz.com/#webapp",
      name: "WaveWarZ",
      url: "https://wavewarz.com",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Create music battles between artists",
        "Vote using Solana (SOL)",
        "Trade on bonding curves",
        "Quick BattleZ - instant battles",
        "Community Battles - user-created battles",
        "Earn rewards for correct predictions",
      ],
      screenshot: "https://wavewarz.com/screenshot.png",
    },
    // SoftwareApplication Schema for app stores
    {
      "@type": "SoftwareApplication",
      name: "WaveWarZ",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // FAQPage Schema for AEO
    {
      "@type": "FAQPage",
      "@id": "https://wavewarz.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WaveWarZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WaveWarZ is a decentralized music battle platform built on Solana blockchain. Users can create battles between artists, vote using SOL tokens, and trade positions on bonding curves to earn rewards.",
          },
        },
        {
          "@type": "Question",
          name: "How do music battles work on WaveWarZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Music battles on WaveWarZ pit two artists against each other. Users vote by purchasing tokens on a bonding curve. The artist with more volume wins, and supporters of the winning artist earn rewards from the losing side's pool.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Quick BattleZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quick BattleZ are instant, short-duration music battles that last minutes. They feature popular tracks and allow rapid trading with smaller stakes, perfect for quick entertainment.",
          },
        },
        {
          "@type": "Question",
          name: "What are Community Battles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Community Battles are user-created battles where anyone can propose a matchup between two artists. The community votes, and battles can run for hours or days with larger prize pools.",
          },
        },
        {
          "@type": "Question",
          name: "How do I earn on WaveWarZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You earn on WaveWarZ by voting for the winning artist in a battle. Buy tokens early on the bonding curve, and if your artist wins, you receive a share of the prize pool automatically.",
          },
        },
      ],
    },
    // HowTo Schema for GEO
    {
      "@type": "HowTo",
      "@id": "https://wavewarz.com/#howto",
      name: "How to Participate in WaveWarZ Music Battles",
      description: "Step-by-step guide to join music battles on WaveWarZ and earn SOL rewards.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Connect Your Wallet",
          text: "Connect your Solana wallet (Phantom, Solflare, or Backpack) to WaveWarZ.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Choose a Battle",
          text: "Browse Quick BattleZ for instant action or Community Battles for longer matchups.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pick Your Artist",
          text: "Select which artist you think will win the battle.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Buy Tokens",
          text: "Purchase tokens on the bonding curve to vote for your chosen artist.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Collect Rewards",
          text: "If your artist wins, claim your share of the prize pool automatically.",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="tracking-normal font-medium" lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
