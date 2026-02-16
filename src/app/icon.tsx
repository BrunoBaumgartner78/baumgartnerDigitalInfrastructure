import { ImageResponse } from "next/og";

export const runtime = "edge";

// Favicon (32x32)
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          color: "white",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: -0.5,
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
