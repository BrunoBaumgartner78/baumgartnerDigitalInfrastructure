/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function ContactApiForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    // map fields for the API
    const payload = {
      name: String(fd.get("personName") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      company: String(fd.get("orgName") || ""),
      phone: String(fd.get("phone") || ""),
      // include extras (optional)
      orgType: String(fd.get("orgType") || ""),
      topic: String(fd.get("topic") || ""),
      timeline: String(fd.get("timeline") || ""),
      budget: String(fd.get("budget") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Send failed");
      }

      // success — redirect to show confirmation
      window.location.href = "/contact?sent=1";
    } catch (err: any) {
      setError(err?.message || "Send failed");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm text-white/70">Organisationstyp *</div>
          <select name="orgType" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/20 focus:bg-white/7" defaultValue="Gemeinde">
            <option value="Gemeinde">Gemeinde</option>
            <option value="Bildung">Bildung</option>
            <option value="Organisation">Organisation</option>
          </select>
        </label>

        <label className="block">
          <div className="text-sm text-white/70">Organisation *</div>
          <input name="orgName" required placeholder="z.B. Gemeinde Musterwil / Schule XY" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm text-white/70">Kontaktperson *</div>
          <input name="personName" required placeholder="Vorname Nachname" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>
        <label className="block">
          <div className="text-sm text-white/70">E‑Mail *</div>
          <input name="email" type="email" required placeholder="name@domain.ch" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm text-white/70">Telefon (optional)</div>
          <input name="phone" placeholder="+41 ..." className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>

        <label className="block">
          <div className="text-sm text-white/70">Thema *</div>
          <select name="topic" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/20 focus:bg-white/7" defaultValue="">
            <option value="" disabled>Bitte wählen…</option>
            <option value="Portal / Website / Informationsarchitektur">Portal / Website / Informationsarchitektur</option>
            <option value="Plattform / Rollen & Rechte / Prozesse">Plattform / Rollen & Rechte / Prozesse</option>
            <option value="Wissenssystem / Dokumentation / Versionierung">Wissenssystem / Dokumentation / Versionierung</option>
            <option value="Audit / Governance / Betriebskonzept">Audit / Governance / Betriebskonzept</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm text-white/70">Zeitraum (optional)</div>
          <input name="timeline" placeholder="z.B. Q2/2026, 6–8 Wochen" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>

        <label className="block">
          <div className="text-sm text-white/70">Budgetrahmen (optional)</div>
          <input name="budget" placeholder="z.B. 10–25k CHF" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
        </label>
      </div>

      <label className="block">
        <div className="text-sm text-white/70">Nachricht *</div>
        <textarea name="message" required minLength={20} rows={6} placeholder="Kurz: Ausgangslage, Ziel, bestehende Systeme/Constraints, gewünschter Zeitpunkt." className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/20 focus:bg-white/7" />
      </label>

      {error && <div className="text-sm text-red-400">{error}</div>}

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between pt-2">
        <button type="submit" disabled={submitting} className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15">
          {submitting ? "Sende…" : "Anfrage senden"}
        </button>

        <div className="text-xs text-white/55">Oder direkt: <a className="underline hover:text-white/80" href="mailto:bruno_baumgartner@baumgartner-development.ch">bruno_baumgartner@baumgartner-development.ch</a></div>
      </div>
    </form>
  );
}
