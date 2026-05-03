import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, KeyRound, Eye } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/auth/reset")({ component: Reset });

function Reset() {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/auth/forgot" className="flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <div className="mt-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow-violet)]">
          <KeyRound className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-black">Set a new password</h1>
        <p className="mt-2 text-sm text-muted-foreground">Use 8+ chars with a number and a symbol.</p>
      </div>
      <div className="mt-8 space-y-3">
        {["New password", "Confirm new password"].map((p) => (
          <div key={p} className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder={p}
              className="w-full rounded-2xl glass px-4 py-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-violet"
            />
            <button onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        ))}
        <div className="space-y-1.5 rounded-2xl glass p-3 text-xs text-muted-foreground">
          {["At least 8 characters", "One number", "One symbol"].map((r) => (
            <div key={r} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {r}
            </div>
          ))}
        </div>
        <Link
          to="/auth/login"
          className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]"
        >
          Save & sign in
        </Link>
      </div>
    </div>
  );
}
