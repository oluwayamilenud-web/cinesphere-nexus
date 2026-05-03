import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Flag, Check, X } from "lucide-react";
import { users } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/reports")({ component: Reports });

const reports = [
  { reason: "Spam in comments", target: "@kaicuts", count: 4, sev: "Low" },
  { reason: "Spoiler not tagged", target: "post #4821", count: 12, sev: "Medium" },
  { reason: "Hate speech", target: "@user_x", count: 23, sev: "High" },
  { reason: "Copyrighted clip", target: "post #4901", count: 8, sev: "High" },
  { reason: "Harassment in DMs", target: "@user_y", count: 6, sev: "Medium" },
];

const sevColor = { Low: "bg-blue-500/20 text-blue-400", Medium: "bg-amber-500/20 text-amber-400", High: "bg-rose-500/20 text-rose-400" } as const;

function Reports() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/admin" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Reports</h1>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 px-5 text-center">
        {[{ l: "Open", v: 27 }, { l: "Resolved", v: 142 }, { l: "Today", v: 8 }].map((s) => (
          <div key={s.l} className="rounded-2xl glass p-3">
            <p className="text-lg font-black">{s.v}</p>
            <p className="text-[10px] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3 px-5">
        {reports.map((r, i) => (
          <div key={i} className="rounded-2xl glass p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/15 text-rose-400">
                <Flag className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">{r.reason}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${sevColor[r.sev as keyof typeof sevColor]}`}>{r.sev}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">Target: {r.target} · {r.count} reports · Reported by @{users[i % users.length].handle}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-teal/15 py-2 text-xs font-bold text-teal"><Check className="h-3 w-3" /> Resolve</button>
                  <button className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-rose-500/15 py-2 text-xs font-bold text-rose-400"><X className="h-3 w-3" /> Take action</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
