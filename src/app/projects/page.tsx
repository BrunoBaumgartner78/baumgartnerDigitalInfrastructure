import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Grid2 } from "@/components/ui/Grid";
import { SecondaryCard } from "@/components/ui/Cards";
import { ProjectCard } from "@/components/site/ProjectCard";
import { caseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

export default function ProjectsPage() {
  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader
          title="Projects"
          description="Ausgewählte Systeme und Prototypen – mit Fokus auf Plattformarchitektur und Wissenslogik."
        />
      </Section>

      <Section tight className="pt-0">
        <Grid2>
          <ProjectCard
            title="Bellu.ch — Digitaler Marktplatz"
            capabilities="Capabilities: Plattform · Payments · Rollen · Admin · Analytics"
            caseStudySlug="digitaler-marktplatz-downloads-admin"
          >
            Multi-Vendor Plattform, Payments, digitale Produkte, Download-Logik und Admin-Reporting.
          </ProjectCard>

          <ProjectCard
            title="DigiEmu — Wissensinfrastruktur"
            capabilities="Capabilities: Versioning · Auditability · Meaning/Claims"
            caseStudySlug="bildungsplattform-kurse-zugriff"
          >
            Versionierung, Governance-Prinzipien, strukturierte Wissensmodelle und nachvollziehbare Entscheidungen.
          </ProjectCard>
        </Grid2>

        <div className="mt-10">
          <div className="headline-md">Case Studies</div>
          <p className="text-body mt-3 max-w-3xl">
            Beispiele im Stil öffentlicher Auftraggeber: Kontext, Ziele, Vorgehen, Deliverables und Governance.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                slug={cs.slug}
                title={cs.title}
                sector={cs.sector}
                timeframe={cs.timeframe}
                outcomeHeadline={cs.outcomeHeadline}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
