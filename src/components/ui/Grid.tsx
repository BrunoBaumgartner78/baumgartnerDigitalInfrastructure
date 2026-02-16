import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Grid2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-5", className)}>{children}</div>;
}

export function Grid3({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-5", className)}>{children}</div>;
}
