import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search as SearchIcon, Mic, X, TrendingUp } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { MoviePoster } from "@/components/movie-poster";
import { movies, genres } from "@/lib/mock-data";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [{ title: "Search — CineSphere" }] }),
  component: SearchPage,
});

function SearchPage() {
  return (
    <PhoneShell>
      <header className="sticky top-0 z-30 backdrop-blur-xl px-5 pt-4 pb-3" style={{ background: "linear-gradient(to bottom, oklch(0.13 0.03 270 / 0.9), oklch(0.13 0.03 270 / 0.5))" }}>
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex h-10 w-10 items-center justify-center rounded-full glass">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex flex-1 items-center gap-2 rounded-2xl glass px-4 py-3">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
            <input
              defaultValue="neon"
              placeholder="Movies, people, scenes..."
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="text-muted-foreground"><X className="h-3.5 w-3.5" /></button>
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
              <Mic className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Filter chips */}
        <div className="mt-3 scrollbar-hide flex gap-2 overflow-x-auto">
          {["All", "Movies", "Shows", "People", "Scenes", "Posts"].map((f, i) => (
            <button key={f} className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass text-muted-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Trending */}
      <section className="mt-4 px-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <TrendingUp className="h-3.5 w-3.5" /> TRENDING SEARCHES
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Cyberpunk 2077", "Best of 2025", "Christopher Nolan", "Cozy fantasy", "Plot twist endings", "Ashes of Aurora"].map((s) => (
            <button key={s} className="rounded-full glass px-3 py-1.5 text-xs">{s}</button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mt-6 px-5">
        <h3 className="mb-3 text-sm font-bold text-muted-foreground">RESULTS · 24 found</h3>
        <div className="grid grid-cols-2 gap-3">
          {movies.map((m) => (
            <div key={m.id} className="space-y-1">
              <MoviePoster movie={m} size="lg" />
            </div>
          ))}
        </div>
      </section>

      {/* Browse */}
      <section className="mt-7 px-5">
        <h3 className="mb-3 text-sm font-bold text-muted-foreground">BROWSE BY GENRE</h3>
        <div className="grid grid-cols-2 gap-3">
          {genres.slice(0, 6).map((g) => (
            <button key={g.name} className="flex items-center gap-3 rounded-2xl glass p-3 text-left">
              <span className="text-2xl">{g.icon}</span>
              <div>
                <p className="text-sm font-bold">{g.name}</p>
                <p className="text-[10px] text-muted-foreground">{g.count} titles</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </PhoneShell>
  );
}
