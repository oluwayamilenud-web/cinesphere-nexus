import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/auth/verify")({
  component: Verify,
});

function Verify() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/auth/signup" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-black">Verify your email</h1>
        <p className="text-sm text-muted-foreground">We sent a 6-digit code to your inbox.</p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= 2 ? "bg-[var(--gradient-primary)]" : "bg-white/10"}`} />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Step 2 of 4 — Verification</p>

      <div className="mt-10 flex justify-center gap-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            maxLength={1}
            defaultValue={i < 3 ? ["7", "2", "9"][i] : ""}
            className="h-14 w-12 rounded-2xl glass text-center text-2xl font-bold focus:border-violet focus:outline-none"
          />
        ))}
      </div>

      <button className="mx-auto mt-8 block text-sm text-teal">Resend code in 0:42</button>

      <Link
        to="/auth/interests"
        className="mt-12 flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
      >
        Verify & Continue
      </Link>
    </div>
  );
}
