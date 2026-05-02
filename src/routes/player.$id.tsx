import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, Subtitles, Settings, Maximize, Users, MessageCircle } from "lucide-react";
import { useState } from "react";
import { getMovie } from "@/lib/mock-data";

export const Route = createFileRoute("/player/$id")({
  component: Player,
});

function Player() {
  const { id } = Route.useParams();
  const movie = getMovie(id);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-black">
      {/* Video */}
      <img src={movie.poster} alt={movie.title} className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 pt-12">
        <Link to="/movie/$id" params={{ id: movie.id }} className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1 px-4">
          <p className="text-center text-xs text-white/70">Now Playing</p>
          <p className="text-center text-sm font-bold">{movie.title}</p>
        </div>
        <Link to="/parties/create" className="flex h-10 items-center gap-1.5 rounded-full glass-strong px-3">
          <Users className="h-4 w-4 text-teal" />
          <span className="text-xs font-bold">Party</span>
        </Link>
      </div>

      {/* Center play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <button className="text-white/80 transition-transform active:scale-90">
            <SkipBack className="h-8 w-8" />
          </button>
          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-2xl border border-white/20 transition-transform active:scale-90"
          >
            {playing ? <Pause className="h-9 w-9 fill-white text-white" /> : <Play className="h-9 w-9 fill-white text-white" />}
          </button>
          <button className="text-white/80 transition-transform active:scale-90">
            <SkipForward className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-0 p-5 pb-8">
        {/* Progress */}
        <div className="mb-3 flex items-center gap-3 text-xs text-white/80">
          <span>00:42:18</span>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[42%] rounded-full bg-[var(--gradient-primary)]" />
            <div className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_var(--violet)]" style={{ left: "42%" }} />
          </div>
          <span>02:14:00</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-around">
          <ControlBtn icon={<Volume2 className="h-4 w-4" />} label="Audio" />
          <ControlBtn icon={<Subtitles className="h-4 w-4" />} label="Subs" />
          <ControlBtn icon={<Settings className="h-4 w-4" />} label="Quality" />
          <ControlBtn icon={<MessageCircle className="h-4 w-4" />} label="Chat" />
          <ControlBtn icon={<Maximize className="h-4 w-4" />} label="Full" />
        </div>
      </div>
    </div>
  );
}

function ControlBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-white/80 transition active:scale-90">
      <div className="flex h-10 w-10 items-center justify-center rounded-full glass">{icon}</div>
      <span className="text-[10px]">{label}</span>
    </button>
  );
}
