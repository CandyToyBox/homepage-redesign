# WaveWarz Project Documentation

## Overview
WaveWarz is a **live music trading platform on Solana** where musicians earn from fan engagement and traders speculate on music battles. It's a decentralized music discovery and entertainment platform.

**Core Mission:** Musicians finally get paid fairly for their music. Traders support artists AND earn SOL.

**Key Differentiator:** Artists are paid per trade, not per play. Streaming pennies become SOL rewards.

---

## Platform Mechanics

### Artist Earnings
- **1% of every trade** on their music goes directly to the artist
- Paid **instantly in SOL** to their connected wallet
- **Settlement bonuses:** +5% if they win, +2% if they lose (from loser's pool)
- No middleman, no waiting 90 days like streaming platforms

### Fee Structure
- **1%** goes to the artist whose music is being traded
- **0.5%** goes to the platform
- **Total: 1.5% fees** (artists & traders retain 98.5%)

### Pool Distribution (When Battle Ends)
When a battle ends, the loser's pool redistributes:
- **40%** to winning traders (pro-rata based on tokens held)
- **50%** to losing traders (pro-rata) ← This is the "downside protection"
- **5%** bonus to winning artist
- **2%** bonus to losing artist
- **3%** to platform

### Trading Mechanics
- **Bonding curve** - trade tokens like stocks during the battle
- **1-minute start buffer** before trading opens
- **Quick BattleZ:** 30-second final trading window on 2nd song
- **Winner determined by:** TVL (Total Value Locked) in charts, judges (Main Events), community poll

---

## IMPORTANT: Terminology Guidelines

### DO NOT USE (Legally Risky)
- ❌ "50% Back Guarantee" - implies a promise/guarantee
- ❌ "You get 50% back" - sounds like a refund
- ❌ "Guarantee" anything about returns
- ❌ "Investment" - we're not an investment platform

### USE INSTEAD
- ✅ "50% Downside Protection"
- ✅ "Losing side retains 50% of their trading pool"
- ✅ "Limited risk on every battle"
- ✅ "50% max loss per battle"
- ✅ "Speculation" not "investment"

### Why This Matters
If someone sells their position, re-enters, and loses more than 50% total, we don't want to explain blockchain math. "Downside protection" is accurate - the losing POOL retains 50%, distributed pro-rata.

---

## Three Battle Types

### 1. Main Events (Championship Battles)
- **Format:** 3 rounds, 6 songs per artist, 12 songs total
- **Duration:** ~60 minutes
- **Production:** Professional livestream, judges panel
- **Winner Decided By:** Charts (TVL) + Judges + Community Poll
- **Artist Earnings:** $200-400 average per battle
- **Trading Pools:** $600-1,600 average
- **Schedule:** Scheduled events, professionally produced

### 2. Quick BattleZ (Automated Battles)
- **Format:** Song vs song from Audius catalog
- **Duration:** 2-3 songs, few minutes
- **Production:** Automated, no permission required
- **Winner Decided By:** Charts (TVL) only
- **Artist Earnings:** $10-50 average per battle
- **Trading Pools:** $3-15 average (accessible entry)
- **Schedule:** Every few minutes, Live sessions M-F 8:30 PM EST
- **Key Feature:** Any artist can add music, any trader can launch

### 3. Community Battles (DIY Battles)
- **Format:** User picks duration, format, music
- **Duration:** Variable (user-defined)
- **Production:** Hosted by streamers, X Spaces hosts, artists, fans
- **Winner Decided By:** Charts + Community voting
- **Artist Earnings:** 1% trading fees + settlement bonus
- **Trading Pools:** $100-2,000+ variable
- **Key Feature:** 100% of fees and bonuses go to host

---

## Brand Messaging

### Taglines & Headlines
- "Music Battles That Pay. Trade. Win. Repeat."
- "Paid per trade, not play."
- "Streaming pennies become SOL rewards."
- "The new music market."
- "Musicians finally get paid."

### Value Props (Above the Fold)
1. Built on Solana Mainnet
2. Artists Earn 1% Per Trade
3. Instant SOL Payouts

### Secondary Value Props
- 50% Downside Protection
- Transparent on-chain transactions
- No KYC required
- No waiting for payouts

### Comparison Points
vs **pump.fun:** 100% loss possible, volatile bags → WaveWarz has 50% max loss, paid in SOL
vs **Polymarket:** Weeks/months to settle, boring news → WaveWarz settles in minutes, live entertainment
vs **Spotify:** $0.003/stream, months to pay → WaveWarz 1% per trade, instant payout

---

## Technical Stack

- **Framework:** Next.js 16.0.10 (App Router)
- **Blockchain:** Solana Mainnet
- **Music Source:** Audius SDK (for Quick BattleZ catalog)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Package Manager:** npm (pnpm lock file exists but pnpm not installed)

### Key Directories
```
/app - Next.js app router pages
/components - React components
/public/images - Logo and static assets
/styles - Global CSS
```

### Important Files
- `app/page.tsx` - Main homepage
- `components/hero-section.tsx` - Hero with logo and CTAs
- `components/battle-types.tsx` - Three battle type descriptions
- `components/stats-section.tsx` - Embedded Statz analytics iframe
- `components/trust-badges.tsx` - Value prop badges
- `components/risk-protection.tsx` - 50% downside protection explanation
- `components/faq-section.tsx` - FAQ for musicians & traders

---

## External Links

- **Analytics Dashboard:** https://analytics-wave-warz.vercel.app/
- **Solana Program:** (add Solscan link when available)
- **YouTube:** https://youtube.com/@WaveWarZ
- **Twitter:** https://twitter.com/WaveWarZ
- **Discord:** https://discord.gg/wavewarz

---

## Design System

### Colors
- **Primary (Neon Green):** `#5eff82`
- **Secondary (Cyan):** `#0ea5e9`
- **Background:** `#030305` (deep black)

### Logo
- Main logo: `/public/images/wavewarz-logo.png` (3D gradient blue/green)
- Icon: `/public/images/wavewarz-icon.png`
- Monochrome: `/public/images/monochrome-20wavewarz-20logo.png`

---

## Content Sections (Homepage Flow)

1. HypeBanner (announcement bar)
2. MainnetBanner
3. Header (nav)
4. **HeroSection** (logo, headline, CTAs)
5. **TrustBadges** (4 value props with descriptions)
6. LivestreamCTA (LIVE M-F 8:30 PM EST)
7. TabsSection (Quick BattleZ / Community toggle)
8. WhatIsWaveWarz
9. RiskProtection (50% downside protection explanation)
10. BattleTypes (Three Ways to Battle)
11. HowItWorks (5 steps)
12. SocialProof (stats + testimonials)
13. **StatsSection** (embedded analytics iframe)
14. ArtistMonetization (Spotify comparison)
15. EconomicsTransparency
16. ArtistCatalog
17. CharityHighlight
18. SponsorsSection
19. TeamSection
20. FeaturedBattle
21. PastBattles
22. YoutubeEmbed
23. FAQSection (split: Musicians / Traders)
24. ArtistSignup
25. Footer

---

## Common Copy Patterns

### For Musicians
- "Earn 1% of every trade on your music"
- "Paid per trade, not per play"
- "Instant SOL payouts"
- "Your music can battle unlimited times"
- "More promotion = More battles = More earnings"

### For Traders
- "50% downside protection"
- "Losing side retains 50% of their pool"
- "Support artists you believe in"
- "Instant SOL settlement"
- "Trade both sides to minimize risk"

---

## Session Notes

### 2025-01-23 Updates
- Added new 3D WaveWarz logo to hero
- Updated all copy to remove "50% Back Guarantee" → "50% Downside Protection"
- Removed "1.5% Total Fees" badge → replaced with "Artists Earn 1% Per Trade"
- Updated hero subheading to focus on artist earnings
- Fixed hydration error in featured-battle.tsx (Date.now() issue)
- Implemented comprehensive copy revisions from Claude in Chrome session
- Removed ContentCommunity section as requested

---

## Future Considerations

- Add Solana logo to footer (placeholder ready)
- Add Audius logo to footer (placeholder ready)
- Add Phantom logo to footer (placeholder ready)
- Add actual Solscan link for WaveWarz program
- Update testimonials with real user data from Statz
- Style Statz iframe to look more native (currently 500px height)
