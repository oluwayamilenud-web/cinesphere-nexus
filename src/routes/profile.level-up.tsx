import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/profile/level-up")({ component: LevelUp });

function LevelUp() {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-aurora)] opacity-30 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Sparkles className="h-10 w-10 text-violet animate-pulse" />
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-teal">Level Up</p>
        <p className="mt-6 text-7xl font-black bg-[var(--gradient-primary)] bg-clip-text text-transparent">28</p>
        <p className="mt-2 text-base text-muted-foreground">You're now a Sphere Curator</p>

        <div className="mt-10 w-full space-y-3">
          <div className="rounded-2xl glass-strong p-4 text-left">
            <p className="text-xs font-bold text-violet">UNLOCKED</p>
            <p className="text-base font-bold">Custom watch-party themes</p>
            <p className="text-xs text-muted-foreground">Personalize the room with your own backdrops.</p>
          </div>
          <div className="rounded-2xl glass-strong p-4 text-left">
            <p className="text-xs font-bold text-teal">REWARD</p>
            <p className="text-base font-bold">+500 Sphere Coins</p>
          </div>
          <div className="rounded-2xl glass-strong p-4 text-left">
            <p className="text-xs font-bold text-gold">BADGE</p>
            <p className="text-base font-bold">🎖️ Curator</p>
          </div>
        </div>

        <Link to="/profile" className="mt-10 w-full rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]">
          Continue
        </Link>
      </div>
    </div>
  );
}
