import { Link } from "react-router-dom";

export default function NavbarPublico() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <header className="container rounded-full bg-[#F2F2F2] mx-auto px-6 py-4 mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#260101]">PerifaFood</h1>
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#F27E63] to-[#F25E5E] hover:bg-orange-600 hover:text-white transition"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="px-5 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#F27E63] to-[#F25E5E] hover:bg-orange-600 hover:text-white transition"
          >
            Cadastrar restaurante
          </Link>
        </div>
      </header>
    </main>
  );
}
