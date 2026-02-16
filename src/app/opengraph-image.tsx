import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  function logoDataUrl() {
    const p = path.join(process.cwd(), "public", "logo.png");
    const buf = fs.readFileSync(p);
    return `data:image/png;base64,${buf.toString("base64")}`;
  }

  const logo = logoDataUrl();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#050A12",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 520px at 45% 30%, rgba(90,120,255,0.28), transparent 60%), radial-gradient(700px 500px at 70% 70%, rgba(255,0,170,0.14), transparent 60%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <img
              src={logo}
              width={56}
              height={56}
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.35), 0 16px 40px rgba(0,0,0,0.55), 0 0 30px rgba(255,0,170,0.18), 0 0 30px rgba(90,120,255,0.18)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "rgba(255,255,255,0.92)", fontSize: 20, fontWeight: 800 }}>
                Baumgartner
              </div>
              <div style={{ color: "rgba(255,255,255,0.60)", fontSize: 14 }}>
                Digital Infrastructure
              </div>
            </div>
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.94)",
              fontSize: 66,
              fontWeight: 900,
              letterSpacing: -1,
              lineHeight: 1.04,
              maxWidth: 1040,
              marginTop: 12,
            }}
          >
            Digitale Infrastruktur für Gemeinden & Bildung
          </div>

          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 26, maxWidth: 980, lineHeight: 1.35 }}>
            Strukturierte Portale, dokumentierte Plattformen und robuste Architektur – nachvollziehbar, versioniert und betriebssicher.
          </div>

          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginTop: 18 }}>
            baumgartner-development.ch
          </div>
        </div>
      </div>
    ),
    size
  );
}
