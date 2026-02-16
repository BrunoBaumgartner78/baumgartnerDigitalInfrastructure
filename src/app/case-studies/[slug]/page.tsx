import { notFound } from "next/navigation";
import { getCaseStudy } from "@/content/case-studies";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Grid2 } from "@/components/ui/Grid";
import { PrimaryCard, SecondaryCard } from "@/components/ui/Cards";

export default async function CaseStudyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return notFound();

  // If note contains a URL, render a clickable link (simple heuristic)
  const noteUrl = cs.note?.match(/https?:\/\/\S+/)?.[0];

  return (
    <>
      <Section className="max-w-4xl">
        <div className="text-xs text-white/70 rounded-full border border-white/10 bg-white/5 px-3 py-1 inline-flex">
          {cs.sector} · {cs.timeframe}
        </div>

        <PageHeader title={cs.title} description={cs.outcomeHeadline} />
      </Section>

      <Section tight className="pt-0">
        <Grid2>
          <PrimaryCard>
            <div className="headline-md">Kontext</div>
            <p className="text-body mt-3">{cs.context}</p>
          </PrimaryCard>

          <PrimaryCard>
            <div className="headline-md">Ziele</div>
            <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
              {cs.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </PrimaryCard>
        </Grid2>

        <div className="mt-5">
          <Grid2>
            <SecondaryCard>
              <div className="headline-md">Vorgehen</div>
              <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                {cs.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </SecondaryCard>

            <SecondaryCard>
              <div className="headline-md">Deliverables</div>
              <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                {cs.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </SecondaryCard>
          </Grid2>
        </div>

        <div className="mt-5">
          <Grid2>
            <SecondaryCard>
              <div className="headline-md">Tech Stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-white/75 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </SecondaryCard>

            <SecondaryCard>
              <div className="headline-md">Governance</div>
              <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                {cs.governance.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </SecondaryCard>
          </Grid2>
        </div>

        {cs.note ? (
          <div className="mt-6 text-sm text-white/70">
            <span className="text-white/55">Hinweis:</span>{" "}
            {noteUrl ? (
              <>
                {cs.note.replace(noteUrl, "").trim()}{" "}
                <a
                  href={noteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white/85"
                >
                  {noteUrl}
                </a>
              </>
            ) : (
              cs.note
            )}
          </div>
        ) : null}
      </Section>
    </>
  );
}
