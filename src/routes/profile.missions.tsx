import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Zap, Calendar } from "lucide-react";
import { missions } from "@/lib/mock-data";

export const Route = createFileRoute("/profile/missions")({
  component: Missions,
});

function Missions() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12">
      <div className="flex items-center gap-3">
        <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-black">Missions</h1>
      </div>

      {/* Streak */}
      <div className="mt-5 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-violet/20 p-5">
        <div className="flex items-center gap-3">
          <div className="text-5xl">🔥</div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Current streak</p>
            <p className="text-3xl font-black">14 days</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground">Personal best</p>
            <p className="text-base font-bold text-gold">23 days</p>
          </div>
        </div>
        <div className="mt-3 flex justify-between gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`h-8 flex-1 rounded-md ${i < 5 ? "bg-orange-500" : i === 5 ? "bg-orange-500/50" : "bg-white/10"}`} />
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Daily</p>
        {missions.filter((m) => m.type === "Daily").map((m) => (
          <Mission key={m.id} {...m} />
        ))}
        <p className="mt-4 px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Weekly</p>
        {missions.filter((m) => m.type === "Weekly").map((m) => (
          <Mission key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}

function Mission({ title, xp, progress, total, type }: typeof missions[number]) {
  const done = progress >= total;
  return (
    <div className={`rounded-2xl glass p-4 ${done && "border border-teal/40"}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/20 text-teal">
          {type === "Weekly" ? <Calendar className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-[10px] text-muted-foreground">{progress}/{total}</p>
        </div>
        <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[11px] font-black text-gold">+{xp} XP</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-[var(--gradient-primary)]" style={{ width: `${(progress / total) * 100}%` }} />
      </div>
    </div>
  );
}
