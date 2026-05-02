import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { genres } from "@/lib/mock-data";

export const Route = createFileRoute("/auth/interests")({
  component: Interests,
});

function Interests() {
  const [picked, setPicked] = useState<string[]>(["Sci-Fi", "Thriller"]);
  const toggle = (g: string) =>
    setPicked((p) => (p.includes(g) ? p.filter((x) => x !== g) : [...p, g]));

  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/auth/verify" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-black">Pick your vibe</h1>
        <p className="text-sm text-muted-foreground">Choose at least 3 — we'll tune your Sphere.</p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? "bg-[var(--gradient-primary)]" : "bg-white/10"}`} />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Step 3 of 4 — Interests</p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {genres.map((g) => {
          const active = picked.includes(g.name);
          return (
            <button
              key={g.name}
              onClick={() => toggle(g.name)}
              className={`relative flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                active
                  ? "border-violet bg-violet/10 glow-violet"
                  : "border-white/5 glass"
              }`}
            >
              <div>
                <div className="text-2xl">{g.icon}</div>
                <div className="mt-1 text-sm font-bold">{g.name}</div>
                <div className="text-[11px] text-muted-foreground">{g.count} titles</div>
              </div>
              {active && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <Link
        to="/auth/profile-setup"
        className="mt-8 flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
      >
        Continue ({picked.length} selected)
      </Link>
    </div>
  );
}
