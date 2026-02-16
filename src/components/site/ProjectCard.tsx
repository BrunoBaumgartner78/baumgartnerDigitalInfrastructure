"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { PrimaryCard } from "@/components/ui/Cards";
import { cn } from "@/lib/cn";

export function ProjectCard({
  title,
  children,
  capabilities,
  caseStudySlug,
}: {
  title: string;
  children?: ReactNode;
  capabilities?: string;
  caseStudySlug?: string;
}) {
  return (
    <PrimaryCard>
      <div className="flex items-start justify-between">
        <div>
          <div className="headline-md">{title}</div>
          {children ? <div className="text-body mt-3">{children}</div> : null}
          {capabilities ? <div className="mt-5 text-sm text-white/70">{capabilities}</div> : null}
        </div>

        {caseStudySlug ? (
          <div className="w-32">
            <Link
              href={`/case-studies/${caseStudySlug}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              Case Study öffnen
            </Link>
          </div>
        ) : null}
      </div>
    </PrimaryCard>
  );
}
