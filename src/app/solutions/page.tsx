import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Grid3 } from "@/components/ui/Grid";
import { PrimaryCard } from "@/components/ui/Cards";

export default function SolutionsPage() {
  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader
          title="Solutions"
          description="Strukturierte digitale Systeme für öffentliche Institutionen – von Plattformen bis Wissensinfrastruktur."
        />
      </Section>

      <Section tight className="pt-0">
        <Grid3>
          <PrimaryCard>
            <div className="headline-md">Digitale Plattformen</div>
            <p className="text-body mt-3">
              Bildungsplattformen, Mitgliederbereiche, Kurs- und Lizenzmodelle,
              Zahlungen & Zugriffslogik – klar strukturiert, wartbar und skalierbar.
            </p>
          </PrimaryCard>

          <PrimaryCard>
            <div className="headline-md">Portale & interne Systeme</div>
            <p className="text-body mt-3">
              Gemeindeportale, Dokumentation, geschützte Bereiche, Rollen & Berechtigungen,
              saubere Informationsarchitektur und langfristiger Betrieb.
            </p>
          </PrimaryCard>

          <PrimaryCard>
            <div className="headline-md">Architektur & Betrieb</div>
            <p className="text-body mt-3">
              Systemdesign, Datenmodellierung, Schnittstellen, Monitoring und robuste
              Betriebsfähigkeit – damit Systeme in 5 Jahren noch stabil sind.
            </p>
          </PrimaryCard>
        </Grid3>
      </Section>
    </>
  );
}
