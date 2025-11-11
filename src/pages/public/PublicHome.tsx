import { Link } from "react-router-dom";
import Depoimentos from "../../components/public/Depoimentos";

export default function PublicHome() {
  return (
    <main className="min-h-screen bg-[#D95F3A]">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#F7E37B]">PerifaFood</h1>
        <div className="flex gap-3">
          <Link
            to="/login"
            className="border border-[#D9291A] bg-[#F7E37B] text-black  px-4 py-2 rounded hover:bg-[#D9291A] hover:text-white transition"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="px-4 py-2 rounded bg-[#F7E37B] text-black hover:opacity-90 transition"
          >
            Cadastrar restaurante
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold leading-tight text-[#F7E37B]">
            Delivery pensado para as periferias
          </h2>
          <p className="text-lg  text-[#F7E37B]">
            No PerifaFood, pequenos restaurantes cadastram seus pratos e alcançam clientes da
            comunidade com facilidade. Simples, direto e do seu jeito.
          </p>
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-3 rounded text-black font-semibold border border-[#F7E37B] bg-[#F7E37B] hover:bg-[#F7E37B] hover:text-black transition"
            >
              Entrar para gerenciar
            </Link>
            <a
              href="#como-funciona"
              className="px-5 py-3 rounded text-black font-semibold border border-[#F7E37B] bg-[#F7E37B] hover:bg-[#F7E37B] hover:text-black transition"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="w-full h-64 md:h-80 bg-white/60 rounded-2xl border border-orange-200 flex items-center justify-center">
          <span className="text-orange-700/80 font-semibold">
            Seu restaurante em destaque 🍲
          </span>
        </div>
      </section>

      <section id="como-funciona" className="container mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold mb-4">Como funciona</h3>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="rounded-full bg-white p-4 border">1. Cadastre seu restaurante</li>
          <li className="rounded-full bg-white p-4 border">2. Publique seus produtos</li>
          <li className="rounded-full bg-white p-4 border">3. Receba pedidos do bairro</li>
        </ul>
      </section>
      <Depoimentos />
    </main>
    
  );
}
