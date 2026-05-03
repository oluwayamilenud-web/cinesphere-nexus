import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Share2 } from "lucide-react";
import { badges } from "@/lib/mock-data";

export const Route = createFileRoute("/profile/badge/$id")({ component: BadgeDetail });

function BadgeDetail() {
  const { id } = Route.useParams();
  const b = badges.find((x) => x.id === id) ?? badges[0];
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-[var(--gradient-aurora)] opacity-25 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between px-5 pt-12">
          <Link to="/profile/badges" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
          <button className="flex h-9 w-9 items-center justify-center rounded-full glass"><Share2 className="h-4 w-4" /></button>
        </div>
        <div className="mt-10 flex flex-col items-center px-6 text-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-7xl shadow-[var(--shadow-glow-violet)]">
            {b.icon}
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-violet">{b.rarity}</p>
          <h1 className="mt-1 text-3xl font-black">{b.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          <div className="mt-6 grid w-full grid-cols-3 gap-2">
            <div className="rounded-2xl glass p-3"><p className="text-lg font-black">3.2%</p><p className="text-[10px] text-muted-foreground">EARNED</p></div>
            <div className="rounded-2xl glass p-3"><p className="text-lg font-black">+500</p><p className="text-[10px] text-muted-foreground">XP</p></div>
            <div className="rounded-2xl glass p-3"><p className="text-lg font-black">Apr 12</p><p className="text-[10px] text-muted-foreground">DATE</p></div>
          </div>
          <button className="mt-8 w-full rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]">
            Pin to profile
          </button>
        </div>
      </div>
    </div>
  );
}
