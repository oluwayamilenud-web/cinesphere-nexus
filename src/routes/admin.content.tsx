import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus, MoreHorizontal, Eye, Star } from "lucide-react";
import { movies } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/content")({ component: Content });

function Content() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center justify-between px-5 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
          <h1 className="text-2xl font-black">Content</h1>
        </div>
        <button className="flex h-9 items-center gap-1 rounded-full bg-[var(--gradient-primary)] px-3 text-xs font-bold">
          <Plus className="h-3 w-3" /> Add
        </button>
      </div>
      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto px-5">
        {["Live", "Scheduled", "Draft", "Archived"].map((t, i) => (
          <button key={t} className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-5 space-y-2 px-5">
        {movies.map((m, i) => (
          <div key={m.id} className="flex gap-3 rounded-2xl glass p-3">
            <img src={m.poster} alt="" className="h-20 w-14 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <p className="text-sm font-bold">{m.title}</p>
                <button><MoreHorizontal className="h-4 w-4" /></button>
              </div>
              <p className="text-[11px] text-muted-foreground">{m.year} · {m.duration}</p>
              <div className="mt-2 flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {(420 - i * 50).toLocaleString()}k</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-gold text-gold" /> {m.rating}</span>
                <span className="rounded-full bg-teal/20 px-2 py-0.5 font-bold text-teal">Live</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
