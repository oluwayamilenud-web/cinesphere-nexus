import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Video, Plus, Send, Smile } from "lucide-react";
import { users, movies } from "@/lib/mock-data";

export const Route = createFileRoute("/messages/$id")({ component: Chat });

const thread = [
  { me: false, text: "yo did you start The Neon Veil yet?", time: "8:21 PM" },
  { me: true, text: "halfway through, my brain is mush", time: "8:23 PM" },
  { me: false, text: "wait til the hallway scene", time: "8:23 PM" },
  { me: false, kind: "movie", id: "neon-veil" },
  { me: true, text: "joining your party tonight ✨", time: "8:25 PM" },
  { me: false, text: "9pm sharp 🚀", time: "8:25 PM" },
];

function Chat() {
  const { id } = Route.useParams();
  const user = users.find((u) => u.id === id) ?? users[0];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
      <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-white/5 glass-strong px-4 py-3 pt-12">
        <Link to="/messages" className="flex h-9 w-9 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="h-9 w-9 rounded-full bg-[var(--gradient-aurora)]" />
        <div className="flex-1">
          <p className="text-sm font-bold">{user.name}</p>
          <p className="text-[10px] text-teal">● Online</p>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full glass"><Phone className="h-4 w-4" /></button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full glass"><Video className="h-4 w-4" /></button>
      </div>
      <div className="flex-1 space-y-3 p-4 pb-28">
        {thread.map((m, i) => {
          if (m.kind === "movie") {
            const mv = movies.find((x) => x.id === m.id)!;
            return (
              <Link to="/movie/$id" params={{ id: mv.id }} key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                <div className="flex max-w-[75%] gap-2 rounded-2xl glass p-2">
                  <img src={mv.poster} alt="" className="h-16 w-12 rounded-md object-cover" />
                  <div className="py-1">
                    <p className="text-[10px] text-muted-foreground">Movie</p>
                    <p className="text-sm font-bold">{mv.title}</p>
                    <p className="text-[10px] text-teal">{mv.match}% match</p>
                  </div>
                </div>
              </Link>
            );
          }
          return (
            <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${m.me ? "bg-[var(--gradient-primary)]" : "glass"}`}>
                {m.text}
                <p className="mt-1 text-[9px] opacity-60">{m.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md border-t border-white/5 glass-strong p-3">
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full glass"><Plus className="h-4 w-4" /></button>
          <input placeholder="Message…" className="flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm outline-none" />
          <button className="flex h-10 w-10 items-center justify-center rounded-full glass"><Smile className="h-4 w-4" /></button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-primary)]"><Send className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}
