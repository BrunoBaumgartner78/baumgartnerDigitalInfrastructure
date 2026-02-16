import Link from "next/link";
import { Section } from "@/components/ui/Section";

function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Subtle top glow right under header */}
      <div className="absolute -top-24 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(56,189,248,0.10),transparent_65%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Vertical lines (infrastructure vibe) */}
      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}

export function HeroV2() {
  return (
    <section className="relative">
      <HeroBackground />

      <Section className="relative pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            Struktur · Rollen · Dokumentation · Betrieb
          </div>

          <h1 className="mt-7 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Digitale Infrastruktur für Gemeinden & Bildung
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            Strukturierte Portale, dokumentierte Plattformen und nachhaltige Systemarchitektur – nachvollziehbar,
            versioniert und betriebssicher.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15"
            >
              Projekt besprechen
            </Link>

            <Link
              href="/projects"
              className="inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Referenzen ansehen
            </Link>
          </div>

          <div className="mt-10 text-xs text-white/50">
            Fokus: nachvollziehbare Entscheidungen, klare Rollenmodelle, saubere Übergabe.
          </div>
        </div>
      </Section>
    </section>
  );
}
