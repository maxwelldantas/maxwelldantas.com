import React, { useEffect, useState } from "react";

export default function Cv() {
  const pdfUrl =
    "https://drive.google.com/file/d/1Q0i29C52gbcuHMB7r1MRUTePP15tCzWC/preview";

  const iframeWidth = "50%";
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateIframeDimensions = () => {
      const alturaTela = window.innerHeight;
      const novaAlturaIframe = alturaTela - 115;
      setIframeHeight(novaAlturaIframe);
    };

    calculateIframeDimensions();

    window.addEventListener("resize", calculateIframeDimensions);

    return () => {
      window.removeEventListener("resize", calculateIframeDimensions);
    };
  }, []);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        Curriculum Vitae
      </h1>
      <iframe
        src={pdfUrl}
        width={iframeWidth}
        height={`${iframeHeight}px`}
        allowfullscreen="false"
        title="Curriculum Vitae"
        style={{
          border: "20px solid rgb(60, 60, 60)",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
}
