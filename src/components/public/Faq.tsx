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
  ];

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className="mx-auto container px-4 py-12 mt-4 rounded-xl bg-[#F2F2F2]">
      <h2 className="text-center font-sans text-5xl text-[#260101] font-bold mb-8">
        Perguntas Frequentes
      </h2>

      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <div key={idx} className="border rounded-xl bg-white">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
            >
              {item.q}
              <span className="text-xl text-[#F27E63]">{openIndex === idx ? "–" : "+"}</span>
            </button>

            {openIndex === idx && (
              <p className="px-4 pb-4 text-sm text-gray-600">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
