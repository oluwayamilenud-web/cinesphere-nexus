import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, MessageCircle, Send, Share2, Bookmark } from "lucide-react";
import { posts, users } from "@/lib/mock-data";

export const Route = createFileRoute("/social/post/$id")({ component: PostDetail });

function PostDetail() {
  const { id } = Route.useParams();
  const post = posts.find((p) => p.id === id) ?? posts[0];

  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-32">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 glass-strong px-5 py-3 pt-12">
        <Link to="/social" className="flex h-9 w-9 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <p className="text-sm font-bold">Post</p>
        <button className="flex h-9 w-9 items-center justify-center rounded-full glass">
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[var(--gradient-aurora)]" />
          <div className="flex-1">
            <p className="text-sm font-bold">{post.user.name}</p>
            <p className="text-xs text-muted-foreground">@{post.user.handle} · {post.timeAgo}</p>
          </div>
          <button className="rounded-full bg-violet/20 px-3 py-1 text-xs font-bold text-violet">Follow</button>
        </div>
        <p className="mt-4 text-base leading-relaxed">{post.text}</p>
        {post.image && (
          <img src={post.image} alt="" className="mt-4 w-full rounded-2xl object-cover" />
        )}
        {post.movie && (
          <Link to="/movie/$id" params={{ id: post.movie.id }} className="mt-4 flex items-center gap-3 rounded-2xl glass p-3">
            <img src={post.movie.poster} alt="" className="h-14 w-10 rounded-md object-cover" />
            <div>
              <p className="text-xs text-muted-foreground">Tagged</p>
              <p className="text-sm font-bold">{post.movie.title}</p>
            </div>
          </Link>
        )}
        <div className="mt-5 flex items-center justify-around border-y border-white/5 py-3">
          <button className="flex items-center gap-2 text-sm"><Heart className="h-5 w-5 text-rose-400" /> {post.likes}</button>
          <button className="flex items-center gap-2 text-sm"><MessageCircle className="h-5 w-5" /> {post.comments}</button>
          <button className="flex items-center gap-2 text-sm"><Bookmark className="h-5 w-5" /></button>
          <button className="flex items-center gap-2 text-sm"><Share2 className="h-5 w-5" /></button>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-xs font-bold uppercase text-muted-foreground">Comments</p>
          {users.slice(0, 5).map((u, i) => (
            <div key={u.id} className="flex gap-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-[var(--gradient-aurora)]" />
              <div className="flex-1">
                <div className="rounded-2xl glass px-3 py-2">
                  <p className="text-xs font-bold">@{u.handle}</p>
                  <p className="text-sm">{["Same here, that scene was unreal.", "Lvl 27 take, respect.", "Adding to my watchlist now.", "Wait until you see ep 4 👀", "Trailer didn't do it justice"][i]}</p>
                </div>
                <div className="mt-1 flex items-center gap-3 px-2 text-[11px] text-muted-foreground">
                  <span>{i + 1}h</span>
                  <button>Like</button>
                  <button>Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md border-t border-white/5 glass-strong p-3">
        <div className="flex items-center gap-2">
          <input placeholder="Add a comment…" className="flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm outline-none" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-primary)]">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
