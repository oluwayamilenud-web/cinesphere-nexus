import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Trophy } from "lucide-react";
import { leaderboard, avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/profile/leaderboard")({
  component: Leaderboard,
});

function Leaderboard() {
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12">
      <div className="flex items-center gap-3">
        <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-black">Leaderboard</h1>
      </div>

      <div className="mt-4 flex gap-2 text-sm">
        <button className="rounded-full bg-[var(--gradient-primary)] px-4 py-1.5 font-bold">This week</button>
        <button className="rounded-full glass px-4 py-1.5 text-muted-foreground">All time</button>
        <button className="rounded-full glass px-4 py-1.5 text-muted-foreground">Friends</button>
      </div>

      {/* Podium */}
      <div className="mt-8 flex items-end justify-center gap-3">
        {[top3[1], top3[0], top3[2]].map((u, i) => {
          const rank = u.rank;
          const heights = ["h-24", "h-32", "h-20"];
          const colors = ["bg-white/30", "bg-gold", "bg-orange-700/50"];
          return (
            <div key={u.id} className="flex flex-1 flex-col items-center">
              <div className="relative">
                <div className={`h-16 w-16 overflow-hidden rounded-full ring-4 ${rank === 1 ? "ring-gold" : "ring-white/20"}`}>
                  <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" />
                </div>
                {rank === 1 && <Trophy className="absolute -top-4 left-1/2 h-6 w-6 -translate-x-1/2 fill-gold text-gold drop-shadow-[0_0_8px_var(--gold)]" />}
              </div>
              <p className="mt-2 text-xs font-bold">{u.name.split(" ")[0]}</p>
              <p className="text-[10px] text-teal">{u.xp.toLocaleString()} XP</p>
              <div className={`mt-2 w-full ${heights[i]} ${colors[i]} rounded-t-2xl flex items-start justify-center pt-3 text-2xl font-black text-black`}>
                {rank}
              </div>
            </div>
          );
        })}
      </div>

      {/* Rest */}
      <div className="mt-6 space-y-2">
        {rest.map((u) => (
          <div key={u.id} className="flex items-center gap-3 rounded-2xl glass p-3">
            <span className="w-6 text-center text-sm font-bold text-muted-foreground">{u.rank}</span>
            <div className="h-9 w-9 overflow-hidden rounded-full">
              <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{u.name}</p>
              <p className="text-[11px] text-muted-foreground">Level {u.level}</p>
            </div>
            <p className="text-sm font-black text-teal">{u.xp.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
