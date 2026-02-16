import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrimaryCard } from "@/components/ui/Cards";

export const metadata = {
  title: "Impressum",
  description: "Impressum von Baumgartner Digital Infrastructure.",
};

export default function ImpressumPage() {
  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader title="Impressum" description="Angaben gemäss Schweizer Recht." />
      </Section>

      <Section tight className="pt-0">
        <PrimaryCard className="p-6 space-y-6">
          <div>
            <div className="headline-md">Anbieter</div>
            <p className="text-body mt-3">
              Baumgartner Digital Infrastructure<br />
              (Einzelunternehmen / Inhaber: Bruno Baumgartner)<br />
              Schweiz
            </p>
            <p className="text-body mt-3">
              E-Mail: {" "}
              <a className="underline hover:text-white/80" href="mailto:bruno_baumgartner@baumgartner-development.ch">
                bruno_baumgartner@baumgartner-development.ch
              </a>
            </p>
          </div>

          <div>
            <div className="headline-md">Haftungsausschluss</div>
            <p className="text-body mt-3">
              Inhalte dieser Website werden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte übernehmen wir keine Gewähr. Haftungsansprüche gegen den Anbieter wegen
              Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung
              der veröffentlichten Informationen entstehen, sind ausgeschlossen, soweit kein nachweislich
              vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
            </p>
          </div>

          <div>
            <div className="headline-md">Haftung für Links</div>
            <p className="text-body mt-3">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
              jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr.
            </p>
          </div>

          <div className="text-sm text-white/55">
            Hinweis: Wenn du eine offizielle Geschäftsadresse / UID / Handelsregistereintrag verwenden willst,
            ergänzen wir das hier als nächsten Schritt.
          </div>
        </PrimaryCard>
      </Section>
    </>
  );
}
