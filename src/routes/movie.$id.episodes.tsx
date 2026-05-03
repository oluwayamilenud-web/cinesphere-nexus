import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play, ChevronDown } from "lucide-react";
import { getMovie } from "@/lib/mock-data";

export const Route = createFileRoute("/movie/$id/episodes")({ component: Episodes });

const episodes = [
  { n: 1, title: "Threshold", d: "52m", w: true, p: 1 },
  { n: 2, title: "The Hollow Hour", d: "48m", w: true, p: 1 },
  { n: 3, title: "Lattice", d: "55m", w: true, p: 0.6 },
  { n: 4, title: "Sleepwalker", d: "50m", w: false, p: 0 },
  { n: 5, title: "Cradle", d: "47m", w: false, p: 0 },
  { n: 6, title: "Ash & Aria", d: "61m", w: false, p: 0 },
];

function Episodes() {
  const { id } = Route.useParams();
  const movie = getMovie(id);
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/movie/$id" params={{ id }} className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Episodes</p>
          <h1 className="text-lg font-bold">{movie.title}</h1>
        </div>
        <button className="flex items-center gap-1 rounded-full glass px-3 py-1.5 text-xs font-semibold">Season 1 <ChevronDown className="h-3 w-3" /></button>
      </div>
      <div className="mt-5 space-y-3 px-5">
        {episodes.map((e) => (
          <Link to="/player/$id" params={{ id: movie.id }} key={e.n} className="flex gap-3 rounded-2xl glass p-3">
            <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl">
              <img src={movie.poster} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
              {e.p > 0 && <div className="absolute inset-x-1 bottom-1 h-0.5 overflow-hidden rounded-full bg-white/30"><div className="h-full bg-violet" style={{ width: `${e.p * 100}%` }} /></div>}
            </div>
            <div className="flex-1 py-1">
              <p className="text-xs text-muted-foreground">EP {e.n} · {e.d}</p>
              <p className="text-sm font-bold">{e.title}</p>
              <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">A masterful continuation that pushes characters past the breaking point.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
