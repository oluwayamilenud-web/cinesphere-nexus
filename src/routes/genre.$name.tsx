import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { movies, genres } from "@/lib/mock-data";
import { MoviePoster } from "@/components/movie-poster";

export const Route = createFileRoute("/genre/$name")({ component: Genre });

function Genre() {
  const { name } = Route.useParams();
  const meta = genres.find((g) => g.name.toLowerCase() === name.toLowerCase()) ?? genres[0];

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-20">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-aurora)] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <Link to="/discover" className="absolute left-5 top-12 flex h-9 w-9 items-center justify-center rounded-full glass-strong">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="absolute inset-x-0 bottom-4 px-5">
          <span className="text-4xl">{meta.icon}</span>
          <h1 className="text-3xl font-black">{meta.name}</h1>
          <p className="text-xs text-muted-foreground">{meta.count} titles · curated by CineSphere AI</p>
        </div>
      </div>
      <div className="scrollbar-hide flex gap-2 overflow-x-auto px-5 py-4">
        {["Trending", "New", "Top Rated", "Hidden Gems", "Under 90 min"].map((f) => (
          <button key={f} className="shrink-0 rounded-full glass px-4 py-1.5 text-xs font-semibold">{f}</button>
        ))}
        <button className="shrink-0 rounded-full bg-violet/20 px-3 py-1.5 text-violet"><SlidersHorizontal className="h-3.5 w-3.5" /></button>
      </div>
      <div className="grid grid-cols-2 gap-3 px-5">
        {[...movies, ...movies].map((m, i) => (
          <MoviePoster key={i} movie={m} size="lg" />
        ))}
      </div>
    </div>
  );
}
