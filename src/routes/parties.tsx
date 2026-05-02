import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Users, Calendar, Lock } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { movies, users, avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/parties")({
  head: () => ({ meta: [{ title: "Watch Parties — CineSphere" }] }),
  component: Parties,
});

const liveParties = [
  { id: "lp1", movie: movies[0], host: users[0], viewers: 12, time: "Live now" },
  { id: "lp2", movie: movies[2], host: users[2], viewers: 38, time: "Live now" },
];
const upcomingParties = [
  { id: "up1", movie: movies[4], host: users[1], viewers: 8, time: "Tonight 9:00 PM" },
  { id: "up2", movie: movies[1], host: users[4], viewers: 24, time: "Tomorrow 7:30 PM" },
  { id: "up3", movie: movies[5], host: users[3], viewers: 5, time: "Sat 10:00 PM" },
];

function Parties() {
  return (
    <PhoneShell>
      <header className="px-5 pt-6 pb-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Watch together</p>
            <h1 className="text-3xl font-black"><span className="gradient-aurora-text">Parties</span></h1>
          </div>
          <Link to="/parties/create" className="flex items-center gap-1.5 rounded-full bg-[var(--gradient-primary)] px-4 py-2.5 text-sm font-bold shadow-[var(--shadow-glow-violet)]">
            <Plus className="h-4 w-4" /> Host
          </Link>
        </div>

        <div className="mt-4 flex gap-2 text-sm">
          <button className="rounded-full bg-[var(--gradient-primary)] px-4 py-1.5 font-bold">All</button>
          <button className="rounded-full glass px-4 py-1.5 font-semibold text-muted-foreground">Friends</button>
          <button className="rounded-full glass px-4 py-1.5 font-semibold text-muted-foreground">Public</button>
        </div>
      </header>

      <section className="mt-3 px-5">
        <h2 className="mb-3 flex items-center gap-2 text-xs font-bold text-muted-foreground">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-red-500" /> LIVE NOW
        </h2>
        <div className="space-y-3">
          {liveParties.map((p) => (
            <Link key={p.id} to="/parties/$id" params={{ id: p.id }} className="block overflow-hidden rounded-3xl glass">
              <div className="relative h-32">
                <img src={p.movie.poster} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-500/90 px-2 py-0.5 text-[10px] font-bold backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
                </div>
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full glass-strong px-2 py-0.5 text-[11px]">
                  <Users className="h-3 w-3" /> {p.viewers}
                </div>
                <div className="absolute inset-x-3 bottom-2">
                  <p className="text-base font-bold">{p.movie.title}</p>
                  <p className="text-[11px] text-white/70">Hosted by @{p.host.handle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7 px-5">
        <h2 className="mb-3 flex items-center gap-2 text-xs font-bold text-muted-foreground">
          <Calendar className="h-3 w-3" /> UPCOMING
        </h2>
        <div className="space-y-3">
          {upcomingParties.map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-2xl glass p-3">
              <img src={p.movie.poster} alt="" className="h-20 w-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-bold">{p.movie.title}</p>
                <p className="text-[11px] text-muted-foreground">@{p.host.handle}</p>
                <p className="mt-0.5 text-[11px] text-teal">⏱ {p.time}</p>
              </div>
              <button className="rounded-full glass-strong px-3 py-1.5 text-xs font-bold">Join</button>
            </div>
          ))}
        </div>
      </section>
    </PhoneShell>
  );
}
