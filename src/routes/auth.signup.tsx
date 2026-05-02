import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, User, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/auth/signup")({
  component: Signup,
});

function Signup() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-black">Create your <span className="gradient-aurora-text">Sphere</span></h1>
        <p className="text-sm text-muted-foreground">Build your cinematic identity in seconds.</p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? "bg-[var(--gradient-primary)]" : "bg-white/10"}`} />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Step 1 of 4 — Account</p>

      <form className="mt-8 space-y-4">
        <Field icon={<User className="h-4 w-4" />} placeholder="Username" />
        <Field icon={<Mail className="h-4 w-4" />} placeholder="Email" type="email" />
        <Field icon={<Lock className="h-4 w-4" />} placeholder="Password" type="password" />

        <Link
          to="/auth/verify"
          className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
        >
          Continue
        </Link>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already a member?{" "}
        <Link to="/auth/login" className="font-semibold text-foreground">Sign in</Link>
      </p>
    </div>
  );
}

function Field({ icon, placeholder, type = "text" }: { icon: React.ReactNode; placeholder: string; type?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3.5">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
      />
    </div>
  );
}
