import { ReactNode } from "react";
import { cn } from "@/lib/cn";

function baseCardClass(extra?: string) {
  return cn(
    "rounded-2xl border border-white/10 bg-white/5 p-6",
    "shadow-[var(--shadow-card)]",
    "transition",
    extra
  );
}

export function PrimaryCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={baseCardClass(
        cn("hover:bg-white/7 hover:border-white/14", className)
      )}
    >
      {children}
    </div>
  );
}

export function SecondaryCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={baseCardClass(
        cn("bg-white/[0.045] hover:bg-white/[0.06]", className)
      )}
    >
      {children}
    </div>
  );
}
