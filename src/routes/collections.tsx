import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { movies } from "@/lib/mock-data";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/collections")({ component: Collections });

const collections = [
  { name: "Cyberpunk Essentials", count: 24, gradient: "from-violet to-fuchsia-500" },
  { name: "Cozy Sunday Watches", count: 18, gradient: "from-amber-400 to-rose-400" },
  { name: "Mind-Benders", count: 31, gradient: "from-teal to-cyan-500" },
  { name: "Best of 2025", count: 50, gradient: "from-rose-500 to-orange-500" },
  { name: "Hidden Gems", count: 42, gradient: "from-emerald-400 to-teal" },
  { name: "Director Spotlights", count: 16, gradient: "from-blue-500 to-violet" },
];

function Collections() {
  return (
    <PhoneShell>
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/discover" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Collections</h1>
      </div>
      <div className="mt-5 space-y-4 px-5">
        {collections.map((c, i) => (
          <Link to="/genre/$name" params={{ name: c.name }} key={c.name} className="block overflow-hidden rounded-2xl">
            <div className={`relative h-32 bg-gradient-to-br ${c.gradient} p-5`}>
              <div className="absolute right-2 top-2 flex -space-x-3">
                {movies.slice(i, i + 3).map((m) => (
                  <img key={m.id} src={m.poster} alt="" className="h-20 w-14 rounded-md border-2 border-background object-cover shadow-xl" />
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Curated</p>
              <p className="mt-1 max-w-[55%] text-xl font-black">{c.name}</p>
              <p className="mt-1 text-xs text-white/80">{c.count} titles</p>
            </div>
          </Link>
        ))}
      </div>
    </PhoneShell>
  );
}
