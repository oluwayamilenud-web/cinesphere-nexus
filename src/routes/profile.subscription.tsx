import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Crown } from "lucide-react";

export const Route = createFileRoute("/profile/subscription")({ component: Sub });

const plans = [
  { name: "Free", price: "$0", per: "forever", current: true, perks: ["SD streaming", "Ads between titles", "Limited watch parties"] },
  { name: "Plus", price: "$9.99", per: "/mo", perks: ["Full HD", "No ads", "Unlimited parties", "Offline downloads"] },
  { name: "Cinema", price: "$15.99", per: "/mo", popular: true, perks: ["4K HDR + Atmos", "Everything in Plus", "Season Pass premium", "Early access to new releases"] },
];

function Sub() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Subscription</h1>
      </div>
      <div className="mx-5 mt-5 rounded-2xl bg-[var(--gradient-aurora)] p-5">
        <div className="flex items-center gap-2">
          <Crown className="h-5 w-5" />
          <p className="text-xs font-bold uppercase tracking-wider">Current plan</p>
        </div>
        <p className="mt-1 text-2xl font-black">Free</p>
        <p className="text-xs text-white/80">Upgrade for 4K, no ads, and unlimited parties.</p>
      </div>
      <div className="mt-6 space-y-3 px-5">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-2xl p-5 ${p.popular ? "border-2 border-violet bg-violet/5" : "glass"}`}>
            {p.popular && <span className="absolute -top-2 right-4 rounded-full bg-[var(--gradient-primary)] px-2 py-0.5 text-[10px] font-bold">MOST POPULAR</span>}
            <div className="flex items-baseline justify-between">
              <p className="text-lg font-bold">{p.name}</p>
              <p><span className="text-2xl font-black">{p.price}</span><span className="text-xs text-muted-foreground">{p.per}</span></p>
            </div>
            <div className="mt-3 space-y-1.5">
              {p.perks.map((perk) => (
                <p key={perk} className="flex items-center gap-2 text-xs"><Check className="h-3.5 w-3.5 text-teal" /> {perk}</p>
              ))}
            </div>
            <button className={`mt-4 w-full rounded-xl py-2.5 text-sm font-bold ${p.current ? "glass text-muted-foreground" : "bg-[var(--gradient-primary)] shadow-[var(--shadow-glow-violet)]"}`}>
              {p.current ? "Current plan" : `Upgrade to ${p.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
