import type { Metadata } from "next"
import { SkillsGrid } from "@/components/browse/skills-grid"
import { SkillsFilters } from "@/components/browse/skills-filters"
import { SkillsSearch } from "@/components/browse/skills-search"

export const metadata: Metadata = {
  title: "Browse Skills - SkillShare",
  description: "Explore hundreds of skills from expert teachers",
}

export default function BrowsePage() {
  return (
    <div className="w-full py-8 md:py-12 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse Skills</h1>
            <p className="text-lg text-muted-foreground">
              Discover expert teachers and add skills to your learning cart
            </p>
          </div>

          <SkillsSearch />

          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="space-y-6">
              <SkillsFilters />
            </aside>

            <main>
              <SkillsGrid />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
