import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Bell, Shield, Globe, Volume2, Download, Eye, LogOut } from "lucide-react";

export const Route = createFileRoute("/profile/settings")({
  component: Settings,
});

const groups = [
  {
    title: "Account",
    items: [
      { label: "Edit profile", icon: Eye },
      { label: "Privacy", icon: Shield },
      { label: "Language", icon: Globe, value: "English" },
    ],
  },
  {
    title: "Playback",
    items: [
      { label: "Audio & subtitles", icon: Volume2 },
      { label: "Downloads", icon: Download, value: "Wi-Fi only" },
      { label: "Quality", icon: Eye, value: "Auto (4K)" },
    ],
  },
  {
    title: "Notifications",
    items: [
      { label: "Push notifications", icon: Bell, toggle: true },
      { label: "Watch party invites", icon: Bell, toggle: true },
      { label: "Achievement alerts", icon: Bell, toggle: false },
    ],
  },
];

function Settings() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md p-5 pt-12">
      <div className="flex items-center gap-3">
        <Link to="/profile" className="flex h-10 w-10 items-center justify-center rounded-full glass">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-black">Settings</h1>
      </div>

      <div className="mt-6 space-y-6">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{g.title}</p>
            <div className="overflow-hidden rounded-2xl glass">
              {g.items.map((item, i) => (
                <div key={item.label} className={`flex items-center gap-3 p-4 ${i > 0 ? "border-t border-white/5" : ""}`}>
                  <item.icon className="h-4 w-4 text-violet" />
                  <span className="flex-1 text-sm font-semibold">{item.label}</span>
                  {"toggle" in item ? (
                    <div className={`relative h-6 w-10 rounded-full ${item.toggle ? "bg-[var(--gradient-primary)]" : "bg-white/15"}`}>
                      <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${item.toggle ? "left-[18px]" : "left-0.5"}`} />
                    </div>
                  ) : "value" in item ? (
                    <>
                      <span className="text-xs text-muted-foreground">{item.value}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </>
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <Link to="/" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm font-bold text-destructive">
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </div>
    </div>
  );
}
