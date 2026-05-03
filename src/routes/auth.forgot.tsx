import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/auth/forgot")({ component: Forgot });

function Forgot() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/auth/login" className="flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <div className="mt-10">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow-violet)]">
          <Mail className="h-6 w-6" />
        </div>
        <h1 className="text-3xl font-black">Forgot password?</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the email tied to your CineSphere account and we'll send a reset link.
        </p>
      </div>
      <div className="mt-8 space-y-3">
        <input
          type="email"
          placeholder="you@cinesphere.app"
          className="w-full rounded-2xl glass px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-violet"
        />
        <Link
          to="/auth/reset"
          className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 text-sm font-bold shadow-[var(--shadow-glow-violet)]"
        >
          Send reset link
        </Link>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Remembered it?{" "}
        <Link to="/auth/login" className="font-semibold text-teal">
          Back to login
        </Link>
      </p>
    </div>
  );
}
