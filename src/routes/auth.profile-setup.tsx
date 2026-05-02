import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Camera } from "lucide-react";
import { avatars } from "@/lib/mock-data";

export const Route = createFileRoute("/auth/profile-setup")({
  component: ProfileSetup,
});

function ProfileSetup() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-6 pt-12">
      <Link to="/auth/interests" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass">
        <ArrowLeft className="h-4 w-4" />
      </Link>

      <div className="mt-8 space-y-2">
        <h1 className="text-3xl font-black">Build your identity</h1>
        <p className="text-sm text-muted-foreground">This is how the Sphere will know you.</p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-1 flex-1 rounded-full bg-[var(--gradient-primary)]" />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Step 4 of 4 — Profile</p>

      <div className="mt-10 flex flex-col items-center">
        <div className="relative">
          <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-violet glow-violet">
            <img src={avatars} alt="" className="h-full w-full object-cover object-[20%_20%] scale-150" />
          </div>
          <button className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-white shadow-lg">
            <Camera className="h-4 w-4" />
          </button>
        </div>
      </div>

      <form className="mt-8 space-y-4">
        <div className="rounded-2xl glass px-4 py-3.5">
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Display name</label>
          <input defaultValue="Nova Reyes" className="mt-1 w-full bg-transparent text-sm font-semibold focus:outline-none" />
        </div>
        <div className="rounded-2xl glass px-4 py-3.5">
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground">Bio</label>
          <textarea
            rows={3}
            defaultValue="Cinephile. Sci-fi soul. Hosting watch parties every Friday."
            className="mt-1 w-full resize-none bg-transparent text-sm focus:outline-none"
          />
        </div>
      </form>

      <Link
        to="/home"
        className="mt-8 flex items-center justify-center rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
      >
        Enter the Sphere ✨
      </Link>
    </div>
  );
}
