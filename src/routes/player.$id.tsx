import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Subtitles,
  Settings,
  Maximize,
  Users,
  MessageCircle,
  Download,
  Check,
  X,
  Star,
  RotateCcw,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { getMovie, movies } from "@/lib/mock-data";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/player/$id")({
  component: Player,
});

type Panel = null | "quality" | "subs" | "audio" | "download" | "chat";

const QUALITIES = ["Auto", "4K HDR", "1080p", "720p", "480p", "Data Saver"];
const SUB_LANGS = ["Off", "English", "Español", "Français", "Deutsch", "日本語", "हिन्दी"];
const AUDIO_TRACKS = ["English 5.1", "English Stereo", "Español", "Director's Commentary"];

function Player() {
  const { id } = Route.useParams();
  const movie = getMovie(id);

  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(42); // %
  const [panel, setPanel] = useState<Panel>(null);
  const [ended, setEnded] = useState(false);

  // Settings
  const [quality, setQuality] = useState("Auto");
  const [sub, setSub] = useState("English");
  const [subSize, setSubSize] = useState([18]);
  const [subBg, setSubBg] = useState(true);
  const [audio, setAudio] = useState("English 5.1");
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  const startDownload = () => {
    if (downloaded || downloading) return;
    setDownloading(true);
    setDownloadProgress(0);
    const t = setInterval(() => {
      setDownloadProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setDownloading(false);
          setDownloaded(true);
          return 100;
        }
        return p + 7;
      });
    }, 220);
  };

  const recs = movies.filter((m) => m.id !== movie.id).slice(0, 4);
  const next = recs[0];

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-black">
      <img src={movie.poster} alt={movie.title} className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtitle preview overlay */}
      {sub !== "Off" && !ended && (
        <div className="pointer-events-none absolute inset-x-0 bottom-44 flex justify-center px-6">
          <span
            className={`text-center font-semibold leading-snug text-white ${subBg ? "bg-black/60 px-3 py-1 rounded" : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"}`}
            style={{ fontSize: `${subSize[0]}px` }}
          >
            "You don't cross the veil. The veil crosses you." — {sub}
          </span>
        </div>
      )}

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 pt-12">
        <Link to="/movie/$id" params={{ id: movie.id }} className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1 px-4">
          <p className="text-center text-xs text-white/70">Now Playing</p>
          <p className="text-center text-sm font-bold">{movie.title}</p>
        </div>
        <Link to="/parties/create" className="flex h-10 items-center gap-1.5 rounded-full glass-strong px-3">
          <Users className="h-4 w-4 text-teal" />
          <span className="text-xs font-bold">Party</span>
        </Link>
      </div>

      {/* Center play */}
      {!ended && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-8">
            <button onClick={() => setProgress((p) => Math.max(0, p - 5))} className="text-white/80 active:scale-90 transition-transform">
              <SkipBack className="h-8 w-8" />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-2xl border border-white/20 active:scale-90 transition-transform"
            >
              {playing ? <Pause className="h-9 w-9 fill-white text-white" /> : <Play className="h-9 w-9 fill-white text-white" />}
            </button>
            <button onClick={() => setEnded(true)} className="text-white/80 active:scale-90 transition-transform">
              <SkipForward className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      {!ended && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 pb-8">
          <div className="mb-3 flex items-center gap-3 text-xs text-white/80">
            <span>00:{String(Math.floor((progress / 100) * 134)).padStart(2, "0")}:18</span>
            <div
              className="relative h-1 flex-1 cursor-pointer overflow-visible rounded-full bg-white/20"
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setProgress(Math.round(((e.clientX - r.left) / r.width) * 100));
              }}
            >
              <div className="h-full rounded-full bg-[var(--gradient-primary)]" style={{ width: `${progress}%` }} />
              <div
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_var(--violet)]"
                style={{ left: `${progress}%` }}
              />
            </div>
            <span>02:14:00</span>
          </div>

          <div className="flex items-center justify-around">
            <ControlBtn icon={<Volume2 className="h-4 w-4" />} label="Audio" onClick={() => setPanel("audio")} />
            <ControlBtn icon={<Subtitles className="h-4 w-4" />} label="Subs" onClick={() => setPanel("subs")} active={sub !== "Off"} />
            <ControlBtn icon={<Settings className="h-4 w-4" />} label={quality} onClick={() => setPanel("quality")} />
            <ControlBtn
              icon={
                downloaded ? <Check className="h-4 w-4 text-teal" /> : <Download className="h-4 w-4" />
              }
              label={downloaded ? "Saved" : downloading ? `${downloadProgress}%` : "Download"}
              onClick={() => setPanel("download")}
              active={downloading || downloaded}
            />
            <ControlBtn icon={<Maximize className="h-4 w-4" />} label="Full" />
          </div>
        </div>
      )}

      {/* End-of-movie recommendations overlay */}
      {ended && (
        <div className="absolute inset-0 z-20 flex flex-col bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="flex items-center justify-between p-5 pt-12">
            <p className="text-xs uppercase tracking-widest text-white/60">You finished</p>
            <button onClick={() => { setEnded(false); setProgress(0); }} className="flex h-9 w-9 items-center justify-center rounded-full glass">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-5">
            <h2 className="text-2xl font-black">{movie.title}</h2>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-semibold">
                <ThumbsUp className="h-3.5 w-3.5" /> Loved it
              </button>
              <button className="flex items-center gap-1 rounded-full glass px-3 py-2 text-xs font-semibold">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}
              </button>
              <button className="flex items-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-semibold">
                <Share2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Up next big card */}
          {next && (
            <div className="mx-5 mt-5 overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-40">
                <img src={next.poster} alt={next.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-teal">Up next · auto-play in 8s</p>
                  <p className="text-base font-bold">{next.title}</p>
                </div>
              </div>
              <div className="flex gap-2 p-3">
                <Link
                  to="/player/$id"
                  params={{ id: next.id }}
                  onClick={() => { setEnded(false); setProgress(0); }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] py-3 text-sm font-bold shadow-[var(--shadow-glow-violet)]"
                >
                  <Play className="h-4 w-4 fill-current" /> Play next
                </Link>
                <button onClick={() => { setEnded(false); setProgress(0); }} className="flex items-center gap-1.5 rounded-xl glass px-3 py-3 text-xs font-semibold">
                  <RotateCcw className="h-3.5 w-3.5" /> Rewatch
                </button>
              </div>
            </div>
          )}

          {/* Recs grid */}
          <div className="mt-6 px-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/60">Because you watched</p>
            <div className="grid grid-cols-3 gap-2">
              {recs.map((m) => (
                <Link
                  key={m.id}
                  to="/movie/$id"
                  params={{ id: m.id }}
                  className="group relative aspect-[2/3] overflow-hidden rounded-lg"
                >
                  <img src={m.poster} alt={m.title} className="h-full w-full object-cover transition group-active:scale-95" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5">
                    <p className="truncate text-[10px] font-bold">{m.title}</p>
                    <p className="text-[9px] text-teal">{m.match}% match</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto flex gap-2 p-5">
            <Link to="/parties/create" className="flex flex-1 items-center justify-center gap-2 rounded-xl glass-strong py-3 text-sm font-semibold">
              <Users className="h-4 w-4 text-teal" /> Discuss in a Party
            </Link>
            <Link to="/social" className="flex flex-1 items-center justify-center gap-2 rounded-xl glass-strong py-3 text-sm font-semibold">
              <MessageCircle className="h-4 w-4 text-violet" /> Post review
            </Link>
          </div>
        </div>
      )}

      {/* Bottom sheet */}
      {panel && (
        <>
          <button onClick={() => setPanel(null)} className="absolute inset-0 z-30 bg-black/50 animate-fade-in" />
          <div className="absolute inset-x-0 bottom-0 z-40 max-h-[70vh] overflow-y-auto rounded-t-3xl glass-strong p-5 pb-8 animate-slide-in-right">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/30" />
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">
                {panel === "quality" && "Video Quality"}
                {panel === "subs" && "Subtitles & CC"}
                {panel === "audio" && "Audio Track"}
                {panel === "download" && "Download"}
              </h3>
              <button onClick={() => setPanel(null)} className="flex h-8 w-8 items-center justify-center rounded-full glass">
                <X className="h-4 w-4" />
              </button>
            </div>

            {panel === "quality" && (
              <div className="space-y-1">
                {QUALITIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => { setQuality(q); setPanel(null); }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium hover:bg-white/5"
                  >
                    <span className="flex flex-col items-start">
                      <span>{q}</span>
                      <span className="text-[10px] text-white/50">
                        {q === "Auto" && "Adapts to network"}
                        {q === "4K HDR" && "Best quality · ~7GB/hr"}
                        {q === "1080p" && "Full HD · ~3GB/hr"}
                        {q === "720p" && "HD · ~1.5GB/hr"}
                        {q === "480p" && "SD · ~700MB/hr"}
                        {q === "Data Saver" && "Lowest data use"}
                      </span>
                    </span>
                    {quality === q && <Check className="h-4 w-4 text-teal" />}
                  </button>
                ))}
              </div>
            )}

            {panel === "subs" && (
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-white/50">Language</p>
                  <div className="space-y-1">
                    {SUB_LANGS.map((l) => (
                      <button
                        key={l}
                        onClick={() => setSub(l)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm hover:bg-white/5"
                      >
                        {l}
                        {sub === l && <Check className="h-4 w-4 text-teal" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl glass p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">Text size</span>
                    <span className="text-xs text-white/60">{subSize[0]}px</span>
                  </div>
                  <Slider value={subSize} onValueChange={setSubSize} min={12} max={28} step={1} />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium">Background box</span>
                    <Switch checked={subBg} onCheckedChange={setSubBg} />
                  </div>
                </div>
              </div>
            )}

            {panel === "audio" && (
              <div className="space-y-1">
                {AUDIO_TRACKS.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAudio(a); setPanel(null); }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium hover:bg-white/5"
                  >
                    {a}
                    {audio === a && <Check className="h-4 w-4 text-teal" />}
                  </button>
                ))}
              </div>
            )}

            {panel === "download" && (
              <div className="space-y-4">
                <div className="rounded-2xl glass p-4">
                  <p className="text-sm font-bold">{movie.title}</p>
                  <p className="mt-0.5 text-xs text-white/60">{movie.duration} · {quality}</p>
                  <div className="mt-3">
                    {downloaded ? (
                      <div className="flex items-center gap-2 rounded-xl bg-teal/15 p-3 text-sm font-semibold text-teal">
                        <Check className="h-4 w-4" /> Available offline
                      </div>
                    ) : downloading ? (
                      <div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full bg-[var(--gradient-primary)] transition-all" style={{ width: `${downloadProgress}%` }} />
                        </div>
                        <p className="mt-2 text-xs text-white/60">Downloading… {downloadProgress}%</p>
                      </div>
                    ) : (
                      <button
                        onClick={startDownload}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] py-3 text-sm font-bold shadow-[var(--shadow-glow-violet)]"
                      >
                        <Download className="h-4 w-4" /> Download for offline
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-white/50">
                  Downloads are available for 30 days. Plays without internet inside CineSphere.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ControlBtn({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 text-white/80 transition active:scale-90">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${active ? "bg-teal/20 text-teal" : "glass"}`}>{icon}</div>
      <span className="max-w-[60px] truncate text-[10px]">{label}</span>
    </button>
  );
}
