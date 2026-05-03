import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Trash2 } from "lucide-react";
import { movies } from "@/lib/mock-data";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/profile/history")({ component: History });

const groups = [
  { label: "Today", items: [{ m: 0, time: "8:42 PM", p: 0.42 }, { m: 2, time: "3:18 PM", p: 1 }] },
  { label: "Yesterday", items: [{ m: 1, time: "11:02 PM", p: 1 }, { m: 4, time: "9:15 PM", p: 0.71 }] },
  { label: "This week", items: [{ m: 3, time: "Sun", p: 1 }, { m: 5, time: "Sat", p: 0.18 }, { m: 0, time: "Fri", p: 1 }] },
];

function History() {
  return (
    <PhoneShell>
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Watch history</h1>
      </div>
      <div className="mt-5 space-y-6 px-5">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">{g.label}</p>
            <div className="space-y-2">
              {g.items.map((it, i) => {
                const m = movies[it.m];
                return (
                  <div key={i} className="flex gap-3 rounded-2xl glass p-3">
                    <Link to="/movie/$id" params={{ id: m.id }} className="shrink-0">
                      <img src={m.poster} alt="" className="h-20 w-14 rounded-lg object-cover" />
                    </Link>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{m.title}</p>
                      <p className="text-[11px] text-muted-foreground">{it.time} · {it.p === 1 ? "Completed" : `${Math.round(it.p * 100)}% watched`}</p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full bg-[var(--gradient-primary)]" style={{ width: `${it.p * 100}%` }} />
                      </div>
                    </div>
                    <button><Trash2 className="h-4 w-4 text-muted-foreground" /></button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}
