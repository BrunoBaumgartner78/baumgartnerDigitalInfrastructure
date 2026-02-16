import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function env(name: string, fallback?: string) {
  const v = process.env[name] ?? fallback;
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function pick(obj: Record<string, any>, ...keys: string[]) {
  for (const k of keys) {
    const v = obj?.[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return "";
}

function pickOptional(obj: Record<string, any>, ...keys: string[]) {
  const v = pick(obj, ...keys);
  return v || undefined;
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: Record<string, any> = {};

    // Accept JSON or form-urlencoded / multipart
    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const fd = await req.formData();
      fd.forEach((value, key) => {
        data[key] = typeof value === "string" ? value : String(value);
      });
    }

    // Honeypot: "website" (new) or "hp" (old)
    const honeypot = pick(data, "website", "hp");
    if (honeypot) return NextResponse.json({ ok: true, spam: true });

    // New schema (preferred)
    const orgType = pick(data, "orgType");
    const orgName = pick(data, "orgName", "company", "firma");
    const personName = pick(data, "personName", "name");
    const email = pick(data, "email");
    const phone = pickOptional(data, "phone", "telefon");
    const topic = pick(data, "topic", "thema");
    const timeline = pickOptional(data, "timeline", "zeitraum");
    const budget = pickOptional(data, "budget");
    const message = pick(data, "message", "nachricht");

    // Basic validation
    if (!orgName || !personName || !email || !topic || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const to = process.env.MAIL_TO ?? process.env.MAIL_FROM ?? env("MAIL_TO");
    const fromEmail = env("MAIL_FROM");
    const fromName = env("MAIL_FROM_NAME", "Baumgartner Development");

    const subject = `Neue Anfrage — ${personName}${orgName ? ` (${orgName})` : ""}`;

    const text = [
      "Neue Kontaktanfrage",
      "",
      `Organisationstyp: ${orgType || "-"}`,
      `Organisation: ${orgName || "-"}`,
      `Kontaktperson: ${personName || "-"}`,
      `E-Mail: ${email || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Thema: ${topic || "-"}`,
      `Zeitraum: ${timeline || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      "Nachricht:",
      message || "-",
      "",
    ].join("\n");

    const html = `
            <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
              <h2 style="margin:0 0 12px">Neue Kontaktanfrage</h2>
              <table style="border-collapse:collapse;width:100%;max-width:720px">
                <tr><td style="padding:6px 0;color:#666;width:180px">Organisationstyp</td><td style="padding:6px 0">${esc(orgType || "-")}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Organisation</td><td style="padding:6px 0"><b>${esc(orgName || "-")}</b></td></tr>
                <tr><td style="padding:6px 0;color:#666">Kontaktperson</td><td style="padding:6px 0">${esc(personName || "-")}</td></tr>
                <tr><td style="padding:6px 0;color:#666">E-Mail</td><td style="padding:6px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
                <tr><td style="padding:6px 0;color:#666">Telefon</td><td style="padding:6px 0">${esc(phone || "-")}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Thema</td><td style="padding:6px 0">${esc(topic || "-")}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Zeitraum</td><td style="padding:6px 0">${esc(timeline || "-")}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Budget</td><td style="padding:6px 0">${esc(budget || "-")}</td></tr>
              </table>

              <div style="margin-top:14px;color:#666">Nachricht</div>
              <div style="margin-top:6px;padding:12px;border:1px solid #eee;border-radius:10px;background:#fafafa;white-space:pre-wrap">${esc(message || "-")}</div>
            </div>
          `.trim();

    const transporter = nodemailer.createTransport({
      host: env("SMTP_HOST"),
      port: Number(env("SMTP_PORT", "465")),
      secure: env("SMTP_SECURE", "true") === "true",
      auth: {
        user: env("SMTP_USER"),
        pass: env("SMTP_PASS"),
      },
    });

    await transporter.sendMail({
      to,
      from: `"${fromName}" <${fromEmail}>`,
      replyTo: email, // ✅ reply goes to the requester
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Send failed." },
      { status: 500 }
    );
  }
}
