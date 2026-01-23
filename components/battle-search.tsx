"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

export function BattleSearch() {
  const [query, setQuery] = useState("")

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search battles by artist, track, or battle ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-12 bg-muted border-border text-foreground placeholder:text-muted-foreground text-base"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 border-border text-foreground hover:bg-muted bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">Search</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
