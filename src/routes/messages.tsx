import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, PenSquare } from "lucide-react";
import { users } from "@/lib/mock-data";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/messages")({ component: Messages });

const previews = [
  "watching Neon Veil tonight?",
  "lol that twist 💀",
  "did you finish ep 6?",
  "sent you a clip 🎬",
  "party at 9pm sharp",
];

function Messages() {
  return (
    <PhoneShell>
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 glass-strong px-5 py-3 pt-12">
        <Link to="/social" className="flex h-9 w-9 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <p className="text-sm font-bold">Messages</p>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
          <PenSquare className="h-4 w-4" />
        </button>
      </div>
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 rounded-full glass px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search conversations" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="mt-5">
        {users.map((u, i) => (
          <Link to="/messages/$id" params={{ id: u.id }} key={u.id} className="flex items-center gap-3 px-5 py-3 active:bg-white/5">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-[var(--gradient-aurora)]" />
              {i < 2 && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-teal" />}
            </div>
            <div className="flex-1 border-b border-white/5 pb-3">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-bold">{u.name}</p>
                <span className="text-[10px] text-muted-foreground">{i + 1}h</span>
              </div>
              <p className="truncate text-xs text-muted-foreground">{previews[i]}</p>
            </div>
            {i === 0 && <span className="ml-auto rounded-full bg-violet px-1.5 text-[10px] font-bold">2</span>}
          </Link>
        ))}
      </div>
    </PhoneShell>
  );
}
