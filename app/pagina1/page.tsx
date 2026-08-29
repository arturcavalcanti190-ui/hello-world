import Link from "next/link";

export default function Pagina1() {
  return (
    <div style={{ backgroundColor: "blue", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px" }}>
      <img src="/next.svg" alt="Imagem" style={{ width: "200px" }} />
      <Link href="/pagina2" style={{ backgroundColor: "white", color: "blue", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold" }}>
        Ir para a Página 2
      </Link>
    </div>
  );
}