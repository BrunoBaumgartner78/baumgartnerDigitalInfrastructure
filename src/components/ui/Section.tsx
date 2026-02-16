import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  children,
  tight = false,
  className,
}: {
  children: ReactNode;
  tight?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        tight ? "section-tight" : "section",
        className
      )}
    >
      {children}
    </section>
  );
}
