import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Lock, Eye } from "lucide-react";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

function Login() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-black">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Sign in to continue your cinematic journey.</p>
      </div>

      <form className="mt-8 space-y-4">
        <Field icon={<Mail className="h-4 w-4" />} placeholder="Email or username" type="email" />
        <Field icon={<Lock className="h-4 w-4" />} placeholder="Password" type="password" trailing={<Eye className="h-4 w-4 text-muted-foreground" />} />

        <div className="flex justify-end">
          <Link to="/auth/login" className="text-xs text-teal">Forgot password?</Link>
        </div>

        <Link
          to="/home"
          className="flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
        >
          Sign In
        </Link>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {["", "", ""].map((_, i) => (
          <button key={i} className="rounded-2xl glass py-3 text-sm font-semibold">
            {["Google", "Apple", "X"][i]}
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        New to CineSphere?{" "}
        <Link to="/auth/signup" className="font-semibold text-foreground">Create account</Link>
      </p>
    </div>
  );
}

function Field({
  icon,
  placeholder,
  type = "text",
  trailing,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3.5 focus-within:border-violet">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
      />
      {trailing}
    </div>
  );
}
