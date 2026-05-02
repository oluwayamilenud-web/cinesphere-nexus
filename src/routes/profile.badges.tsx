import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { badges } from "@/lib/mock-data";

export const Route = createFileRoute("/profile/badges")({
  component: Badges,
});

function Badges() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12">
      <div className="flex items-center gap-3">
        <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-black">Achievements</h1>
      </div>

      <div className="mt-5 rounded-2xl border border-violet/30 bg-violet/10 p-4 text-center glow-violet">
        <p className="text-3xl font-black gradient-aurora-text">{badges.filter((b) => b.earned).length} / {badges.length}</p>
        <p className="text-xs text-muted-foreground">Badges unlocked</p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {badges.map((b) => (
          <div key={b.id} className={`rounded-2xl glass p-4 text-center ${!b.earned && "opacity-40 grayscale"}`}>
            <div className="text-4xl">{b.icon}</div>
            <p className="mt-2 text-xs font-bold">{b.name}</p>
            <p className="mt-0.5 text-[9px] text-muted-foreground">{b.desc}</p>
            <p className={`mt-2 text-[9px] uppercase font-bold ${b.rarity === "Legendary" ? "text-gold" : b.rarity === "Epic" ? "text-violet" : b.rarity === "Rare" ? "text-teal" : "text-muted-foreground"}`}>
              {b.rarity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
