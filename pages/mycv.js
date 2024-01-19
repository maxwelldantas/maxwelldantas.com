import React from "react";

export default function MyCv() {
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
      <embed src={pdfUrl} type="application/pdf" width="100%" height="820px" />
    </div>
  );
}
