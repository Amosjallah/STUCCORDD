import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
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
          borderRadius: 14,
          background:
            "linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(139,92,246,1) 100%)",
          color: "white",
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: -1,
        }}
      >
        S
      </div>
    ),
    size
  );
}

