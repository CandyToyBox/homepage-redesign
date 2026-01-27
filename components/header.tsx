"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wallet, Menu, FileText, BookOpen, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isConnected, setIsConnected] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#030305]/90 backdrop-blur-lg border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/icon.png" alt="WaveWarZ" width={36} height={36} className="rounded-lg" />

            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/quick-battles"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Quick BattleZ
              </Link>
              <Link
                href="/v2/community/create"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Self-Host
              </Link>
              <Link
                href="/community/self-host"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Statz
              </Link>
              <Link
                href="/whitepaper"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <FileText className="h-3.5 w-3.5" />
                Whitepaper
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Docs
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button
              id="wallet-connect"
              onClick={() => setIsConnected(!isConnected)}
              className={
                isConnected
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(94,255,130,0.3)]"
                  : "bg-[#0a0a0f] hover:bg-[#12131a] text-foreground border border-[#1a1d26]"
              }
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isConnected ? "Bx3...k9F" : "Connect Wallet"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#1a1d26] space-y-2">
            <Link href="/quick-battles" className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg">
              Quick BattleZ
            </Link>
            <Link href="/v2/community/create" className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg">
              Community Battles
            </Link>
            <Link href="/community/self-host" className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg">
              Self-Host a Battle
            </Link>
            <Link
              href="/whitepaper"
              className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Whitepaper
            </Link>
            <Link
              href="/docs"
              className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </Link>
            <Link href="/charity" className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg">
              Charity Battles
            </Link>
            <Link href="/sponsors/apply" className="block px-3 py-2 text-foreground hover:bg-[#0a0a0f] rounded-lg">
              Become a Sponsor
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
