import Link from "next/link";
import ContactApiForm from "@/components/contact/ContactApiForm";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Grid2 } from "@/components/ui/Grid";
import { PrimaryCard, SecondaryCard } from "@/components/ui/Cards";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <div className="text-sm text-white/70">{label}{required ? " *" : ""}</div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none
                       placeholder:text-white/35 focus:border-white/20 focus:bg-white/7"
      />
    </label>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ sent?: string }> | { sent?: string };
}) {
  const sp = (await searchParams) as { sent?: string } | undefined;
  const sent = sp?.sent === "1";

  return (
    <>
      <Section className="max-w-4xl">
        <PageHeader
          title="Kontakt"
          description="Kurze Anfrage genügt. Wir antworten in der Regel innert 1–2 Werktagen."
        />
      </Section>

      <Section tight className="pt-0">
        <Grid2>
          <PrimaryCard className="p-6">
            {sent ? (
              <div className="space-y-3">
                <div className="headline-md">Danke – Nachricht ist angekommen.</div>
                <p className="text-body">
                  Wir melden uns zeitnah. Falls es dringend ist, erreichst du uns auch direkt per E-Mail.
                </p>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                  >
                    Zur Startseite
                  </Link>
                </div>
              </div>
            ) : (
              <ContactApiForm />
            )}
          </PrimaryCard>

          <SecondaryCard className="p-6">
            <div className="headline-md">Für öffentliche Auftraggeber</div>
            <p className="text-body mt-3">
              Fokus auf nachvollziehbare Struktur, Rollenmodelle, dokumentierte Entscheidungen und
              betriebssichere Übergabe.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white/85 font-medium">Antwortzeit</div>
                <div className="mt-1">In der Regel innert 1–2 Werktagen.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white/85 font-medium">Kurz-Call</div>
                <div className="mt-1">15 Minuten zum Einordnen reichen oft.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white/85 font-medium">Lieferobjekte</div>
                <div className="mt-1">Architektur, Umsetzung, Dokumentation, Übergabe.</div>
              </div>
            </div>

           
          </SecondaryCard>
        </Grid2>
      </Section>
    </>
  );
}

