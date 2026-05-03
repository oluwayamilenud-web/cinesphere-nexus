import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Trash2 } from "lucide-react";

export const Route = createFileRoute("/ai/history")({ component: History });

const sessions = [
  { q: "Mind-bending under 2 hours", time: "Today · 8:42 PM", n: 6 },
  { q: "Cozy fantasy with great score", time: "Today · 3:12 PM", n: 4 },
  { q: "A heist movie I haven't seen", time: "Yesterday", n: 8 },
  { q: "Find the warehouse scene from Midnight Circuit", time: "Yesterday", n: 1 },
  { q: "Best A24 films of 2024", time: "2 days ago", n: 11 },
  { q: "Movies like The Neon Veil", time: "5 days ago", n: 7 },
];

function History() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/ai" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">AI History</h1>
      </div>
      <Link to="/ai" className="mx-5 mt-4 flex items-center gap-3 rounded-2xl bg-[var(--gradient-primary)] p-4 shadow-[var(--shadow-glow-violet)]">
        <Sparkles className="h-5 w-5" />
        <p className="flex-1 text-sm font-bold">Start a new conversation</p>
      </Link>
      <div className="mt-5 px-5">
        <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Recent</p>
        <div className="space-y-2">
          {sessions.map((s, i) => (
            <Link to="/ai" key={i} className="flex items-center gap-3 rounded-2xl glass p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet/15">
                <Sparkles className="h-4 w-4 text-violet" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{s.q}</p>
                <p className="text-[11px] text-muted-foreground">{s.time} · {s.n} suggestions</p>
              </div>
              <button><Trash2 className="h-4 w-4 text-muted-foreground" /></button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
