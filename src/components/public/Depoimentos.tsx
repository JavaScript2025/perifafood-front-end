export default function Depoimentos() {
  const itens = [
    {
      img: "/images/depoimentos/vanessa.webp",
      alt: "Vanessa, proprietária do Roni 46",
      texto:
        "Entrar no PerifaFood abriu portas pra mais visibilidade no bairro. Nosso faturamento subiu de forma significativa.",
      nome: "Vanessa — Roni 46",
    },
    {
      img: "/images/depoimentos/keid.webp",
      alt: "Keid, proprietária da Tapioca Reis Gourmet",
      texto:
        "Em menos de 2 anos foquei só na minha loja. Batemos +20k em um mês e viramos Super Restaurante.",
      nome: "Keid — Tapioca Reis Gourmet",
    },
    {
      img: "/images/depoimentos/marilina.webp",
      alt: "Marilina, proprietária da Green Tasty",
      texto:
        "Recuperei autonomia e o negócio cresceu. Conseguimos abrir a segunda unidade em São Paulo.",
      nome: "Marilina — Green Tasty",
    },
  ];

  return (
    <section className="bg-[#B51E16] px-4 md:px-24 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center font-bold antialiased md:text-[40px] md:leading-[48px] text-[20px] leading-[24px]">
          O que os nossos parceiros dizem
          <br className="hidden sm:block" />
          sobre vender com o PerifaFood
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((it, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-sm border border-white/30 flex flex-col"
            >
              <img
                src={it.img}
                alt={it.alt}
                className="h-48 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4 flex flex-col gap-3">
                <p className="text-sm text-gray-800">
                  “{it.texto}”
                </p>
                <p className="text-sm text-gray-700 font-semibold">{it.nome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
