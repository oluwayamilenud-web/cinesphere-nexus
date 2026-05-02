import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play, Plus, Share2, Star, Download, Users } from "lucide-react";
import { getMovie, movies } from "@/lib/mock-data";
import { MoviePoster } from "@/components/movie-poster";
import { SectionHeader, ScrollRow } from "@/components/section";

export const Route = createFileRoute("/movie/$id")({
  component: MovieDetail,
});

function MovieDetail() {
  const { id } = Route.useParams();
  const movie = getMovie(id);

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px]">
        <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 pt-12">
          <Link to="/home" className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
              <Plus className="h-4 w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {movie.genres.map((g) => (
              <span key={g} className="rounded-full glass px-2.5 py-0.5 text-[10px] font-semibold">{g}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black leading-tight">{movie.title}</h1>
          <div className="mt-2 flex items-center gap-3 text-xs text-white/80">
            <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-gold text-gold" /> {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="rounded bg-teal/20 px-1.5 py-0.5 text-[10px] font-bold text-teal">{movie.match}% match</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="-mt-2 px-5">
        <div className="flex gap-2">
          <Link to="/player/$id" params={{ id: movie.id }} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]">
            <Play className="h-4 w-4 fill-current" /> Watch Now
          </Link>
          <Link to="/parties/create" className="flex items-center justify-center gap-1.5 rounded-2xl glass-strong px-4 py-4 text-sm font-semibold">
            <Users className="h-4 w-4" /> Party
          </Link>
          <button className="flex items-center justify-center rounded-2xl glass-strong px-4 py-4">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Synopsis */}
      <section className="mt-6 px-5">
        <h3 className="mb-2 text-sm font-bold text-muted-foreground">SYNOPSIS</h3>
        <p className="text-sm leading-relaxed">{movie.synopsis} A masterful blend of practical effects and AI-augmented cinematography sets a new bar for what visual storytelling can be in 2025.</p>
      </section>

      {/* Cast */}
      <section className="mt-6 px-5">
        <h3 className="mb-3 text-sm font-bold text-muted-foreground">CAST</h3>
        <div className="scrollbar-hide flex gap-3 overflow-x-auto">
          {["Aria Vance", "Kel Sato", "Imani Brooks", "Theo Lin", "Zara Patel"].map((n) => (
            <div key={n} className="shrink-0 text-center">
              <div className="h-16 w-16 rounded-full bg-[var(--gradient-aurora)]" />
              <p className="mt-1 text-[11px] font-semibold">{n.split(" ")[0]}</p>
              <p className="text-[10px] text-muted-foreground">{n.split(" ")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More like this */}
      <section className="mt-7">
        <SectionHeader title="More like this" />
        <ScrollRow>
          {movies.filter((m) => m.id !== movie.id).map((m) => <MoviePoster key={m.id} movie={m} size="md" />)}
        </ScrollRow>
      </section>

      {/* Reviews */}
      <section className="mt-7 px-5">
        <SectionHeader title="Sphere reviews" action={<button className="text-xs text-teal">Write one</button>} />
        <div className="space-y-3 px-0">
          {[
            { user: "novaframes", text: "Visually overwhelming in the best way. The score deserves its own award.", stars: 5 },
            { user: "lyralens", text: "Slower second act but the payoff is unreal. Watch it on the biggest screen you have.", stars: 4 },
          ].map((r) => (
            <div key={r.user} className="rounded-2xl glass p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">@{r.user}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < r.stars ? "fill-gold text-gold" : "text-muted-foreground"}`} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
