import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Camera } from "lucide-react";

export const Route = createFileRoute("/profile/edit")({ component: Edit });

function Edit() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 glass-strong px-5 py-3 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <p className="text-sm font-bold">Edit profile</p>
        <button className="rounded-full bg-[var(--gradient-primary)] px-4 py-1.5 text-xs font-bold">Save</button>
      </div>
      <div className="flex flex-col items-center pt-8">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-[var(--gradient-aurora)]" />
          <button className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-violet shadow-lg"><Camera className="h-4 w-4" /></button>
        </div>
        <button className="mt-3 text-xs font-semibold text-teal">Change avatar</button>
      </div>
      <div className="mt-6 space-y-3 px-5">
        {[
          { label: "Display name", value: "Nova Reyes" },
          { label: "Username", value: "novaframes" },
          { label: "Bio", value: "Cinephile · neon dreams · letterbox veteran", area: true },
          { label: "Location", value: "Brooklyn, NY" },
          { label: "Website", value: "nova.frames" },
        ].map((f) => (
          <div key={f.label} className="rounded-2xl glass p-4">
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{f.label}</p>
            {f.area ? (
              <textarea defaultValue={f.value} className="mt-1 w-full resize-none bg-transparent text-sm outline-none" rows={2} />
            ) : (
              <input defaultValue={f.value} className="mt-1 w-full bg-transparent text-sm outline-none" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Favorite genres</p>
        <div className="flex flex-wrap gap-2">
          {["Sci-Fi", "Cyberpunk", "Drama", "Fantasy", "Thriller", "Horror"].map((g, i) => (
            <button key={g} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${i < 3 ? "bg-[var(--gradient-primary)]" : "glass"}`}>{g}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
