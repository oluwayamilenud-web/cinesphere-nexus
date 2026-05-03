import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { getMovie } from "@/lib/mock-data";

export const Route = createFileRoute("/movie/$id/trailers")({ component: Trailers });

function Trailers() {
  const { id } = Route.useParams();
  const movie = getMovie(id);
  const clips = [
    { t: "Official Trailer", d: "2:31" },
    { t: "Teaser", d: "0:48" },
    { t: "Behind the Scenes", d: "5:12" },
    { t: "Cast Interview", d: "8:04" },
    { t: "VFX Breakdown", d: "4:22" },
  ];
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/movie/$id" params={{ id }} className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <div>
          <p className="text-xs text-muted-foreground">Trailers & Clips</p>
          <h1 className="text-lg font-bold">{movie.title}</h1>
        </div>
      </div>
      <div className="mt-5 space-y-3 px-5">
        {clips.map((c, i) => (
          <button key={c.t} className="block w-full overflow-hidden rounded-2xl glass">
            <div className="relative aspect-video">
              <img src={movie.poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold">{c.d}</span>
            </div>
            <div className="p-3 text-left">
              <p className="text-sm font-bold">{c.t}</p>
              <p className="text-xs text-muted-foreground">{1200 - i * 180}k views</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
