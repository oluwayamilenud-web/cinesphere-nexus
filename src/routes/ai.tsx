import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Send, Mic } from "lucide-react";
import { aiSuggestions, movies } from "@/lib/mock-data";
import { MoviePoster } from "@/components/movie-poster";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [{ title: "Sphere AI — CineSphere" }] }),
  component: AI,
});

function AI() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
      <header className="sticky top-0 z-30 flex items-center gap-3 px-5 pt-4 pb-3 backdrop-blur-xl" style={{ background: "linear-gradient(to bottom, oklch(0.13 0.03 270 / 0.9), oklch(0.13 0.03 270 / 0.5))" }}>
        <Link to="/home" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-primary)] animate-pulse-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold">Sphere AI</p>
            <p className="text-[11px] text-teal">● Online</p>
          </div>
        </div>
      </header>

      <div className="flex-1 space-y-4 px-5 pb-32 pt-4">
        {/* AI message */}
        <div className="flex gap-2">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="rounded-3xl rounded-tl-md glass-strong px-4 py-3 text-sm">
            <p>Hey Nova 👋 I noticed you haven't finished <strong>The Neon Veil</strong>. Want to wrap it up tonight, or are you in the mood for something new?</p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-3xl rounded-tr-md bg-[var(--gradient-primary)] px-4 py-3 text-sm font-medium">
            Something new. Mind-bending sci-fi under 2 hours.
          </div>
        </div>

        {/* AI response with cards */}
        <div className="flex gap-2">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="rounded-3xl rounded-tl-md glass-strong px-4 py-3 text-sm">
              Got you. Here are 3 picks tuned to your taste — all under 2 hours, all guaranteed to mess with your head.
            </div>
            <div className="scrollbar-hide flex gap-3 overflow-x-auto">
              {[movies[1], movies[4], movies[5]].map((m) => (
                <div key={m.id} className="shrink-0">
                  <MoviePoster movie={m} size="md" showMatch />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User reaction */}
        <div className="flex justify-end">
          <div className="rounded-3xl rounded-tr-md bg-[var(--gradient-primary)] px-4 py-3 text-sm font-medium">
            Tell me about Midnight Circuit's warehouse scene
          </div>
        </div>

        <div className="flex gap-2">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="rounded-3xl rounded-tl-md glass-strong px-4 py-3 text-sm">
            <p>That's the 47-minute mark — a single 8-minute take through a neon-lit cargo bay. The cinematographer used 12 practical lights synced to the score. Want me to skip you straight to it? 🎬</p>
            <button className="mt-3 rounded-full bg-teal/20 px-3 py-1.5 text-xs font-bold text-teal">▶ Jump to scene</button>
          </div>
        </div>
      </div>

      {/* Quick suggestions */}
      <div className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md p-4 backdrop-blur-xl" style={{ background: "linear-gradient(to top, oklch(0.13 0.03 270), oklch(0.13 0.03 270 / 0.7))" }}>
        <div className="scrollbar-hide mb-3 flex gap-2 overflow-x-auto">
          {aiSuggestions.map((s) => (
            <button key={s} className="shrink-0 rounded-full glass px-3 py-1.5 text-xs">{s}</button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full glass-strong p-1.5 pl-4">
          <input
            placeholder="Ask Sphere AI anything..."
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
          <button className="flex h-9 w-9 items-center justify-center rounded-full glass">
            <Mic className="h-4 w-4" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
