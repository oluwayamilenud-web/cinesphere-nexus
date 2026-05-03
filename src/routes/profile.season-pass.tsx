import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lock, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/profile/season-pass")({ component: SeasonPass });

const tiers = Array.from({ length: 12 }).map((_, i) => ({
  level: i + 1,
  free: ["50 XP", "Sticker", "100 Coins", "Avatar", "200 XP", "Theme", "Frame", "300 XP", "Sticker", "Boost", "500 XP", "Badge"][i],
  premium: ["Frame", "100 Coins", "Theme", "Banner", "Pack", "300 Coins", "Avatar", "Boost", "Sticker", "Theme", "1000 Coins", "🏆 Trophy"][i],
  unlocked: i < 4,
}));

function SeasonPass() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-aurora)] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <Link to="/profile" className="absolute left-5 top-12 flex h-9 w-9 items-center justify-center rounded-full glass-strong"><ArrowLeft className="h-4 w-4" /></Link>
        <div className="absolute inset-x-0 bottom-3 px-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal">Season 4</p>
          <h1 className="text-3xl font-black">Cosmic Echoes</h1>
          <p className="text-xs text-muted-foreground">Ends in 18 days · Tier 4 of 50</p>
        </div>
      </div>

      <div className="mx-5 mt-4 rounded-2xl bg-[var(--gradient-primary)] p-4 shadow-[var(--shadow-glow-violet)]">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6" />
          <div className="flex-1">
            <p className="text-sm font-bold">Unlock Premium Pass</p>
            <p className="text-xs opacity-80">2× XP, exclusive cosmetics</p>
          </div>
          <button className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold backdrop-blur-md">$9.99</button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[40px_1fr_1fr] gap-2 px-5 text-center text-[10px] font-bold uppercase text-muted-foreground">
        <div>Tier</div>
        <div>Free</div>
        <div>Premium</div>
      </div>
      <div className="mt-2 space-y-2 px-5">
        {tiers.map((t) => (
          <div key={t.level} className="grid grid-cols-[40px_1fr_1fr] gap-2 text-center">
            <div className={`flex items-center justify-center rounded-xl text-sm font-black ${t.unlocked ? "bg-[var(--gradient-primary)]" : "glass"}`}>{t.level}</div>
            <Tile reward={t.free} unlocked={t.unlocked} />
            <Tile reward={t.premium} unlocked={false} premium />
          </div>
        ))}
      </div>
    </div>
  );
}

function Tile({ reward, unlocked, premium }: { reward: string; unlocked: boolean; premium?: boolean }) {
  return (
    <div className={`relative flex flex-col items-center justify-center rounded-xl p-3 ${premium ? "border border-gold/30 bg-gold/5" : "glass"}`}>
      <p className="text-xs font-semibold">{reward}</p>
      <div className="mt-1">
        {unlocked ? <Check className="h-3.5 w-3.5 text-teal" /> : <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
      </div>
    </div>
  );
}
