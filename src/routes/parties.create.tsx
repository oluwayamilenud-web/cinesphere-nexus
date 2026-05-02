import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lock, Globe, Users, Calendar } from "lucide-react";
import { movies, users, avatars } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/parties/create")({
  component: CreateParty,
});

function CreateParty() {
  const [privacy, setPrivacy] = useState<"public" | "friends" | "private">("friends");
  const [picked, setPicked] = useState(movies[0].id);

  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12">
      <div className="flex items-center gap-3">
        <Link to="/parties" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-black">Create a watch party</h1>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-xs font-bold text-muted-foreground">PICK A MOVIE</h3>
        <div className="scrollbar-hide flex gap-3 overflow-x-auto">
          {movies.map((m) => (
            <button key={m.id} onClick={() => setPicked(m.id)} className={`relative shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${picked === m.id ? "border-violet glow-violet" : "border-transparent opacity-60"}`}>
              <img src={m.poster} alt="" className="h-40 w-28 object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 p-2 text-left">
                <p className="line-clamp-1 text-[11px] font-bold">{m.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-xs font-bold text-muted-foreground">PARTY NAME</h3>
        <input defaultValue="Neon Veil — Friday Night Sphere" className="w-full rounded-2xl glass px-4 py-3.5 text-sm focus:outline-none" />
      </div>

      <div className="mt-5">
        <h3 className="mb-3 text-xs font-bold text-muted-foreground">START TIME</h3>
        <button className="flex w-full items-center justify-between rounded-2xl glass px-4 py-3.5 text-sm">
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-teal" /> Tonight, 9:00 PM</span>
          <span className="text-muted-foreground">›</span>
        </button>
      </div>

      <div className="mt-5">
        <h3 className="mb-3 text-xs font-bold text-muted-foreground">PRIVACY</h3>
        <div className="grid grid-cols-3 gap-2">
          {([
            { key: "public", label: "Public", icon: Globe },
            { key: "friends", label: "Friends", icon: Users },
            { key: "private", label: "Private", icon: Lock },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setPrivacy(key)}
              className={`flex flex-col items-center gap-1 rounded-2xl border p-3 transition-all ${privacy === key ? "border-violet bg-violet/10 glow-violet" : "border-white/5 glass"}`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="mb-3 text-xs font-bold text-muted-foreground">INVITE FRIENDS</h3>
        <div className="flex flex-wrap gap-2">
          {users.slice(0, 4).map((u, i) => (
            <button key={u.id} className={`flex items-center gap-2 rounded-full p-1 pr-3 transition-all ${i < 2 ? "bg-violet/20 ring-1 ring-violet" : "glass"}`}>
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <img src={avatars} alt="" className="h-full w-full scale-150 object-cover" style={{ objectPosition: `${i * 30}% ${i * 25}%` }} />
              </div>
              <span className="text-xs font-semibold">{u.name.split(" ")[0]}</span>
            </button>
          ))}
          <button className="rounded-full glass px-3 py-2 text-xs font-semibold">+ More</button>
        </div>
      </div>

      <Link
        to="/parties/$id"
        params={{ id: "new" }}
        className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-primary)] py-4 font-bold text-white shadow-[var(--shadow-glow-violet)]"
      >
        <Users className="h-4 w-4" /> Start Party
      </Link>
    </div>
  );
}
