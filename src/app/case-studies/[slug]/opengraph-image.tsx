import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/content/case-studies";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
function logoDataUrl() {
  const p = path.join(process.cwd(), "public", "logo.png");
  const buf = fs.readFileSync(p);
  return `data:image/png;base64,${buf.toString("base64")}`;
}

function safeText(v?: string) {
  return (v || "").replace(/\s+/g, " ").trim();
}

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const logo = logoDataUrl();
  const resolved = await params;
  const slug = (resolved as { slug: string }).slug;

  const cs = getCaseStudy(slug);

  const title = safeText(cs?.title) || "Case Study";
  const subtitle =
    safeText(cs?.outcomeHeadline) ||
    safeText(cs?.sector) ||
    "Baumgartner Digital Infrastructure";

  const metaLeft = cs ? `${cs.sector} · ${cs.timeframe}` : "Baumgartner Digital Infrastructure";
  const metaRight = cs ? `baumgartner-development.ch` : "Digital Infrastructure";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#050A12",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 520px at 45% 30%, rgba(90,120,255,0.28), transparent 60%), radial-gradient(700px 500px at 70% 70%, rgba(255,0,170,0.14), transparent 60%)",
          }}
        />

        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* header */}
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <img
              src={logo}
              width={46}
              height={46}
              style={{
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.35), 0 14px 34px rgba(0,0,0,0.55), 0 0 28px rgba(255,0,170,0.18), 0 0 28px rgba(90,120,255,0.18)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "rgba(255,255,255,0.92)", fontSize: 18, fontWeight: 700 }}>
                Baumgartner
              </div>
              <div style={{ color: "rgba(255,255,255,0.60)", fontSize: 14 }}>
                Digital Infrastructure
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.70)",
              fontSize: 14,
            }}
          >
            Case Study
          </div>
        </div>

        {/* content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "rgba(255,255,255,0.94)",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.74)",
              fontSize: 26,
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.62)", fontSize: 16 }}>{metaLeft}</div>
          <div style={{ color: "rgba(255,255,255,0.52)", fontSize: 16 }}>{metaRight}</div>
        </div>
      </div>
    ),
    size
  );
}
