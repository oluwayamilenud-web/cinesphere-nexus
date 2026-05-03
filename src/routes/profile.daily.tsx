import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Flame, Coins, Gift } from "lucide-react";

export const Route = createFileRoute("/profile/daily")({ component: Daily });

const days = [
  { d: 1, r: "50 XP", c: true },
  { d: 2, r: "100 XP", c: true },
  { d: 3, r: "150 Coins", c: true },
  { d: 4, r: "Sticker", c: true },
  { d: 5, r: "300 XP", c: false, today: true },
  { d: 6, r: "Theme", c: false },
  { d: 7, r: "Mystery 🎁", c: false, big: true },
];

function Daily() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Daily reward</h1>
      </div>
      <div className="mx-5 mt-5 rounded-3xl bg-[var(--gradient-aurora)] p-5">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-400" />
          <div>
            <p className="text-2xl font-black">12-day streak</p>
            <p className="text-xs text-white/80">Don't break the chain!</p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2 px-5">
        {days.map((day) => (
          <div
            key={day.d}
            className={`rounded-2xl p-3 text-center ${day.big ? "col-span-4 bg-[var(--gradient-primary)]" : day.today ? "border-2 border-violet glass" : day.c ? "bg-teal/15" : "glass"}`}
          >
            <p className="text-[10px] font-bold uppercase opacity-70">Day {day.d}</p>
            <div className="my-2 flex justify-center">
              {day.r.includes("Coins") ? <Coins className="h-6 w-6 text-gold" /> : day.r.includes("🎁") ? <Gift className="h-8 w-8" /> : <span className="text-xs">{day.r}</span>}
            </div>
            <p className="text-[10px]">{day.r}</p>
          </div>
        ))}
      </div>
      <div className="mx-5 mt-6">
        <button className="w-full rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]">
          Claim 300 XP
        </button>
      </div>
    </div>
  );
}
