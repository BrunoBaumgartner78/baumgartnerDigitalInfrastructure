import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70",
        className
      )}
    >
      {children}
    </div>
  );
}

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn("mt-4 text-3xl md:text-5xl font-semibold tracking-tight", className)}>{children}</h1>
  );
}

export function Lead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-4 max-w-2xl text-white/80 text-base md:text-lg", className)}>{children}</p>;
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("font-semibold", className)}>{children}</div>;
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-2 text-white/80 text-sm leading-6", className)}>{children}</p>;
}
