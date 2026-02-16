export type CaseStudy = {
  slug: string;
  title: string;
  sector: "Gemeinde" | "Bildung" | "Organisation";
  timeframe: string;
  outcomeHeadline: string;
  context: string;
  goals: string[];
  approach: string[];
  deliverables: string[];
  stack: string[];
  governance: string[];
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gemeinde-portal-dokumente",
    title: "Gemeindeportal & Dokumentationssystem",
    sector: "Gemeinde",
    timeframe: "8–12 Wochen",
    outcomeHeadline:
      "Ein klar strukturiertes Portal mit Rollen, Dokumenten und nachvollziehbarer Pflege.",
    context:
      "Viele Gemeinden kämpfen mit verstreuten Dokumenten, unklaren Zuständigkeiten und hoher Abhängigkeit von Einzelpersonen. Ziel: ein Portal, das Inhalte langfristig wartbar macht und interne Abläufe entlastet.",
    goals: [
      "Zentrale Ablage & Versionierung wichtiger Dokumente",
      "Rollen & Berechtigungen für interne/öffentliche Bereiche",
      "Klare Informationsarchitektur (weniger Suchaufwand)",
      "Betriebsfähigkeit: einfache Pflege, klare Verantwortlichkeiten",
    ],
    approach: [
      "Content- & Prozessaufnahme (Stakeholder-Workshop, IA-Mapping)",
      "Datenmodell & Rollenmodell definieren",
      "Prototyp (Navigation, Seiten-Templates, Suche)",
      "Iterative Umsetzung + Abnahme in kurzen Sprints",
    ],
    deliverables: [
      "Portal-Struktur (öffentlich / intern) + Templates",
      "Dokumentenlogik (Versionen, Metadaten, Zuständigkeit)",
      "Rollen & Berechtigungen (Admin, Redaktion, Intern, Public)",
      "Betriebshandbuch (Pflegeprozess, Zuständigkeiten, Backup)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Auth/RBAC", "Storage", "CI/CD"],
    governance: [
      "Entscheidungslog (was/warum) für spätere Wartung",
      "Dokumentierte Rollen & Pflegeprozesse",
      "Minimaler Audit-Trail für Änderungen (wer/was/wann)",
    ],
    note:
      "Dieses Case-Study-Format ist bewusst generisch – echte Projekte werden mit konkreten Zahlen/Resultaten ergänzt.",
  },
  {
    slug: "bildungsplattform-kurse-zugriff",
    note: "Technische Dokumentation & Architekturüberblick zur DigiEmu Beta: https://digiemu.ch",
    title: "Bildungsplattform: Kurse, Zugriffe & Lizenzlogik",
    sector: "Bildung",
    timeframe: "10–16 Wochen",
    outcomeHeadline:
      "Skalierbarer Kursbereich mit klarer Zugriffslogik und sauberem Admin-Reporting.",
    context:
      "Bildungsinstitutionen benötigen Systeme, die Kursinhalte strukturiert bereitstellen, Zugriffe steuern und Administrationsaufwand reduzieren.",
    goals: [
      "Kurse & Inhalte strukturiert abbilden (Templates & Module)",
      "Zugriffslogik (Rollen, Lizenzen, Gruppen)",
      "Reporting/Übersichten für Administration",
      "Grundlage für Skalierung (mehr Angebote, mehr Nutzer)",
    ],
    approach: [
      "Domain-Modell (Kurs, Modul, Zugriff, Lizenz, Gruppe)",
      "UI-Templates für Kursseiten und Admin-Bereiche",
      "Sichere Auth + Berechtigungen",
      "Iterative Lieferung: MVP → Stabilisierung → Reporting",
    ],
    deliverables: [
      "Kurs-Templates + modulare Inhaltsstruktur",
      "Zugriffs-/Lizenzlogik (RBAC + Gruppen)",
      "Admin-Übersichten (Nutzung, Zugriffe, Logs)",
      "Dokumentation für Betrieb & Erweiterung",
    ],
    stack: ["Next.js", "TypeScript", "Auth/RBAC", "Storage", "Analytics"],
    governance: [
      "Saubere Rollenmatrix (wer darf was)",
      "Dokumentierte Datenobjekte & Invarianten",
      "Change-Log als Grundlage für Weiterentwicklung",
    ],
  },
  {
    slug: "digitaler-marktplatz-downloads-admin",
    title: "Bellu.ch: Digitaler Marktplatz für digitale Produkte",
    sector: "Plattform · E-Commerce",
    timeframe: "6–12 Wochen",
    outcomeHeadline:
      "Ein wartbarer Marktplatz mit sicherer Download-Logik, nahtlosem Checkout und robustem Admin-Reporting.",
    context:
      "Bellu.ch benötigte eine flexible Plattform für digitale Produkte, sichere Zahlungen und automatisierte Auslieferung. Ziel war ein skalierbarer Markt mit klarer Betreiber-Oberfläche.",
    goals: [
      "Sicherer Checkout & Lizenzverwaltung",
      "Skalierbare Auslieferung von digitalen Assets",
      "Admin-Reporting für Umsätze & Downloads",
    ],
    approach: [
      "Domain-Modell für Produkte, Lizenzen und Bestellungen",
      "Integrationen: Stripe für Bezahlung, Storage für Assets",
      "Admin-UI & Reporting Dashboards",
      "Iterative Auslieferung mit Fokus auf Sicherheit und Tracking",
    ],
    deliverables: [
      "Checkout-Flow mit Stripe-Integration",
      "Download-Page mit secure links & throttling",
      "Webhook-Handling für Fulfillment",
      "Admin-Reporting (Umsatz, Downloads, Nutzer)",
    ],
    stack: ["Next.js", "Prisma", "Stripe", "Firebase Storage", "NextAuth"],
    governance: [
      "Audit-Log für Bestellungen & Auslieferungen",
      "Rollen & Berechtigungen für Admin/Support",
      "Nachvollziehbare Fulfillment-Events",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
