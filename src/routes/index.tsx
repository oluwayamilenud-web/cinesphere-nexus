import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Sparkles } from "lucide-react";
import { heroBanner } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CineSphere — Watch. Together. Level Up." },
      { name: "description", content: "Discover, watch, and discuss movies and shows in a cinematic social experience powered by AI and gamified rewards." },
      { property: "og:title", content: "CineSphere" },
      { property: "og:description", content: "The cinematic social platform for film lovers." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden">
      <img
        src={heroBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative flex min-h-screen flex-col justify-between p-6 pt-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            <Sparkles className="h-3 w-3 text-teal" />
            <span className="text-muted-foreground">v1.0 — Aurora Update</span>
          </div>
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight">
            Watch.<br />
            <span className="gradient-aurora-text">Together.</span><br />
            Level up.
          </h1>
          <p className="max-w-xs text-balance text-sm text-muted-foreground">
            The cinematic social platform where every movie is an experience and every viewer is a player.
          </p>
        </div>

        <div className="space-y-3 pb-8">
          <Link
            to="/auth/signup"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)] transition-transform active:scale-95"
          >
            <Play className="h-4 w-4 fill-current" />
            Get Started
          </Link>
          <Link
            to="/auth/login"
            className="flex items-center justify-center rounded-2xl glass py-4 font-semibold text-foreground transition-transform active:scale-95"
          >
            I already have an account
          </Link>
          <p className="pt-2 text-center text-[11px] text-muted-foreground">
            By continuing you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
