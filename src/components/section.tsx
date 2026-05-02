import type { ReactNode } from "react";

export function SectionHeader({
  title,
  action,
  subtitle,
}: {
  title: string;
  action?: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-3 flex items-end justify-between px-5">
      <div>
        <h2 className="text-lg font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function ScrollRow({ children }: { children: ReactNode }) {
  return (
    <div className="scrollbar-hide flex gap-3 overflow-x-auto px-5 pb-2">
      {children}
    </div>
  );
}
