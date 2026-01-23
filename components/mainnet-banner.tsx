import { Sparkles } from "lucide-react"

export function MainnetBanner() {
  return (
    <div className="bg-warning/20 border-b border-warning/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-center text-sm">
          <span className="flex items-center gap-1 font-semibold text-warning">
            <Sparkles className="h-4 w-4" />
            Mainnet Beta
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-muted-foreground">Connect your wallet to Solana Mainnet to BATTLE!</span>
        </div>
      </div>
    </div>
  )
}
