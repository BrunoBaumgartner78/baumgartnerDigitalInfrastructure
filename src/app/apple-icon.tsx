import { ImageResponse } from "next/og";

export const runtime = "edge";

// Apple touch icon (180x180)
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1f2937 60%, #0b1220 100%)",
          borderRadius: 36,
          color: "white",
          fontSize: 92,
          fontWeight: 900,
          letterSpacing: -3,
        }}
      >
        BB
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
