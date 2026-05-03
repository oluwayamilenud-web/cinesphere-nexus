import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MoreHorizontal, MessageCircle } from "lucide-react";
import { users, posts, movies } from "@/lib/mock-data";

export const Route = createFileRoute("/user/$handle")({ component: UserProfile });

function UserProfile() {
  const { handle } = Route.useParams();
  const user = users.find((u) => u.handle === handle) ?? users[0];

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-20">
      <div className="relative h-40 bg-[var(--gradient-aurora)]">
        <Link to="/social" className="absolute left-5 top-12 flex h-9 w-9 items-center justify-center rounded-full glass-strong">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <button className="absolute right-5 top-12 flex h-9 w-9 items-center justify-center rounded-full glass-strong">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      <div className="-mt-12 px-5">
        <div className="h-24 w-24 rounded-full border-4 border-background bg-[var(--gradient-primary)] shadow-[var(--shadow-glow-violet)]" />
        <div className="mt-3 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-black">{user.name}</h1>
            <p className="text-sm text-muted-foreground">@{user.handle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/messages/$id" params={{ id: user.id }} className="flex h-10 w-10 items-center justify-center rounded-full glass">
              <MessageCircle className="h-4 w-4" />
            </Link>
            <button className="rounded-full bg-[var(--gradient-primary)] px-5 py-2 text-sm font-bold shadow-[var(--shadow-glow-violet)]">Follow</button>
          </div>
        </div>
        <p className="mt-3 text-sm">Cinephile · {user.followers.toLocaleString()} followers</p>
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl glass p-3 text-center">
          <div><p className="text-lg font-black">Lv {user.level}</p><p className="text-[10px] text-muted-foreground">LEVEL</p></div>
          <div><p className="text-lg font-black">{(user.xp / 1000).toFixed(1)}k</p><p className="text-[10px] text-muted-foreground">XP</p></div>
          <div><p className="text-lg font-black">{user.followers.toLocaleString()}</p><p className="text-[10px] text-muted-foreground">FOLLOWERS</p></div>
        </div>

        <div className="mt-6 flex gap-6 border-b border-white/5 text-sm font-semibold">
          {["Posts", "Watchlist", "Reviews"].map((t, i) => (
            <button key={t} className={`pb-2 ${i === 0 ? "border-b-2 border-violet text-foreground" : "text-muted-foreground"}`}>{t}</button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.id} to="/social/post/$id" params={{ id: p.id }} className="block rounded-2xl glass p-4">
              <p className="text-sm">{p.text}</p>
              {p.movie && <p className="mt-2 text-xs text-teal">🎬 {p.movie.title}</p>}
            </Link>
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-sm font-bold text-muted-foreground">FAVORITE FILMS</h3>
        <div className="grid grid-cols-3 gap-2">
          {movies.slice(0, 6).map((m) => (
            <Link to="/movie/$id" params={{ id: m.id }} key={m.id}>
              <img src={m.poster} alt="" className="aspect-[2/3] w-full rounded-lg object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
