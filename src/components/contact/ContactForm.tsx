"use client";

import { useState } from "react";
import { submitContact } from "@/app/contact/actions";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      action={submitContact}
      method="post"
      className="space-y-4"
      onSubmit={() => setSubmitting(true)}
    >
      <input type="hidden" name="hp" value="" />

      <div>
        <label className="block text-sm text-white/70">Name *</label>
        <input
          name="name"
          required
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">E‑Mail *</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">Organisation</label>
        <input
          name="organisation"
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">Budget (optional)</label>
        <input
          name="budget"
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">Zeithorizont</label>
        <input
          name="timeframe"
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">Nachricht *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full bg-white/5 border border-white/8 rounded px-3 py-2 text-white"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded bg-white text-black px-4 py-2 text-sm font-medium"
        >
          {submitting ? "Sende…" : "Nachricht senden"}
        </button>
      </div>
    </form>
  );
}
