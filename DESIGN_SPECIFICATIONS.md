# WaveWarz Homepage - Design Specifications & Placeholders

## Overview
The homepage has been fully implemented with production copy and all sections. Below are the **image/design placeholders** you need to create with specific dimensions.

---

## IMAGE PLACEHOLDERS TO DESIGN

### 1. Battle Types Section (`components/battle-types.tsx`)

#### Battle Card 1: Main Battles
- **Location:** Battle card image area (top of card)
- **Dimensions:** 400px × 250px
- **Description:** Main battle showcase - professional stage with judges, live streaming setup, championship vibes
- **Suggested:** Professional music battle stage with lighting, judges visible, live audience feel
- **Placeholder Text:** `[PLACEHOLDER: 400x250 - Main battle showcase image]`

#### Battle Card 2: Quick Battles  
- **Location:** Battle card image area (top of card)
- **Dimensions:** 400px × 250px
- **Description:** Fast-paced interface mockup showing rapid battle countdown/charts
- **Suggested:** Clean UI showing 1-minute battle timer, chart visualization, two competing artists
- **Placeholder Text:** `[PLACEHOLDER: 400x250 - Quick battle interface mockup]`

#### Battle Card 3: Community Battles
- **Location:** Battle card image area (top of card)
- **Dimensions:** 400px × 250px
- **Description:** Community event - user-hosted, grassroots vibes
- **Suggested:** Community event setup, multiple users interacting, DIY/accessible feel
- **Placeholder Text:** `[PLACEHOLDER: 400x250 - Community battle showcase]`

---

### 2. Team Section (`components/team-section.tsx`)

#### Founder 1: Candy
- **Location:** Team card image area (top of card)
- **Dimensions:** 300px × 300px
- **Description:** Candy's professional headshot
- **Suggested:** Friendly, approachable music industry professional
- **Placeholder Text:** `[PLACEHOLDER: 300x300 - Candy headshot]`

#### Founder 2: Hurric4n3ike
- **Location:** Team card image area (top of card)
- **Dimensions:** 300px × 300px
- **Description:** Hurric4n3ike's professional headshot
- **Suggested:** Technical/engineering vibe, approachable developer
- **Placeholder Text:** `[PLACEHOLDER: 300x300 - Hurric4n3ike headshot]`

---

### 3. Artist Catalog Section (`components/artist-catalog.tsx`)

#### Artist Card Avatars (Grid of 6 cards)
- **Location:** Top of each artist card in 3x2 grid
- **Dimensions:** 200px × 150px (per card)
- **Description:** Artist profile avatar/artwork for Quick BattleZ roster
- **Suggested:** Album cover art, artist photo, or avatar for each of 6 featured artists
- **Placeholder Text:** `[PLACEHOLDER: 200x150 - Artist avatar]` (×6 cards)

---

### 4. Content & Community Section (`components/content-community.tsx`)

#### Fan Art & Graphics Featured Designs
- **Location:** In the "Fan Art & Graphics" card stats area
- **Dimensions:** Flexible (grid layout for multiple designs)
- **Description:** Featured trading card/jersey/poster designs
- **Suggested:** Show 2-3 sports jersey designs (basketball, soccer) or trading card mockups
- **Placeholder Text:** `[PLACEHOLDER: Featured designs images]`

#### Tournaments & Events Schedule Graphic
- **Location:** In the "Tournaments & Events" card stats area
- **Dimensions:** Flexible (could be a timeline or bracket graphic)
- **Description:** Tournament bracket or schedule visualization
- **Suggested:** Producer Tournament 2025 bracket, seasonal calendar, or competition structure
- **Placeholder Text:** `[PLACEHOLDER: Tournament schedule graphic]`

---

## CONTENT YOU NEED TO PROVIDE

### Social Media Links
Update these in the respective components:
- **Header.tsx:** Social links & navigation
- **Footer.tsx:** Social/community links
- **Team Section:** Founder Twitter/LinkedIn/GitHub profiles
- **Content Community:** Discord, X, YouTube, Instagram links

### External Links to Configure
1. Whitepaper - Update in `components/footer.tsx`
2. Documentation - Update in `components/footer.tsx`
3. Charity Battle Application - Update in `components/charity-highlight.tsx`
4. Smart Contract Explorer - Update in `components/economics-transparency.tsx`
5. Artist Application Form - Update in `components/artist-monetization.tsx` & `components/artist-catalog.tsx`
6. Sponsorship Application - Update in `components/sponsors-section.tsx`

---

## REAL ARTIST CATALOG DATA

Replace mock artist data in `components/artist-catalog.tsx`:
- Artist names (20+)
- Genre tags
- Win rates
- Battle counts
- Earnings totals
- Audius follower counts
- Artist avatars (200×150px each)

**Current mock setup:** Shows 6 placeholder artist cards. Replace with real data from your API.

---

## LIVE DATA INTEGRATIONS

These sections pull mock data and should be connected to your APIs:

### 1. Hero Stats (`components/hero-section.tsx`)
- $2,500+ per match (real-time)
- 60% Artists earning (calculated)
- 337 Battles completed (counter)

### 2. Trust Badges (`components/trust-badges.tsx`)
- Solana Mainnet badge (static)
- 50% Back Protection (static)
- Instant Payouts (static)
- 1.5% Fee (static)

### 3. Social Proof Section (`components/social-proof.tsx`)
- $40,283 Total Volume
- $450 Paid to Artists
- 98 Main Battles
- 337 All Battles
- Testimonials (3 real users)
- Leaderboard (connect to Statz Dashboard)

### 4. Artist Monetization Stats (`components/artist-monetization.tsx`)
- Comparison tables (reference data)
- Real earnings examples
- Payout timing

---

## DESIGN NOTES

### Color Palette (Already Configured)
- **Primary:** `#5eff82` (Neon green)
- **Secondary:** `#0ea5e9` (Cyan)
- **Background:** `#030305` (Deep black)
- **Card:** `#0a0a0f` (Card black)
- **Text:** `#ffffff` (White)
- **Muted:** `#7c8da8` (Gray)

### Typography (Already Configured)
- **Headings:** Serif font (bold, 3xl-6xl)
- **Body:** Sans font (regular, lg)
- **Accents:** Mono font for data

### Responsive Breakpoints
- Mobile: 320px+
- Tablet: 768px+ (`md:`)
- Desktop: 1024px+ (`lg:`)

---

## SUBMISSION CHECKLIST

Before going live, ensure:

- [ ] All 3 battle type card images (400×250px)
- [ ] Founder headshots (2×, 300×300px)
- [ ] Artist catalog avatars (6×, 200×150px)
- [ ] Featured merchandise/design images
- [ ] Tournament schedule graphic
- [ ] All social media links configured
- [ ] All external links (whitepaper, docs, charity, etc.) configured
- [ ] Real artist catalog data integrated
- [ ] Live stats connected to backend
- [ ] Testimonials reviewed and approved
- [ ] All CTAs linked to correct pages

---

## QUESTIONS?

Reference the original production copy in `user_read_only_context/text_attachments/wavewarz-production-copy-(3)-x0IoA.md` for exact wording and messaging guidelines.
