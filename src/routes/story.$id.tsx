import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Heart, Send } from "lucide-react";
import { users, movies } from "@/lib/mock-data";

export const Route = createFileRoute("/story/$id")({ component: Story });

function Story() {
  const { id } = Route.useParams();
  const user = users.find((u) => u.id === id) ?? users[0];
  const movie = movies[0];

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-black">
      <img src={movie.poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="absolute inset-x-0 top-0 p-4 pt-12">
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30">
              <div className={`h-full ${i === 0 ? "w-full" : i === 1 ? "w-1/3 animate-[pulse_2s_infinite]" : "w-0"} bg-white`} />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[var(--gradient-aurora)]" />
          <div className="flex-1">
            <p className="text-sm font-bold">@{user.handle}</p>
            <p className="text-[10px] text-white/60">2h ago</p>
          </div>
          <Link to="/social" className="flex h-9 w-9 items-center justify-center rounded-full glass">
            <X className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-32 px-6 text-center">
        <div className="inline-block rounded-2xl bg-black/50 px-4 py-2 backdrop-blur-md">
          <p className="text-xs text-teal">NOW WATCHING</p>
          <p className="text-lg font-black">{movie.title}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center gap-2">
          <input placeholder="Reply to story…" className="flex-1 rounded-full border border-white/30 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/60" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full glass"><Heart className="h-4 w-4" /></button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full glass"><Send className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}
