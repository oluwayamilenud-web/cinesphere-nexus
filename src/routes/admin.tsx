import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Upload, Eye, Users, TrendingUp, AlertTriangle, Film, BarChart3, Plus } from "lucide-react";
import { movies } from "@/lib/mock-data";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Creator Studio — CineSphere" }] }),
  component: Admin,
});

function Admin() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full glass">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <p className="text-[11px] text-teal">CREATOR STUDIO</p>
            <h1 className="text-xl font-black">Dashboard</h1>
          </div>
        </div>
        <button className="flex items-center gap-1.5 rounded-full bg-[var(--gradient-primary)] px-3 py-2 text-xs font-bold">
          <Plus className="h-3.5 w-3.5" /> Upload
        </button>
      </div>

      {/* KPIs */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { v: "1.24M", l: "Total views", trend: "+12%", icon: Eye },
          { v: "84.2k", l: "Subscribers", trend: "+8%", icon: Users },
          { v: "342h", l: "Watch time", trend: "+24%", icon: Film },
          { v: "9.4k", l: "Avg/title", trend: "+3%", icon: TrendingUp },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl glass p-4">
            <k.icon className="h-4 w-4 text-violet" />
            <p className="mt-2 text-xl font-black">{k.v}</p>
            <p className="text-[11px] text-muted-foreground">{k.l}</p>
            <p className="mt-1 text-[10px] font-bold text-teal">{k.trend} this week</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-5 rounded-3xl glass p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Watch time trend</p>
            <p className="text-lg font-black">Last 7 days</p>
          </div>
          <BarChart3 className="h-5 w-5 text-teal" />
        </div>
        <div className="mt-4 flex h-32 items-end gap-2">
          {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-[var(--gradient-primary)]" style={{ height: `${h}%`, opacity: 0.5 + (h / 200) }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
        </div>
      </div>

      {/* Content management */}
      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="text-sm font-bold">Your library</h2>
          <button className="text-[11px] text-teal">Manage all</button>
        </div>
        <div className="space-y-2">
          {movies.slice(0, 4).map((m) => (
            <div key={m.id} className="flex items-center gap-3 rounded-2xl glass p-3">
              <img src={m.poster} alt="" className="h-16 w-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-bold">{m.title}</p>
                <p className="text-[11px] text-muted-foreground">{Math.floor(Math.random() * 200 + 50)}k views • {m.year}</p>
              </div>
              <span className="rounded-full bg-teal/20 px-2 py-1 text-[10px] font-bold text-teal">Live</span>
            </div>
          ))}
        </div>
      </div>

      {/* Moderation */}
      <div className="mt-7 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-orange-400" />
          <div className="flex-1">
            <p className="text-sm font-bold">Moderation queue</p>
            <p className="text-[11px] text-muted-foreground">7 reports awaiting review</p>
          </div>
          <button className="rounded-full bg-orange-500/20 px-3 py-1.5 text-xs font-bold text-orange-400">Review</button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button className="flex flex-col items-start gap-2 rounded-2xl glass p-4 text-left">
          <Upload className="h-5 w-5 text-violet" />
          <p className="text-sm font-bold">Upload new title</p>
          <p className="text-[10px] text-muted-foreground">Add a movie or series</p>
        </button>
        <button className="flex flex-col items-start gap-2 rounded-2xl glass p-4 text-left">
          <BarChart3 className="h-5 w-5 text-teal" />
          <p className="text-sm font-bold">Full analytics</p>
          <p className="text-[10px] text-muted-foreground">Audience, retention, geo</p>
        </button>
      </div>
    </div>
  );
}
