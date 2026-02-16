import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return <div className={cn("rounded-2xl border border-white/10 bg-white/5 p-5", className)}>{children}</div>;
}

export default Card;
