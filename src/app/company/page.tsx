import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Grid2 } from "@/components/ui/Grid";
import { PrimaryCard } from "@/components/ui/Cards";

export default function CompanyPage() {
  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader
          title="Company"
          description="Schweizer Anbieter für digitale Plattform- und Infrastrukturlösungen im öffentlichen und bildungsnahen Umfeld."
        />
      </Section>

      <Section tight className="pt-0">
        <Grid2>
          <PrimaryCard>
            <div className="headline-md">Mission</div>
            <p className="text-body mt-3">
              Wir entwickeln digitale Systeme, die als Infrastruktur funktionieren:
              strukturiert, wartbar und langfristig betreibbar.
            </p>
          </PrimaryCard>

          <PrimaryCard>
            <div className="headline-md">Prinzipien</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Struktur vor Oberfläche</li>
              <li>Nachvollziehbarkeit vor Komplexität</li>
              <li>Wartbarkeit & Betrieb als Bestandteil des Designs</li>
              <li>Schweizer Qualität, klare Kommunikation</li>
            </ul>
          </PrimaryCard>
        </Grid2>

        <div className="mt-5">
          <PrimaryCard>
            <div className="headline-md">Geschäftsführung</div>
            <p className="text-body mt-3">Bruno Baumgartner</p>
          </PrimaryCard>
        </div>
        <Section className="max-w-4xl">
          <div className="headline-md">Transparenz & Architektur</div>
          <p className="text-body mt-3">
            Für ausgewählte Projekte veröffentlichen wir technische Dokumentation und Architekturüberblicke öffentlich –
            als Nachweis für saubere Systemstruktur, nachvollziehbare Entscheidungen und wartbaren Betrieb.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://digiemu.ch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              DigiEmu Beta – Docs öffnen
            </a>
            <span className="text-xs text-white/55">
              Öffentliche Referenz: Dokumentation & Architektur (Beta)
            </span>
          </div>
        </Section>
      </Section>
    </>
  );
}

