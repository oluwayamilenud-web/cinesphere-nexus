import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, Plus, Star } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { posts, users, avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/social")({
  head: () => ({ meta: [{ title: "Social — CineSphere" }] }),
  component: Social,
});

function Social() {
  return (
    <PhoneShell>
      <header className="sticky top-0 z-30 backdrop-blur-xl px-5 pt-4 pb-3" style={{ background: "linear-gradient(to bottom, oklch(0.13 0.03 270 / 0.9), oklch(0.13 0.03 270 / 0.5))" }}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black gradient-aurora-text">Sphere Feed</h1>
          <div className="flex gap-2">
            <Link to="/search" className="flex h-10 w-10 items-center justify-center rounded-full glass">
              <Search className="h-4 w-4" />
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex gap-2 text-sm">
          <button className="rounded-full bg-[var(--gradient-primary)] px-4 py-1.5 font-bold">For you</button>
          <button className="rounded-full glass px-4 py-1.5 font-semibold text-muted-foreground">Following</button>
          <button className="rounded-full glass px-4 py-1.5 font-semibold text-muted-foreground">Discussions</button>
        </div>
      </header>

      {/* Stories row */}
      <section className="mt-3 px-5">
        <div className="scrollbar-hide flex gap-3 overflow-x-auto">
          {[{ name: "Your story", you: true }, ...users].map((u, i) => (
            <div key={i} className="shrink-0 text-center">
              <div className={`relative h-16 w-16 rounded-full p-[2px] ${"you" in u && u.you ? "bg-white/20" : "bg-[var(--gradient-primary)]"}`}>
                <div className="h-full w-full overflow-hidden rounded-full bg-background">
                  <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" style={{ objectPosition: `${(i * 25) % 100}% ${(i * 30) % 100}%` }} />
                </div>
                {"you" in u && u.you && (
                  <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-[var(--gradient-primary)]">
                    <Plus className="h-3 w-3" />
                  </div>
                )}
              </div>
              <p className="mt-1 line-clamp-1 max-w-[64px] text-[10px]">{"you" in u && u.you ? "You" : (u as typeof users[0]).name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="mt-4 space-y-4 px-3">
        {posts.map((p) => (
          <article key={p.id} className="rounded-3xl glass p-4">
            <header className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-violet/40">
                <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{p.user.name}</p>
                <p className="text-[11px] text-muted-foreground">@{p.user.handle} • {p.timeAgo}</p>
              </div>
              <button><MoreHorizontal className="h-4 w-4 text-muted-foreground" /></button>
            </header>

            <p className="mt-3 text-sm leading-relaxed">{p.text}</p>

            {p.movie && (
              <Link to="/movie/$id" params={{ id: p.movie.id }} className="mt-3 flex items-center gap-3 rounded-2xl glass-strong p-2.5">
                <img src={p.movie.poster} alt="" className="h-16 w-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-xs font-bold">{p.movie.title}</p>
                  <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Star className="h-2.5 w-2.5 fill-gold text-gold" /> {p.movie.rating} • {p.movie.year}
                  </p>
                </div>
                <span className="rounded-full bg-violet/20 px-2 py-1 text-[10px] font-bold text-violet">View</span>
              </Link>
            )}

            {p.image && !p.movie && (
              <img src={p.image} alt="" className="mt-3 aspect-video w-full rounded-2xl object-cover" />
            )}

            <footer className="mt-3 flex items-center justify-between text-muted-foreground">
              <button className="flex items-center gap-1.5 text-xs"><Heart className="h-4 w-4" /> {p.likes.toLocaleString()}</button>
              <button className="flex items-center gap-1.5 text-xs"><MessageCircle className="h-4 w-4" /> {p.comments}</button>
              <button className="flex items-center gap-1.5 text-xs"><Share2 className="h-4 w-4" /></button>
              <button className="flex items-center gap-1.5 text-xs"><Bookmark className="h-4 w-4" /></button>
            </footer>
          </article>
        ))}
      </section>
    </PhoneShell>
  );
}
