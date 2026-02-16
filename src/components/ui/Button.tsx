import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-cyan-400 " +
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15",
  secondary: "rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/90",
  ghost: "rounded-2xl border border-transparent hover:bg-white/5 text-white/80 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

export function Button(props: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const {
    href,
    onClick,
    children,
    className,
    variant = "primary",
    size = "md",
    type = "button",
    disabled,
  } = props;

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
