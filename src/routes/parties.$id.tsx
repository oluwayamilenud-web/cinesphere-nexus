import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Send, Smile, Pause, Play, Users, Crown } from "lucide-react";
import { useState } from "react";
import { movies, watchPartyMessages, users, avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/parties/$id")({
  component: PartyRoom,
});

function PartyRoom() {
  const movie = movies[0];
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-black">
      {/* Top: video */}
      <div className="relative h-[36vh] min-h-[260px]">
        <img src={movie.poster} alt="" className="h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 pt-10">
          <Link to="/parties" className="flex h-9 w-9 items-center justify-center rounded-full glass-strong">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-bold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
          </div>
          <div className="flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[11px]">
            <Users className="h-3 w-3" /> 12
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-2xl border border-white/30"
          >
            {playing ? <Pause className="h-6 w-6 fill-white text-white" /> : <Play className="h-6 w-6 fill-white text-white" />}
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex items-center gap-2 text-[10px] text-white/80">
            <span>00:42</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[42%] bg-[var(--gradient-primary)]" />
            </div>
            <span>02:14</span>
          </div>
          <p className="mt-1 text-center text-[10px] text-white/60">
            <Crown className="mr-1 inline h-3 w-3 text-gold" /> Synced to host @{users[0].handle}
          </p>
        </div>
      </div>

      {/* Bottom: chat */}
      <div className="relative flex h-[64vh] flex-col">
        {/* Active viewers */}
        <div className="border-b border-white/5 px-4 py-3">
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {users.map((u, i) => (
              <div key={u.id} className="relative shrink-0">
                <div className={`h-9 w-9 overflow-hidden rounded-full ring-2 ${i === 0 ? "ring-gold" : "ring-violet/50"}`}>
                  <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" style={{ objectPosition: `${i * 25}% ${i * 30}%` }} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-teal ring-2 ring-background" />
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {watchPartyMessages.map((m, i) => (
            <div key={m.id} className="flex items-start gap-2">
              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full">
                <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" style={{ objectPosition: `${i * 25}% ${i * 30}%` }} />
              </div>
              <div className="flex-1">
                <p className="flex items-center gap-1.5 text-[11px]">
                  <span className="font-bold">{m.user.name.split(" ")[0]}</span>
                  <span className="text-muted-foreground">{m.time}</span>
                </p>
                <p className="text-sm">{m.text} {m.reaction && <span>{m.reaction}</span>}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reaction shelf */}
        <div className="border-t border-white/5 px-4 py-2">
          <div className="flex justify-around">
            {["🔥", "💜", "😱", "😂", "🤯", "💔"].map((e) => (
              <button key={e} className="text-2xl transition-transform active:scale-125">{e}</button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-white/5 p-3">
          <div className="flex items-center gap-2 rounded-full glass-strong p-1.5 pl-4">
            <input placeholder="Say something to the party..." className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none" />
            <button className="flex h-9 w-9 items-center justify-center rounded-full glass"><Smile className="h-4 w-4" /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-primary)]"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
