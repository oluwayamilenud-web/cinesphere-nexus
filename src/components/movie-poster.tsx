import { Link } from "@tanstack/react-router";
import { Star, Play } from "lucide-react";
import type { Movie } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function MoviePoster({
  movie,
  size = "md",
  showMatch = false,
  progress,
}: {
  movie: Movie;
  size?: "sm" | "md" | "lg" | "wide";
  showMatch?: boolean;
  progress?: number;
}) {
  const sizes = {
    sm: "w-28 h-40",
    md: "w-36 h-52",
    lg: "w-44 h-64",
    wide: "w-64 h-36",
  };

  return (
    <Link
      to="/movie/$id"
      params={{ id: movie.id }}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-2xl border border-white/5 transition-transform active:scale-[0.97]",
        sizes[size]
      )}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {showMatch && (
        <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-teal backdrop-blur">
          {movie.match}% match
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-2.5">
        <p className="line-clamp-1 text-sm font-bold text-white">{movie.title}</p>
        <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/70">
          <Star className="h-2.5 w-2.5 fill-gold text-gold" />
          <span>{movie.rating}</span>
          <span>•</span>
          <span>{movie.year}</span>
        </div>
      </div>

      {progress !== undefined && (
        <div className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-[var(--gradient-primary)]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      {progress !== undefined && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black">
            <Play className="h-5 w-5 fill-current" />
          </div>
        </div>
      )}
    </Link>
  );
}
