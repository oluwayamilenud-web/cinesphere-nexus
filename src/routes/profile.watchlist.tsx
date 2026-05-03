import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Filter } from "lucide-react";
import { movies } from "@/lib/mock-data";
import { MoviePoster } from "@/components/movie-poster";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/profile/watchlist")({ component: Watchlist });

function Watchlist() {
  return (
    <PhoneShell>
      <div className="flex items-center justify-between px-5 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
          <div>
            <h1 className="text-2xl font-black">Watchlist</h1>
            <p className="text-xs text-muted-foreground">{movies.length * 3} titles</p>
          </div>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full glass"><Filter className="h-4 w-4" /></button>
      </div>
      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto px-5">
        {["All", "Movies", "Series", "Documentaries", "Animated"].map((c, i) => (
          <button key={c} className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 px-5">
        {[...movies, ...movies, ...movies].map((m, i) => <MoviePoster key={i} movie={m} size="lg" />)}
      </div>
    </PhoneShell>
  );
}
