import { Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function YoutubeEmbed() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 text-balance">
            Watch Past{" "}
            <span className="bg-gradient-to-r from-youtube-red to-primary bg-clip-text text-transparent">
              Livestreamed Battles
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Catch up on epic battles you missed. See how the community voted and who came out on top.
          </p>
        </div>

        {/* YouTube Channel Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1a1d26] bg-[#0a0a0f]">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=WaveWarZ"
              title="WaveWarZ YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Fallback overlay in case embed doesn't load */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0f]/90 opacity-0 hover:opacity-100 transition-opacity">
            <Youtube className="h-16 w-16 text-youtube-red mb-4" />
            <p className="text-foreground font-semibold mb-4">Watch on YouTube</p>
            <a href="https://youtube.com/@WaveWarZ" target="_blank" rel="noopener noreferrer">
              <Button className="bg-youtube-red text-white hover:bg-youtube-red/90">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Channel
              </Button>
            </a>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-8 text-center">
          <a href="https://youtube.com/@WaveWarZ?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-youtube-red text-white hover:bg-youtube-red/90 shadow-[0_0_30px_rgba(255,0,0,0.3)]"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to @WaveWarZ
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
