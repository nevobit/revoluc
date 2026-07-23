import { ImageResponse } from "next/og";

export const alt = "Revoluc - Technology Holding and Venture Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          color: "#1f3047",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            padding: "72px 88px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 28,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#1971e4",
                borderRadius: 18,
                color: "#ffffff",
                display: "flex",
                fontSize: 56,
                fontWeight: 700,
                height: 92,
                justifyContent: "center",
                width: 92,
              }}
            >
              V
            </div>
            <div
              style={{
                color: "#8596ad",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: 9,
                textTransform: "uppercase",
              }}
            >
              Revoluc Inc.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              maxWidth: 920,
            }}
          >
            <div
              style={{
                fontSize: 82,
                fontWeight: 500,
                letterSpacing: 9,
                lineHeight: 1.04,
                textTransform: "uppercase",
              }}
            >
              Technology Holding
            </div>
            <div
              style={{
                color: "#8596ad",
                fontSize: 34,
                fontWeight: 300,
                lineHeight: 1.35,
              }}
            >
              Building, operating and scaling technology companies with shared
              product, engineering and growth infrastructure.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
