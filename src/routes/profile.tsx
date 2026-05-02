import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Trophy, Award, Clock, Heart, Bookmark, Zap, ChevronRight, Crown } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { MoviePoster } from "@/components/movie-poster";
import { SectionHeader, ScrollRow } from "@/components/section";
import { movies, badges, missions, leaderboard, avatars, users } from "@/lib/mock-data";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — CineSphere" }] }),
  component: Profile,
});

function Profile() {
  const me = users[0];
  const xpToNext = 10000;
  const pct = (me.xp / xpToNext) * 100;

  return (
    <PhoneShell>
      {/* Banner */}
      <div className="relative h-32 bg-[var(--gradient-aurora)]">
        <div className="absolute right-4 top-12 flex gap-2">
          <Link to="/admin" className="flex h-9 w-9 items-center justify-center rounded-full glass-strong">
            <Crown className="h-4 w-4" />
          </Link>
          <Link to="/profile/settings" className="flex h-9 w-9 items-center justify-center rounded-full glass-strong">
            <Settings className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Avatar + identity */}
      <div className="relative -mt-12 px-5">
        <div className="flex items-end gap-3">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-background bg-background">
            <img src={avatars} alt="" className="h-full w-full scale-150 object-cover object-[20%_20%]" />
          </div>
          <div className="flex-1 pb-1">
            <p className="text-xl font-black">{me.name}</p>
            <p className="text-xs text-muted-foreground">@{me.handle}</p>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">Cinephile. Sci-fi soul. Hosting watch parties every Friday 🎬✨</p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { v: "12.4k", l: "Followers" },
            { v: "284", l: "Following" },
            { v: "1,128", l: "Watched" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl glass p-3 text-center">
              <p className="text-base font-black">{s.v}</p>
              <p className="text-[10px] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Level card */}
      <section className="mt-5 px-5">
        <div className="relative overflow-hidden rounded-3xl border border-violet/30 bg-violet/10 p-5 glow-violet">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] text-2xl font-black">
              {me.level}
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Sphere Level</p>
              <p className="text-base font-black">Cinematic Curator</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">XP</p>
              <p className="text-base font-black text-teal">{me.xp.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
              <span>Level {me.level}</span>
              <span>{(xpToNext - me.xp).toLocaleString()} XP to Level {me.level + 1}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[var(--gradient-primary)]" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="mt-7 px-5">
        <SectionHeader title="Daily missions" action={<Link to="/profile/missions" className="text-xs text-teal">View all</Link>} />
        <div className="space-y-2 px-0">
          {missions.slice(0, 2).map((m) => (
            <div key={m.id} className="flex items-center gap-3 rounded-2xl glass p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20 text-teal">
                <Zap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">{m.title}</p>
                  <span className="text-xs font-bold text-gold">+{m.xp} XP</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full bg-[var(--gradient-primary)]" style={{ width: `${(m.progress / m.total) * 100}%` }} />
                </div>
                <p className="mt-1 text-[10px] text-muted-foreground">{m.progress}/{m.total} • {m.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="mt-7">
        <SectionHeader
          title="Badges & achievements"
          action={<Link to="/profile/badges" className="text-xs text-teal">View all</Link>}
          subtitle={`${badges.filter((b) => b.earned).length} of ${badges.length} unlocked`}
        />
        <ScrollRow>
          {badges.map((b) => (
            <div key={b.id} className={`shrink-0 w-24 rounded-2xl glass p-3 text-center ${!b.earned && "opacity-40"}`}>
              <div className="text-3xl">{b.icon}</div>
              <p className="mt-1 line-clamp-1 text-[11px] font-bold">{b.name}</p>
              <p className={`text-[9px] uppercase ${b.rarity === "Legendary" ? "text-gold" : b.rarity === "Epic" ? "text-violet" : "text-muted-foreground"}`}>{b.rarity}</p>
            </div>
          ))}
        </ScrollRow>
      </section>

      {/* Leaderboard preview */}
      <section className="mt-7 px-5">
        <SectionHeader title="Friends leaderboard" action={<Link to="/profile/leaderboard" className="text-xs text-teal">Full board</Link>} />
        <div className="space-y-2 px-0">
          {leaderboard.slice(0, 3).map((u, i) => (
            <div key={u.id} className="flex items-center gap-3 rounded-2xl glass p-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${i === 0 ? "bg-gold text-black" : i === 1 ? "bg-white/30" : "bg-orange-700/40"}`}>
                {u.rank}
              </div>
              <div className="h-9 w-9 overflow-hidden rounded-full">
                <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" style={{ objectPosition: `${i * 25}% ${i * 30}%` }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{u.name}</p>
                <p className="text-[11px] text-muted-foreground">Level {u.level}</p>
              </div>
              <p className="text-sm font-black text-teal">{u.xp.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Watch history */}
      <section className="mt-7">
        <SectionHeader title="Watch history" action={<Clock className="h-4 w-4 text-muted-foreground" />} />
        <ScrollRow>
          {movies.map((m) => <MoviePoster key={m.id} movie={m} size="sm" />)}
        </ScrollRow>
      </section>

      {/* Saved */}
      <section className="mt-7">
        <SectionHeader title="Saved & favorites" action={<Bookmark className="h-4 w-4 text-muted-foreground" />} />
        <ScrollRow>
          {[...movies].reverse().map((m) => <MoviePoster key={m.id} movie={m} size="sm" />)}
        </ScrollRow>
      </section>

      {/* Quick links */}
      <section className="mt-7 px-5 space-y-2">
        {[
          { to: "/profile/settings", label: "Settings & preferences", icon: Settings },
          { to: "/profile/badges", label: "All achievements", icon: Award },
          { to: "/profile/leaderboard", label: "Leaderboard", icon: Trophy },
          { to: "/admin", label: "Creator studio", icon: Crown },
        ].map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} className="flex items-center gap-3 rounded-2xl glass p-3.5">
            <Icon className="h-4 w-4 text-violet" />
            <span className="flex-1 text-sm font-semibold">{label}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        ))}
      </section>
    </PhoneShell>
  );
}
