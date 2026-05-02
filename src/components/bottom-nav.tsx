import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Compass, Users, PartyPopper, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/discover", label: "Discover", icon: Compass },
  { to: "/social", label: "Social", icon: Users },
  { to: "/parties", label: "Parties", icon: PartyPopper },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pt-2">
      <div className="glass-strong mx-auto flex max-w-md items-center justify-between rounded-3xl px-2 py-2 shadow-[0_-10px_40px_-10px_oklch(0.62_0.27_295/0.4)]">
        {items.map((item) => {
          const active = path === item.to || (item.to !== "/home" && path.startsWith(item.to));
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-2 transition-all",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active && (
                <span className="absolute inset-0 -z-10 rounded-2xl bg-[var(--gradient-primary)] opacity-20" />
              )}
              {active && (
                <span className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[var(--gradient-primary)] shadow-[0_0_12px_var(--violet)]" />
              )}
              <Icon className={cn("h-5 w-5 transition-transform", active && "scale-110")} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
