import React from "react";
import { Document } from "react-pdf";

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
      <Document file={pdfUrl} width="100%" height="100%" />
    </div>
  );
}
