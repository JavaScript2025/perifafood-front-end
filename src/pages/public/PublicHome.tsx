
import { Link } from "react-router-dom";
import ComoFunciona from "../../components/public/ComoFunciona";
import Depoimentos from "../../components/public/Depoimentos";
import Faq from "../../components/public/Faq";


export default function PublicHome() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <section className="bg-[#F2F2F2] rounded-xl container mx-auto mt-4 px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold font-sans leading-tight text-[#260101]">
            Delivery pensado para as periferias
          </h2>
          <p className="text-lg text-poppins  text-[#260101]">
            No PerifaFood, pequenos restaurantes cadastram seus pratos e
            alcançam clientes da comunidade com facilidade. Simples, direto e do
            seu jeito.
          </p>
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#F27E63] to-[#F25E5E] hover:bg-orange-600 hover:text-white transition"
            >
              Entrar para gerenciar
            </Link>
            <a
              href="#como-funciona"
              className="px-5 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#F27E63] to-[#F25E5E] hover:bg-orange-600 hover:text-white transition"
            >
              Como funciona
            </a>
          </div>
          
        </div>

        {/* <div className="w-full h-64 md:h-80 bg-white/60 rounded-2xl border border-orange-200 flex items-center justify-center">
          <span className="text-orange-700/80 font-semibold h-48 w-full object-cover">
            
          </span>
        </div> */}
      </section>
      <Depoimentos />
      <ComoFunciona />
      <Faq />
    </main>
  );
}
