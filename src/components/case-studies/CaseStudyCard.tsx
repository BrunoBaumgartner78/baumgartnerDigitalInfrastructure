import Link from "next/link";
import { cn } from "@/lib/cn";
import { PrimaryCard } from "@/components/ui/Cards";

export function CaseStudyCard({
  slug,
  title,
  sector,
  timeframe,
  outcomeHeadline,
}: {
  slug: string;
  title: string;
  sector: string;
  timeframe: string;
  outcomeHeadline: string;
}) {
  return (
    <PrimaryCard className="p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-white/70 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          {sector} · {timeframe}
        </div>
        <Link
          href={`/case-studies/${slug}`}
          className={cn(
            "text-sm text-white/80 hover:text-white",
            "rounded-full border border-white/10 px-3 py-1 hover:bg-white/5 transition"
          )}
        >
          Öffnen
        </Link>
      </div>

      <div className="headline-md mt-4">{title}</div>
      <p className="text-body mt-3">{outcomeHeadline}</p>
    </PrimaryCard>
  );
}
