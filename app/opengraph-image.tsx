import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/constants";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07070A",
          color: "white",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            {BRAND.name}
          </div>
          <div style={{ fontSize: 22, opacity: 0.8 }}>{BRAND.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: -2 }}>
            Grow Your Brand Beyond Boundaries
          </div>
          <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 980, lineHeight: 1.35 }}>
            Connecting Teams Around The World — Strategy, design, and technology that scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 22, opacity: 0.82 }}>{BRAND.tagline}</div>
          <div
            style={{
              width: 240,
              height: 12,
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(139,92,246,1) 100%)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}

