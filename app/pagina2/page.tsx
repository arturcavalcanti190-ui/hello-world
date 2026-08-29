"use client";

import { useState } from "react";

export default function Pagina2() {
  const [numero, setNumero] = useState<number | null>(null);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * 100000) + 1;
    setNumero(novoNumero);
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
      <button onClick={gerarNumero} style={{ padding: "10px 20px", fontSize: "18px" }}>
        Gerar número aleatório
      </button>
      {numero !== null && <p style={{ fontSize: "24px" }}>{numero}</p>}
    </div>
  );
}