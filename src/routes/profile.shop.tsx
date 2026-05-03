import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Coins, Sparkles } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/profile/shop")({ component: Shop });

const items = [
  { name: "Aurora Avatar Frame", cost: 1200, rarity: "Epic", emoji: "🌌" },
  { name: "Neon Veil Sticker Pack", cost: 600, rarity: "Rare", emoji: "🎬" },
  { name: "Watch Party Theme", cost: 1800, rarity: "Epic", emoji: "🎉" },
  { name: "Custom Profile Banner", cost: 900, rarity: "Rare", emoji: "🖼️" },
  { name: "Animated Reaction Pack", cost: 750, rarity: "Rare", emoji: "💥" },
  { name: "Sphere Elite Badge", cost: 5000, rarity: "Legendary", emoji: "💎" },
];

function Shop() {
  return (
    <PhoneShell>
      <div className="flex items-center justify-between px-5 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <div className="flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1.5 text-gold">
          <Coins className="h-4 w-4" />
          <span className="text-sm font-bold">3,420</span>
        </div>
      </div>
      <div className="px-5 pt-4">
        <h1 className="text-3xl font-black">Rewards Shop</h1>
        <p className="text-sm text-muted-foreground">Spend Sphere Coins on cosmetics & perks.</p>
      </div>
      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto px-5">
        {["Featured", "Frames", "Themes", "Stickers", "Boosts"].map((c, i) => (
          <button key={c} className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 px-5">
        {items.map((it) => (
          <div key={it.name} className="rounded-2xl glass p-3">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-[var(--gradient-aurora)] text-5xl">{it.emoji}</div>
            <p className="mt-2 text-[10px] font-bold uppercase text-violet">{it.rarity}</p>
            <p className="text-sm font-bold">{it.name}</p>
            <button className="mt-2 flex w-full items-center justify-center gap-1 rounded-xl bg-gold/15 py-2 text-xs font-bold text-gold">
              <Coins className="h-3 w-3" /> {it.cost}
            </button>
          </div>
        ))}
      </div>
      <div className="mx-5 mt-6 flex items-center gap-3 rounded-2xl border border-violet/30 bg-violet/10 p-4">
        <Sparkles className="h-6 w-6 text-violet" />
        <div className="flex-1">
          <p className="text-sm font-bold">Need more coins?</p>
          <p className="text-[11px] text-muted-foreground">Complete daily missions to earn more.</p>
        </div>
        <Link to="/profile/missions" className="rounded-full bg-violet px-3 py-1.5 text-xs font-bold">Earn</Link>
      </div>
    </PhoneShell>
  );
}
