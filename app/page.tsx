import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "20px" }}>
      <h1>Hello World</h1>
      <p>{process.env.NEXT_PUBLIC_MENSAGEM}</p>
      <Link href="/pagina1">Ir para Página 1</Link>
      <Link href="/pagina2">Ir para Página 2</Link>
    </main>
  );
}