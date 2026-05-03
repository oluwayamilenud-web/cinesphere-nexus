import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, Check, Copy } from "lucide-react";
import { users } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/parties/invite")({ component: Invite });

function Invite() {
  const [picked, setPicked] = useState<Set<string>>(new Set([users[0].id, users[2].id]));
  const toggle = (id: string) => {
    const n = new Set(picked);
    n.has(id) ? n.delete(id) : n.add(id);
    setPicked(n);
  };
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-32">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/parties/schedule" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Invite friends</h1>
      </div>
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 rounded-full glass px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search friends" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl glass mx-5 p-3">
        <div>
          <p className="text-xs text-muted-foreground">Share invite link</p>
          <p className="text-xs font-mono text-teal">cinesphere.app/p/x4n2k</p>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-violet/20 text-violet"><Copy className="h-4 w-4" /></button>
      </div>
      <div className="mt-4 px-5">
        <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Friends</p>
        <div className="space-y-1">
          {users.map((u) => {
            const sel = picked.has(u.id);
            return (
              <button key={u.id} onClick={() => toggle(u.id)} className="flex w-full items-center gap-3 rounded-2xl p-2 active:bg-white/5">
                <div className="h-10 w-10 rounded-full bg-[var(--gradient-aurora)]" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-bold">{u.name}</p>
                  <p className="text-xs text-muted-foreground">@{u.handle}</p>
                </div>
                <div className={`flex h-7 w-7 items-center justify-center rounded-full border-2 ${sel ? "border-violet bg-violet" : "border-white/20"}`}>
                  {sel && <Check className="h-4 w-4" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md p-5">
        <Link to="/parties/$id" params={{ id: "new" }} className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]">
          Send {picked.size} invites & launch
        </Link>
      </div>
    </div>
  );
}
