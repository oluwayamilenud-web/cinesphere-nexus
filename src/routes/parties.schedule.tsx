import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { movies } from "@/lib/mock-data";

export const Route = createFileRoute("/parties/schedule")({ component: Schedule });

function Schedule() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-20">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/parties" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Schedule party</h1>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Pick a movie</p>
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {movies.map((m, i) => (
              <button key={m.id} className={`shrink-0 overflow-hidden rounded-xl border-2 ${i === 0 ? "border-violet" : "border-transparent"}`}>
                <img src={m.poster} alt="" className="h-28 w-20 object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl glass p-4">
          <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Title</p>
          <input defaultValue="Friday Sci-Fi Night" className="w-full bg-transparent text-base font-semibold outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl glass p-4">
            <p className="flex items-center gap-1 text-xs font-bold uppercase text-muted-foreground"><Calendar className="h-3 w-3" /> Date</p>
            <p className="mt-1 text-sm font-bold">Fri, May 8</p>
          </div>
          <div className="rounded-2xl glass p-4">
            <p className="flex items-center gap-1 text-xs font-bold uppercase text-muted-foreground"><Clock className="h-3 w-3" /> Time</p>
            <p className="mt-1 text-sm font-bold">9:00 PM</p>
          </div>
        </div>
        <div className="rounded-2xl glass p-4">
          <p className="text-xs font-bold uppercase text-muted-foreground">Privacy</p>
          <div className="mt-2 flex gap-2">
            {["Public", "Friends", "Invite only"].map((p, i) => (
              <button key={p} className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${i === 1 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{p}</button>
            ))}
          </div>
        </div>
        <Link to="/parties/invite" className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]">Continue · Invite friends</Link>
      </div>
    </div>
  );
}
