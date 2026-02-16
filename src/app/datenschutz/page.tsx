import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrimaryCard } from "@/components/ui/Cards";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Baumgartner Digital Infrastructure.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader
          title="Datenschutz"
          description="Kurz & transparent: wie wir Daten verarbeiten."
        />
      </Section>

      <Section tight className="pt-0">
        <PrimaryCard className="p-6 space-y-6">
          <div>
            <div className="headline-md">1. Verantwortliche Stelle</div>
            <p className="text-body mt-3">
              Baumgartner Digital Infrastructure (Schweiz)<br />
              Kontakt: {" "}
              <a className="underline hover:text-white/80" href="mailto:bruno_baumgartner@baumgartner-development.ch">
                bruno_baumgartner@baumgartner-development.ch
              </a>
            </p>
          </div>

          <div>
            <div className="headline-md">2. Welche Daten wir verarbeiten</div>
            <p className="text-body mt-3">
              Beim Besuch der Website können technische Daten (z. B. IP-Adresse, Zeitpunkt, User-Agent) in Server-Logs
              anfallen. Wenn du uns über das Kontaktformular schreibst, verarbeiten wir die Angaben, die du im Formular
              eingibst (Organisation, Name, E-Mail, Nachricht und optionale Angaben).
            </p>
          </div>

          <div>
            <div className="headline-md">3. Zweck der Verarbeitung</div>
            <p className="text-body mt-3">
              Wir nutzen deine Daten zur Bearbeitung von Anfragen, zur Kommunikation und zur Verbesserung des Angebots.
              Es findet keine automatisierte Einzelentscheidung (Profiling) statt.
            </p>
          </div>

          <div>
            <div className="headline-md">4. Weitergabe an Dritte</div>
            <p className="text-body mt-3">
              Wir geben Daten nur weiter, wenn es für die Erbringung der Leistung erforderlich ist (z. B. Hosting),
              wenn wir rechtlich dazu verpflichtet sind oder wenn du eingewilligt hast.
            </p>
          </div>

          <div>
            <div className="headline-md">5. Aufbewahrung</div>
            <p className="text-body mt-3">
              Anfragen werden so lange aufbewahrt, wie es für die Bearbeitung und Dokumentation erforderlich ist,
              mindestens jedoch so lange, wie gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <div className="headline-md">6. Deine Rechte</div>
            <p className="text-body mt-3">
              Du kannst Auskunft, Berichtigung oder Löschung deiner Daten verlangen, soweit keine gesetzlichen Pflichten
              entgegenstehen. Schreibe dazu an {" "}
              <a className="underline hover:text-white/80" href="mailto:bruno_baumgartner@baumgartner-development.ch">
                bruno_baumgartner@baumgartner-development.ch
              </a>.
            </p>
          </div>

          <div className="text-sm text-white/55">
            Hinweis: Wenn du Analytics (z. B. Plausible/GA) oder Newsletter einbaust, ergänzen wir hier die entsprechenden
            Abschnitte.
          </div>
        </PrimaryCard>
      </Section>
    </>
  );
}
