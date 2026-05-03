import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, ChevronRight, MessageCircle, Mail, FileText, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/profile/help")({ component: Help });

const topics = [
  { icon: FileText, t: "Getting started" },
  { icon: ShieldCheck, t: "Account & security" },
  { icon: MessageCircle, t: "Watch parties" },
  { icon: Mail, t: "Billing & subscriptions" },
];
const faqs = [
  "How do I reset my password?",
  "Why is my video buffering?",
  "Can I watch offline?",
  "How does the Season Pass work?",
  "How do I report a user?",
];

function Help() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md pb-10">
      <div className="flex items-center gap-3 px-5 pt-12">
        <Link to="/profile" className="flex h-9 w-9 items-center justify-center rounded-full glass"><ArrowLeft className="h-4 w-4" /></Link>
        <h1 className="text-2xl font-black">Help & support</h1>
      </div>
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 rounded-full glass px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search articles" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 px-5">
        {topics.map((t) => (
          <button key={t.t} className="flex flex-col items-start gap-3 rounded-2xl glass p-4 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-violet"><t.icon className="h-4 w-4" /></div>
            <p className="text-sm font-bold">{t.t}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Popular questions</p>
        <div className="rounded-2xl glass">
          {faqs.map((f, i) => (
            <button key={f} className={`flex w-full items-center justify-between p-4 text-left ${i ? "border-t border-white/5" : ""}`}>
              <p className="text-sm">{f}</p>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
      <div className="mx-5 mt-6 flex items-center gap-3 rounded-2xl bg-[var(--gradient-primary)] p-4 shadow-[var(--shadow-glow-violet)]">
        <MessageCircle className="h-5 w-5" />
        <div className="flex-1">
          <p className="text-sm font-bold">Still need help?</p>
          <p className="text-xs opacity-80">Average response: 2 minutes</p>
        </div>
        <button className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold backdrop-blur-md">Chat</button>
      </div>
    </div>
  );
}
