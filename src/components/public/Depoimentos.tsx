export default function Depoimentos() {
  const itens = [
    {
      img: "https://i.imgur.com/prLfpdz.jpeg",
      alt: "Vanessa, proprietária do Roni 46",
      texto:
        "Entrar no PerifaFood abriu portas pra mais visibilidade no bairro. Nosso faturamento subiu de forma significativa.",
      nome: "Vanessa — Roni 46",
    },
    {
      img: "https://i.imgur.com/8IIkTWU.jpeg",
      alt: "Keid, proprietária da Tapioca Reis Gourmet",
      texto:
        "Em menos de 2 anos foquei só na minha loja. Batemos +20k em um mês e viramos Super Restaurante.",
      nome: "Keid — Tapioca Reis Gourmet",
    },
    {
      img: "https://i.imgur.com/wB1DS6U.jpeg",
      alt: "Marilina, proprietária da Green Tasty",
      texto:
        "Recuperei autonomia e o negócio cresceu. Conseguimos abrir a segunda unidade em São Paulo.",
      nome: "Marilina — Green Tasty",
    },
  ];

  return (
    <section className="container rounded-xl bg-[#F2F2F2] mx-auto px-6 py-4 mt-4 flex items-center justify-between">
      <div className="max-w-6xl mx-auto">
        <h2 className=" text-black text-center font-sans font-extrabold antialiased md:text-[40px] md:leading-[48px] text-[20px] leading-[24px]">
          O que os nossos parceiros dizem
          <br className="hidden sm:block font-sans font-extrabold" />
          sobre vender com o <span className="text-[#F27E63]">PerifaFood</span>
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
