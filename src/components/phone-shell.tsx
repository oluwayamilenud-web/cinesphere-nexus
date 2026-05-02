import { type ReactNode } from "react";
import { BottomNav } from "./bottom-nav";

export function PhoneShell({
  children,
  showNav = true,
  className = "",
}: {
  children: ReactNode;
  showNav?: boolean;
  className?: string;
}) {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden">
      <div className={`relative pb-28 ${className}`}>{children}</div>
      {showNav && <BottomNav />}
    </div>
  );
}
