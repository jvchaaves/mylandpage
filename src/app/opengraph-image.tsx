import { ImageResponse } from "next/og";

export const alt = "João Vitor Chaves, desenvolvedor full-stack e pesquisador em IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0A0A0A",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#85817A",
        }}
      >
        João Pessoa, Brasil
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 600,
            color: "#F0EDE8",
            letterSpacing: "-0.03em",
          }}
        >
          João Vitor Chaves
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#A3A09B",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Desenvolvedor full-stack e pesquisador em IA aplicada
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 32,
          fontSize: 24,
          color: "#7EC8F5",
          borderTop: "1px solid #1C1C1C",
          paddingTop: 32,
        }}
      >
        <span>LAVID · UFPB</span>
        <span style={{ color: "#2A2A2A" }}>/</span>
        <span>TAIL</span>
        <span style={{ color: "#2A2A2A" }}>/</span>
        <span>TRIL Lab</span>
      </div>
    </div>,
    size,
  );
}
