import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, MessageCircle, Users, Sparkles, Trophy } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";

export const Route = createFileRoute("/profile/notifications")({ component: Notifications });

const items = [
  { icon: Heart, color: "text-rose-400", text: "Lyra and 12 others liked your post", time: "2m" },
  { icon: Users, color: "text-teal", text: "Kai invited you to 'Friday Sci-Fi Night'", time: "18m", action: "Join" },
  { icon: Trophy, color: "text-gold", text: "You earned the Cinephile badge!", time: "1h" },
  { icon: Sparkles, color: "text-violet", text: "AI picked 5 new films just for you", time: "3h" },
  { icon: MessageCircle, color: "text-blue-400", text: "Mira commented on your review", time: "5h" },
  { icon: Heart, color: "text-rose-400", text: "Ezra started following you", time: "1d", action: "Follow back" },
];

function Notifications() {
  return (
    <PhoneShell>
      <div className="flex items-center justify-between px-5 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
          <h1 className="text-2xl font-black">Notifications</h1>
        </div>
        <button className="text-xs font-semibold text-teal">Mark all read</button>
      </div>
      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto px-5">
        {["All", "Social", "Parties", "AI", "Rewards"].map((t, i) => (
          <button key={t} className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold ${i === 0 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-5 space-y-1 px-2">
        {items.map((it, i) => (
          <div key={i} className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${i < 3 ? "bg-violet/5" : ""}`}>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full glass ${it.color}`}>
              <it.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm">{it.text}</p>
              <p className="text-[10px] text-muted-foreground">{it.time} ago</p>
            </div>
            {it.action && <button className="rounded-full bg-violet/20 px-3 py-1 text-[11px] font-bold text-violet">{it.action}</button>}
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}
