import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, Star } from "lucide-react";
import { movies } from "@/lib/mock-data";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/new-releases")({ component: NewReleases });

function NewReleases() {
  return (
    <PhoneShell>
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/discover" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <div className="flex-1">
          <h1 className="text-2xl font-black">New Releases</h1>
          <p className="text-xs text-muted-foreground">This week on CineSphere</p>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-violet/20 text-violet"><Bell className="h-4 w-4" /></button>
      </div>
      <div className="scrollbar-hide mt-5 flex gap-2 overflow-x-auto px-5">
        {["This Week", "Coming Soon", "On Streaming", "In Theaters"].map((t, i) => (
          <button key={t} className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-5 space-y-4 px-5">
        {movies.map((m, i) => (
          <Link to="/movie/$id" params={{ id: m.id }} key={m.id} className="flex gap-3 rounded-2xl glass p-3">
            <img src={m.poster} alt="" className="h-32 w-22 rounded-xl object-cover" style={{ width: 88 }} />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-teal">{i === 0 ? "OUT NOW" : `IN ${i + 2} DAYS`}</p>
              <p className="text-base font-bold">{m.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{m.genres.join(" · ")}</p>
              <p className="mt-1 flex items-center gap-1 text-xs"><Star className="h-3 w-3 fill-gold text-gold" /> {m.rating} · {m.duration}</p>
              <p className="mt-2 line-clamp-2 text-[11px] text-muted-foreground">{m.synopsis}</p>
            </div>
          </Link>
        ))}
      </div>
    </PhoneShell>
  );
}
