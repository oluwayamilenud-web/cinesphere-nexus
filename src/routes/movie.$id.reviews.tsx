import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Star, ThumbsUp } from "lucide-react";
import { getMovie, users } from "@/lib/mock-data";

export const Route = createFileRoute("/movie/$id/reviews")({ component: Reviews });

const reviews = [
  { stars: 5, text: "A near-perfect blend of style and substance. The score will haunt me for weeks.", likes: 412 },
  { stars: 4, text: "Slower second act, but the payoff is incredible. Easily my favorite of the year so far.", likes: 218 },
  { stars: 5, text: "Visually overwhelming in the best way. Watch it on the biggest screen you have.", likes: 189 },
  { stars: 3, text: "Beautiful but plot is thin. Worth it for the cinematography alone.", likes: 92 },
  { stars: 5, text: "I haven't stopped thinking about the third act since I left the theater.", likes: 67 },
];

function Reviews() {
  const { id } = Route.useParams();
  const movie = getMovie(id);
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/movie/$id" params={{ id }} className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">All reviews</p>
          <h1 className="text-lg font-bold">{movie.title}</h1>
        </div>
        <button className="rounded-full bg-[var(--gradient-primary)] px-3 py-1.5 text-xs font-bold">Write</button>
      </div>
      <div className="mx-5 mt-5 rounded-2xl glass p-5">
        <p className="text-5xl font-black">{movie.rating}</p>
        <div className="mt-1 flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-gold text-gold" : "text-muted-foreground"}`} />)}</div>
        <p className="mt-1 text-xs text-muted-foreground">Based on 12,482 reviews</p>
        <div className="mt-3 space-y-1.5">
          {[5, 4, 3, 2, 1].map((s, i) => (
            <div key={s} className="flex items-center gap-2 text-[10px]">
              <span className="w-3">{s}</span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-gold" style={{ width: `${[72, 18, 6, 2, 2][i]}%` }} />
              </div>
              <span className="w-8 text-muted-foreground">{[72, 18, 6, 2, 2][i]}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 space-y-3 px-5">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl glass p-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[var(--gradient-aurora)]" />
              <div className="flex-1">
                <p className="text-sm font-bold">@{users[i % users.length].handle}</p>
                <div className="flex">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className={`h-3 w-3 ${j < r.stars ? "fill-gold text-gold" : "text-muted-foreground"}`} />)}</div>
              </div>
              <span className="text-[10px] text-muted-foreground">{i + 1}d</span>
            </div>
            <p className="mt-2 text-sm">{r.text}</p>
            <button className="mt-2 flex items-center gap-1 text-xs text-muted-foreground"><ThumbsUp className="h-3 w-3" /> {r.likes}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
