import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "O que é o PerifaFood?",
      a: "O PerifaFood é uma plataforma que conecta restaurantes e empreendedores da periferia aos clientes da região, facilitando vendas, visibilidade e entregas.",
    },
    {
      q: "Como meu restaurante pode entrar no PerifaFood?",
      a: "Basta criar uma conta como restaurante, preencher os dados do estabelecimento e cadastrar o cardápio. Depois disso, nossa equipe valida e o restaurante já pode começar a receber pedidos.",
    },
    {
      q: "Meu restaurante não tem entrega própria. Posso usar a plataforma?",
      a: "Pode sim! O PerifaFood possui entregadores parceiros que residem na propria comunidade. Basta ativar essa opção nas configurações do restaurante.",
    },
    {
      q: "Quais são as taxas do PerifaFood?",
      a: "Taxas justas e transparentes, pensadas para o crescimento do comércio local. Valores que respeitam a realidade da periferia.",
    },
    {
      q: "Como funciona a entrega?",
      a: "Nossos entregadores são da comunidade e conhecem cada beco e viela. Entrega rápida e segura onde os grandes apps não chegam.",
    }
  ];

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white/80 backdrop-blur-sm border border-[#F22738]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center text-gray-900 hover:text-[#F22738] transition-colors duration-300 group"
            >
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                {item.q}
              </span>
              <div className={`w-8 h-8 bg-gradient-to-r from-[#F22738] to-[#F2B23A] rounded-full flex items-center justify-center text-white font-bold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                <span>{openIndex === idx ? "−" : "+"}</span>
              </div>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-[#F22738] to-[#F2B23A] rounded-full mb-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA adicional */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Ainda tem dúvidas?
        </p>
        <a 
          href="/contato" 
          className="inline-flex items-center gap-2 bg-[#F22738] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d92030] transition-all duration-300 transform hover:scale-105"
        >
          Fale Conosco
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}