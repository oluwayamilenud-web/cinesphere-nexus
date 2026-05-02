import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Search, Sparkles, Play, ChevronRight } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { MoviePoster } from "@/components/movie-poster";
import { SectionHeader, ScrollRow } from "@/components/section";
import { movies, continueWatching, genres, moods, avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [{ title: "Home — CineSphere" }],
  }),
  component: Home,
});

function Home() {
  const featured = movies[2];

  return (
    <PhoneShell>
      {/* Top bar */}
      <header className="sticky top-0 z-30 px-5 pt-4 pb-3 backdrop-blur-xl" style={{ background: "linear-gradient(to bottom, oklch(0.13 0.03 270 / 0.9), oklch(0.13 0.03 270 / 0.7))" }}>
        <div className="flex items-center justify-between">
          <Link to="/profile" className="flex items-center gap-2.5">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-violet/50">
              <img src={avatars} alt="" className="h-full w-full scale-150 object-cover object-[20%_20%]" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground">Welcome back</p>
              <p className="text-sm font-bold leading-tight">Nova Reyes</p>
            </div>
          </Link>
          <div className="flex gap-2">
            <Link to="/search" className="flex h-10 w-10 items-center justify-center rounded-full glass">
              <Search className="h-4 w-4" />
            </Link>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full glass">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-teal" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured hero */}
      <section className="px-5 pt-2">
        <Link to="/movie/$id" params={{ id: featured.id }} className="relative block overflow-hidden rounded-3xl">
          <img src={featured.poster} alt={featured.title} className="h-[420px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-bold">
            <span className="text-teal">⚡</span> FEATURED TODAY
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {featured.genres.map((g) => (
                <span key={g} className="rounded-full glass px-2.5 py-0.5 text-[10px] font-semibold">{g}</span>
              ))}
            </div>
            <h1 className="text-3xl font-black leading-tight">{featured.title}</h1>
            <p className="mt-1 line-clamp-2 text-xs text-white/70">{featured.synopsis}</p>
            <div className="mt-3 flex items-center gap-2">
              <Link to="/player/$id" params={{ id: featured.id }} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white py-3 text-sm font-bold text-black">
                <Play className="h-4 w-4 fill-current" /> Watch
              </Link>
              <Link to="/movie/$id" params={{ id: featured.id }} className="rounded-2xl glass-strong px-5 py-3 text-sm font-semibold">
                Details
              </Link>
            </div>
          </div>
        </Link>
      </section>

      {/* AI prompt */}
      <Link to="/ai" className="mx-5 mt-5 flex items-center gap-3 rounded-2xl border border-violet/30 bg-violet/10 p-3.5 glow-violet">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-primary)]">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold">Ask Sphere AI</p>
          <p className="text-[11px] text-muted-foreground">"What should I watch tonight?"</p>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>

      {/* Continue watching */}
      <section className="mt-7">
        <SectionHeader
          title="Continue watching"
          action={<Link to="/profile" className="text-xs text-teal">See all</Link>}
        />
        <ScrollRow>
          {continueWatching.map((m) => (
            <MoviePoster key={m.id} movie={m} size="wide" progress={m.progress} />
          ))}
        </ScrollRow>
      </section>

      {/* Trending */}
      <section className="mt-7">
        <SectionHeader title="Trending now" subtitle="What the Sphere is watching" />
        <ScrollRow>
          {movies.map((m, i) => (
            <div key={m.id} className="relative shrink-0">
              <MoviePoster movie={m} size="md" />
              <span className="absolute -left-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-xs font-black shadow-lg">
                {i + 1}
              </span>
            </div>
          ))}
        </ScrollRow>
      </section>

      {/* Recommended */}
      <section className="mt-7">
        <SectionHeader title="Picked for you" subtitle="Based on your taste profile" />
        <ScrollRow>
          {[...movies].reverse().map((m) => (
            <MoviePoster key={m.id} movie={m} size="md" showMatch />
          ))}
        </ScrollRow>
      </section>

      {/* Moods */}
      <section className="mt-7 px-5">
        <SectionHeader title="By mood" subtitle="What are you feeling?" />
        <div className="grid grid-cols-2 gap-3 px-0">
          {moods.map((m) => (
            <button key={m.name} className={`relative h-24 overflow-hidden rounded-2xl bg-gradient-to-br ${m.color} p-4 text-left`}>
              <p className="font-bold">{m.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="mt-7">
        <SectionHeader title="Browse genres" />
        <div className="grid grid-cols-4 gap-2 px-5">
          {genres.map((g) => (
            <button key={g.name} className="flex flex-col items-center gap-1 rounded-2xl glass p-3">
              <span className="text-2xl">{g.icon}</span>
              <span className="text-[10px] font-semibold">{g.name}</span>
            </button>
          ))}
        </div>
      </section>
    </PhoneShell>
  );
}
