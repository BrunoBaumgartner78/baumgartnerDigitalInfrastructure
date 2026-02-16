export const metadata = {
  title: "Barrierefreiheit (WCAG 2.2 AA) | Baumgartner Development",
  description:
    "Informationen zur Barrierefreiheit. Ziel: WCAG 2.2 AA – inklusive Fokus, Tastaturbedienbarkeit und reduzierte Motion.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">Barrierefreiheit</h1>
      <p className="mt-4 opacity-85">
        Diese Website ist auf <strong>WCAG 2.2 AA</strong> ausgerichtet. Ziel ist eine robuste
        Bedienbarkeit für Tastatur, Screenreader und mobile Geräte – insbesondere für
        öffentliche Institutionen (Gemeinden) und Bildungsanbieter.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Was wir konkret umsetzen</h2>
      <ul className="mt-4 list-disc pl-5 space-y-2 opacity-85">
        <li>Klare Fokus-Markierung bei Tastaturbedienung (Focus Visible).</li>
        <li>„Zum Inhalt springen“-Link für schnelle Navigation.</li>
        <li>Reduzierte Motion bei <code>prefers-reduced-motion</code>.</li>
        <li>Semantische Struktur (Header/Nav/Main/Footer) und saubere Überschriftenhierarchie.</li>
        <li>Formulare mit verständlichen Fehlermeldungen (Text, nicht nur Farbe).</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">Strategischer Vorteil</h2>
      <p className="mt-4 opacity-85">
        <strong>WCAG 2.2 AA</strong> ist für viele Organisationen der relevante Standard. Eine
        barrierearme Umsetzung verbessert nicht nur die Inklusion, sondern auch
        Nutzerführung, Vertrauen und Conversion – und erleichtert Beschaffungsprozesse im
        öffentlichen Umfeld.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Feedback</h2>
      <p className="mt-4 opacity-85">
        Wenn dir Barrieren auffallen, melde dich bitte über das Kontaktformular – wir verbessern
        die Seite kontinuierlich.
      </p>
    </div>
  );
}
