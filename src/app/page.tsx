import Link from "next/link";
import { HeroV2 } from "@/components/site/HeroV2";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Grid2 } from "@/components/ui/Grid";
import { PrimaryCard, SecondaryCard } from "@/components/ui/Cards";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroV2 />


      <Section>
        <Grid2>
          <PrimaryCard className="p-6">
            <div className="headline-md">Struktur & Informationsarchitektur</div>
            <p className="text-body mt-3">
              Klare Navigationsmodelle, saubere Informationsstruktur und
              wartbare Inhalte statt historisch gewachsener Komplexität.
            </p>
          </PrimaryCard>

          <PrimaryCard className="p-6">
            <div className="headline-md">Rollen & Governance</div>
            <p className="text-body mt-3">
              Definierte Zuständigkeiten, dokumentierte Entscheidungen und
              transparente Prozesse für nachhaltigen Betrieb.
            </p>
          </PrimaryCard>
        </Grid2>

        <div className="mt-6">
          <SecondaryCard className="p-6">
            <div className="headline-md">Dokumentierte Systemarchitektur</div>
            <p className="text-body mt-3">
              Versionierte Plattformarchitektur mit nachvollziehbarer
              Dokumentation. Beispiel: {" "}
              <a
                href="https://digiemu.ch"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white/80"
              >
                DigiEmu Beta
              </a>
            </p>
          </SecondaryCard>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="headline-lg">Bereit für klare Struktur?</h2>
        <p className="text-body mt-3 max-w-xl mx-auto">
          In einem kurzen Gespräch klären wir Ausgangslage, Ziel und
          strukturelle Anforderungen.
        </p>

        <div className="pt-6">
          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15"
          >
            15 Minuten Einordnungsgespräch
          </Link>
        </div>
      </Section>
      </main>
    </>
  );
}
