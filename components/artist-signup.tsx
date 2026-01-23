"use client"

import { Button } from "@/components/ui/button"
import { X, Music, Sparkles } from "lucide-react"
import { useEffect } from "react"

interface ArtistSignupProps {
  showForm: boolean
  onToggleForm: () => void
}

export function ArtistSignup({ showForm, onToggleForm }: ArtistSignupProps) {
  // Load Tally script when form opens
  useEffect(() => {
    if (showForm) {
      const script = document.createElement("script")
      script.src = "https://tally.so/widgets/embed.js"
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showForm])

  return (
    <>
      {/* Artist Signup Section */}
      <section className="py-16 bg-gradient-to-t from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Music className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground">Are You an Artist?</h2>
            <p className="text-muted-foreground text-lg">
              Join WaveWarZ and let your fans battle for your tracks. Connect your music and start earning SOL.
            </p>

            <Button
              onClick={onToggleForm}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(94,255,130,0.4)] text-lg px-8 py-6 h-auto font-semibold"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Sign Up as an Artist
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onToggleForm} />

          {/* Modal Content */}
          <div className="relative bg-card rounded-2xl border border-border shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Artist Sign Up</h3>
              <button
                onClick={onToggleForm}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <div className="p-6 h-[600px]">
              {/* Tally form placeholder - in production this would load the actual Tally embed */}
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Music className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Artist registration form loading...</p>
                  <p className="text-sm text-muted-foreground">Powered by Tally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
