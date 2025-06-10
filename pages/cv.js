import React, { useEffect, useState } from "react";

export default function Cv() {
  const pdfUrl = "/files/Maxwell_CV.pdf";
  const [alturaIframe, setAlturaIframe] = useState(0);
  const [larguraIframe, setLarguraIframe] = useState("100%");

  useEffect(() => {
    const alturaTela = window.innerHeight;
    const novaAlturaIframe = alturaTela - 115;
    setAlturaIframe(novaAlturaIframe);

    const larguraDisponivel = window.innerWidth;
    const novaLarguraIframe = larguraDisponivel;
    setLarguraIframe(`${novaLarguraIframe}px`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Curriculum Vitae
      </h1>
      <iframe
        src={pdfUrl}
        width={larguraIframe}
        height={`${alturaIframe}px`}
        title="Curriculum Vitae"
        style={{
          border: "20px solid rgb(60, 60, 60)",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
