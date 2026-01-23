import Link from "next/link"
import Image from "next/image"
import { Youtube, Twitter, MessageCircle, FileText, BookOpen, Heart, Handshake } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Quick BattleZ", href: "/quick-battles" },
    { label: "Community Battles", href: "/v2/community/create" },
    { label: "Self-Host a Battle", href: "/community/self-host" },
    { label: "Create Battle", href: "/audius/search" },
  ],
  resources: [
    { label: "Whitepaper", href: "/whitepaper", icon: FileText },
    { label: "Documentation", href: "/docs", icon: BookOpen },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  community: [
    { label: "Charity Battles", href: "/charity", icon: Heart },
    { label: "Become a Sponsor", href: "/sponsors/apply", icon: Handshake },
    { label: "Artist Signup", href: "/artists/signup" },
    { label: "Discord", href: "https://discord.gg/wavewarz", icon: MessageCircle },
  ],
}

const socials = [
  { label: "YouTube", href: "https://youtube.com/@WaveWarZ", icon: Youtube },
  { label: "Twitter", href: "https://twitter.com/WaveWarZ", icon: Twitter },
  { label: "Discord", href: "https://discord.gg/wavewarz", icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-[#1a1d26] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/icon.png" alt="WaveWarZ" width={44} height={44} className="rounded-lg" />
              <Image
                src="/images/monochrome-20wavewarz-20logo.png"
                alt="WaveWarZ"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Musicians finally get paid fairly for their music. Traders support artists AND earn SOL.
            </p>
            <a
              href="https://solscan.io/account/wavewarz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Built on Solana →
            </a>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0a0a0f] border border-[#1a1d26] text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1d26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WaveWarZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
