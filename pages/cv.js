import React from "react";

export default function Cv() {
  const pdfUrl = "/files/Maxwell_CV.pdf";

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
        height="820px"
        title="Curriculum Vitae"
      />
    </div>
  );
}
