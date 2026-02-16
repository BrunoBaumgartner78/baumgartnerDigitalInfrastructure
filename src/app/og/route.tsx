import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060A14",
          color: "white",
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif",
          position: "relative",
          padding: "80px",
        }}
      >
        {/* Soft glow */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "900px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 40%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, opacity: 0.65, marginBottom: 28 }}>
            Baumgartner Development
          </div>

          <div style={{ fontSize: 72, fontWeight: 650, lineHeight: 1.08 }}>
            Digitale Infrastruktur
          </div>

          <div style={{ fontSize: 48, opacity: 0.88, marginTop: 18 }}>
            für Gemeinden & Bildung
          </div>

          <div style={{ marginTop: 54, fontSize: 24, opacity: 0.55 }}>
            Struktur · Rollen · Dokumentation · Betrieb
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
