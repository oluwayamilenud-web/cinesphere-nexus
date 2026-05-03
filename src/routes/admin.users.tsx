import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, MoreHorizontal, ShieldAlert } from "lucide-react";
import { users } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/users")({ component: AdminUsers });

const statuses = ["Active", "Active", "Active", "Suspended", "Active"];

function AdminUsers() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/admin" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Users</h1>
      </div>
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 rounded-full glass px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search users" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 px-5 text-center">
        {[
          { l: "Total", v: "184k" },
          { l: "Active 7d", v: "92k" },
          { l: "Flagged", v: "27" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl glass p-3">
            <p className="text-lg font-black">{s.v}</p>
            <p className="text-[10px] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 px-5">
        <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Recent</p>
        <div className="space-y-2">
          {users.map((u, i) => (
            <div key={u.id} className="flex items-center gap-3 rounded-2xl glass p-3">
              <div className="h-10 w-10 rounded-full bg-[var(--gradient-aurora)]" />
              <div className="flex-1">
                <p className="text-sm font-bold">{u.name}</p>
                <p className="text-[11px] text-muted-foreground">@{u.handle} · Lv {u.level}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${statuses[i] === "Active" ? "bg-teal/20 text-teal" : "bg-rose-500/20 text-rose-400"}`}>{statuses[i]}</span>
              <button><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5 mt-5 flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4">
        <ShieldAlert className="h-5 w-5 text-rose-400" />
        <div className="flex-1">
          <p className="text-sm font-bold">3 accounts need review</p>
          <p className="text-[11px] text-muted-foreground">Multiple reports in last 24h</p>
        </div>
        <button className="rounded-full bg-rose-500 px-3 py-1.5 text-xs font-bold">Review</button>
      </div>
    </div>
  );
}
