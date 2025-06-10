import React, { useEffect, useState } from "react";

export default function Cv() {
  const pdfUrl = "/files/Maxwell_CV.pdf";
  const [alturaIframe, setAlturaIframe] = useState(0);

  useEffect(() => {
    const alturaTela = window.innerHeight;
    const novaAlturaIframe = alturaTela - 115;
    setAlturaIframe(novaAlturaIframe);
  }, []);

  return (
    <div>
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
        width="100%"
        height={`${alturaIframe}px`}
        title="Curriculum Vitae"
        style={{ border: "20px solid rgb(60, 60, 60)" }}
      />
    </div>
  );
}
