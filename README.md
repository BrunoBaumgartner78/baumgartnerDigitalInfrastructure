# Baumgartner Digital Infrastructure

Official website and digital infrastructure for Baumgartner Development.

Built with a modern, production-ready stack focused on reliability,
clean architecture and secure communication.

---

## 🚀 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Node.js Runtime (API routes)
- Nodemailer (SMTP contact handling)
- Dynamic OpenGraph image generation
- Vercel deployment

---

## ✉️ Contact API

Secure server-side SMTP endpoint:

**POST `/api/contact`**

Features:

- Accepts JSON and form submissions
- Honeypot spam protection
- Server-side validation
- HTML + plain text email output
- `replyTo` set to sender email

### Required Environment Variables

```env
MAIL_TO=
MAIL_FROM=
MAIL_FROM_NAME=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_SITE_URL=
```

---

## 🛠 Development

```bash
npm install
npm run dev
```

Runs locally on:

```
http://127.0.0.1:3001
```

---

## 🌍 Deployment

Hosted on Vercel.

API routes are pinned to Node.js runtime via `vercel.json`
to ensure SMTP compatibility.

---

## 📄 License

Private project — all rights reserved.

---

## 🏛 Agency Positioning (für Gemeinden & Unternehmen)

Baumgartner Digital Infrastructure positioniert sich als strategischer Technologiepartner für:

- Gemeinden & öffentliche Verwaltungen
- Bildungsinstitutionen
- KMU & mittelständische Unternehmen
- Organisationen mit komplexen Informationsstrukturen

### 🎯 Unser Fokus

Wir bauen keine "Webseiten".
Wir entwickeln digitale Infrastrukturen.

Das bedeutet:

- Klare Informationsarchitektur
- Zukunftssichere Content-Systeme
- Sichere, DSGVO-konforme Datenverarbeitung
- Strukturierte Kommunikations- & Serviceplattformen
- Skalierbare technische Grundlagen für Wachstum

### 🏗 Typische Projekte

- Gemeindeportale & Bürgerservice-Plattformen
- Bildungs- & Kursplattformen
- Interne Wissenssysteme
- Multi-Standort-Unternehmenswebsites
- Digitale Transformationsprojekte

### 🧭 Unser Ansatz

1. Analyse der bestehenden Informationsstruktur
2. Strategische Architekturplanung
3. Saubere technische Implementierung (Next.js, moderne APIs, sichere Infrastruktur)
4. Nachhaltige Wartung & Weiterentwicklung

### 🤝 Warum Baumgartner Digital Infrastructure?

- Technisch tiefes Verständnis (Full-Stack & Infrastruktur)
- Strategischer Blick auf Organisation & Prozesse
- Erfahrung mit komplexen Systemarchitekturen
- Langfristige Partnerschaft statt Einmalprojekt

> Digitale Infrastruktur ist heute Teil der öffentlichen und unternehmerischen Verantwortung.

## Icons & mobile browser color

This project uses the Next.js App Router icon routes:

- `src/app/icon.tsx` (favicon)
- `src/app/apple-icon.tsx` (Apple touch icon)
- `src/app/manifest.webmanifest` (PWA manifest)

Mobile address-bar color is set via `src/app/layout.tsx`:

- `export const viewport = { themeColor: "#0f172a" }`

## License

© 2026 Bruno Baumgartner  
Published for portfolio and demonstration purposes only.  
Commercial reuse requires written permission.
