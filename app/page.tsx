import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-600 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Página 1</h1>

      {/* Imagem */}
      <Image
        src="/next.svg"
        alt="Logo do Next.js"
        width={180}
        height={38}
        priority
        className="mb-8 invert"
      />

      {/* Botão de navegação para a Página 2 */}
      <Link
        href="/sorteio"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
      >
        Ir para a Página 2
      </Link>
    </main>
  );
}