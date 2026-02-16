
"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export type ContactPayload = {
  orgType: "Gemeinde" | "Bildung" | "Organisation";
  orgName: string;
  personName: string;
  email: string;
  phone?: string;
  topic: string;
  timeline?: string;
  budget?: string;
  message: string;
  website?: string; // honeypot
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function esc(s: string) {
  return s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c] as string));
}

async function sendContactMail(payload: ContactPayload) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const to = process.env.CONTACT_TO!;
  const fromEmail = process.env.MAIL_FROM!;
  const fromName = process.env.MAIL_FROM_NAME || "Baumgartner Development";

  const subject = `Kontaktanfrage – ${payload.personName} (${payload.orgName})`;

  const text = [
    "Neue Kontaktanfrage über baumgartner-development.ch",
    "",
    `Organisationstyp: ${payload.orgType}`,
    `Organisation: ${payload.orgName}`,
    `Kontaktperson: ${payload.personName}`,
    `E-Mail: ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : null,
    `Thema: ${payload.topic}`,
    payload.timeline ? `Zeitraum: ${payload.timeline}` : null,
    payload.budget ? `Budget: ${payload.budget}` : null,
    "",
    "Nachricht:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>Neue Kontaktanfrage</h2>
      <p>
        <b>Organisationstyp:</b> ${esc(payload.orgType)}<br/>
        <b>Organisation:</b> ${esc(payload.orgName)}<br/>
        <b>Kontaktperson:</b> ${esc(payload.personName)}<br/>
        <b>E-Mail:</b> ${esc(payload.email)}<br/>
        ${payload.phone ? `<b>Telefon:</b> ${esc(payload.phone)}<br/>` : ""}
        <b>Thema:</b> ${esc(payload.topic)}<br/>
        ${payload.timeline ? `<b>Zeitraum:</b> ${esc(payload.timeline)}<br/>` : ""}
        ${payload.budget ? `<b>Budget:</b> ${esc(payload.budget)}<br/>` : ""}
      </p>
      <p><b>Nachricht:</b></p>
      <pre style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:10px">${esc(payload.message)}</pre>
    </div>
  `;

  await transporter.sendMail({
    to,
    from: `"${fromName}" <${fromEmail}>`,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

export async function submitContact(prevState: any, formData: FormData) {
  const payload: ContactPayload = {
    orgType: (formData.get("orgType") as any) || "Organisation",
    orgName: String(formData.get("orgName") || "").trim(),
    personName: String(formData.get("personName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim() || undefined,
    topic: String(formData.get("topic") || "").trim(),
    timeline: String(formData.get("timeline") || "").trim() || undefined,
    budget: String(formData.get("budget") || "").trim() || undefined,
    message: String(formData.get("message") || "").trim(),
    website: String(formData.get("website") || "").trim() || undefined,
  };

  // Honeypot
  if (payload.website) {
    redirect("/contact?sent=1");
  }

  const errors: Record<string, string> = {};
  if (!payload.orgName) errors.orgName = "Bitte Organisation angeben.";
  if (!payload.personName) errors.personName = "Bitte Name angeben.";
  if (!payload.email || !isEmail(payload.email)) errors.email = "Bitte gültige E-Mail angeben.";
  if (!payload.topic) errors.topic = "Bitte Thema wählen.";
  if (!payload.message || payload.message.length < 20) errors.message = "Bitte kurz beschreiben (mind. 20 Zeichen).";

  if (Object.keys(errors).length) {
    return { ok: false, errors, values: payload };
  }
  // ---- SMTP CONFIG (debug-safe) ----
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const secure = String(process.env.SMTP_SECURE || "true") === "true";
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const to = process.env.CONTACT_TO || user;
  const from = process.env.CONTACT_FROM || user;

  // Debug (no password)
  console.log("SMTP_DEBUG", {
    host,
    port,
    secure,
    user,
    passLen: pass?.length || 0,
    to,
    from,
  });

  // Gmail: If using 587, secure must be false (STARTTLS)
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465 ? true : false,
    auth: { user, pass },
  });

  const subject = `[Kontakt] ${payload.orgType} – ${payload.orgName} – ${payload.topic}`;
  const text =
    `Organisationstyp: ${payload.orgType}\n` +
    `Organisation: ${payload.orgName}\n` +
    `Kontaktperson: ${payload.personName}\n` +
    `E-Mail: ${payload.email}\n` +
    `Telefon: ${payload.phone || "-"}\n` +
    `Thema: ${payload.topic}\n` +
    `Zeitraum: ${payload.timeline || "-"}\n` +
    `Budget: ${payload.budget || "-"}\n\n` +
    `Nachricht:\n${payload.message}\n`;

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text,
    });
  } catch (err: any) {
    console.error("/api/contact error", err);
    // Soft-fail: don't hard 500 in UX. Return ok:false for UI handling.
    return { ok: false, smtp: true, message: "SMTP auth failed", values: payload };
  }

  return { ok: true };
}
