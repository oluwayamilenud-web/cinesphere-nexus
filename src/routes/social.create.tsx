import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Image as ImageIcon, Film, Smile, Hash, Globe } from "lucide-react";
import { movies } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/social/create")({ component: Create });

function Create() {
  const [text, setText] = useState("");
  const [tagged, setTagged] = useState<string | null>(null);
  return (
    <div className="mx-auto min-h-screen w-full max-w-md">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 glass-strong px-5 py-3 pt-12">
        <Link to="/social" className="flex h-9 w-9 items-center justify-center rounded-full glass">
          <X className="h-4 w-4" />
        </Link>
        <p className="text-sm font-bold">New post</p>
        <button className="rounded-full bg-[var(--gradient-primary)] px-4 py-1.5 text-xs font-bold shadow-[var(--shadow-glow-violet)]">Post</button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[var(--gradient-aurora)]" />
          <button className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold">
            <Globe className="h-3 w-3" /> Public
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What did you just watch?"
          className="mt-4 h-40 w-full resize-none bg-transparent text-lg outline-none placeholder:text-muted-foreground"
        />
        {tagged && (
          <div className="mt-2 flex items-center gap-2 rounded-2xl glass p-3">
            <Film className="h-4 w-4 text-teal" />
            <p className="flex-1 text-sm font-semibold">{movies.find((m) => m.id === tagged)?.title}</p>
            <button onClick={() => setTagged(null)}><X className="h-4 w-4" /></button>
          </div>
        )}
        <div className="mt-4">
          <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Tag a movie</p>
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {movies.map((m) => (
              <button key={m.id} onClick={() => setTagged(m.id)} className={`shrink-0 overflow-hidden rounded-lg border-2 ${tagged === m.id ? "border-violet" : "border-transparent"}`}>
                <img src={m.poster} alt="" className="h-24 w-16 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md border-t border-white/5 glass-strong p-3">
        <div className="flex items-center justify-around">
          {[ImageIcon, Film, Hash, Smile].map((Icon, i) => (
            <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full glass"><Icon className="h-4 w-4" /></button>
          ))}
          <span className="text-xs text-muted-foreground">{280 - text.length}</span>
        </div>
      </div>
    </div>
  );
}
