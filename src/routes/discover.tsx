import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Search as SearchIcon, Sparkles, TrendingUp, Flame } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { MoviePoster } from "@/components/movie-poster";
import { SectionHeader, ScrollRow } from "@/components/section";
import { movies, genres, moods } from "@/lib/mock-data";

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [{ title: "Discover — CineSphere" }] }),
  component: Discover,
});

function Discover() {
  return (
    <PhoneShell>
      <header className="px-5 pt-6 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Explore the Sphere</p>
            <h1 className="text-3xl font-black"><span className="gradient-aurora-text">Discover</span></h1>
          </div>
          <Link to="/search" className="flex h-11 w-11 items-center justify-center rounded-full glass">
            <SearchIcon className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* AI Discovery banner */}
      <Link to="/ai" className="mx-5 mt-2 block overflow-hidden rounded-3xl border border-violet/30 bg-violet/10 p-5 glow-violet">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gradient-primary)]">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-teal">SPHERE AI</p>
            <p className="text-base font-bold">Find your next obsession</p>
            <p className="text-xs text-muted-foreground">Describe a vibe, mood, or scene</p>
          </div>
        </div>
      </Link>

      {/* Top 10 */}
      <section className="mt-7">
        <SectionHeader title="🔥 Top 10 today" />
        <ScrollRow>
          {movies.slice(0, 6).map((m, i) => (
            <div key={m.id} className="relative shrink-0">
              <MoviePoster movie={m} size="lg" />
              <span className="pointer-events-none absolute -left-3 bottom-2 text-7xl font-black leading-none text-background drop-shadow-[0_0_8px_oklch(0.62_0.27_295)]" style={{ WebkitTextStroke: "2px var(--violet)" }}>
                {i + 1}
              </span>
            </div>
          ))}
        </ScrollRow>
      </section>

      {/* New releases */}
      <section className="mt-7">
        <SectionHeader title="New & noteworthy" subtitle="Fresh from the Sphere" action={<Flame className="h-4 w-4 text-orange-400" />} />
        <ScrollRow>
          {[...movies].reverse().map((m) => <MoviePoster key={m.id} movie={m} size="md" />)}
        </ScrollRow>
      </section>

      {/* Browse by mood */}
      <section className="mt-7 px-5">
        <SectionHeader title="Browse by mood" />
        <div className="grid grid-cols-2 gap-3">
          {moods.map((m) => (
            <div key={m.name} className={`relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br ${m.color} p-4 text-left shadow-lg`}>
              <p className="text-base font-black">{m.name}</p>
              <p className="text-[10px] text-white/80">Tap to explore</p>
            </div>
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="mt-7 px-5">
        <SectionHeader title="All genres" />
        <div className="grid grid-cols-2 gap-3">
          {genres.map((g) => (
            <button key={g.name} className="flex items-center justify-between rounded-2xl glass p-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{g.icon}</span>
                <span className="text-sm font-bold">{g.name}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{g.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Editor's picks */}
      <section className="mt-7">
        <SectionHeader title="Editor's picks" subtitle="Hand-curated by Sphere staff" action={<TrendingUp className="h-4 w-4 text-teal" />} />
        <ScrollRow>
          {movies.map((m) => <MoviePoster key={m.id} movie={m} size="md" showMatch />)}
        </ScrollRow>
      </section>
    </PhoneShell>
  );
}
