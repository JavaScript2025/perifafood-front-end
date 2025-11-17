export default function Depoimentos() {
  const itens = [
    {
      img: "https://i.imgur.com/prLfpdz.jpeg",
      alt: "Vanessa, proprietária do Boteco da Nessa",
      texto:
        "Entrar no PerifaFood abriu portas pra mais visibilidade na comunidade. Nosso faturamento subiu de forma significativa.",
      nome: "Vanessa — Boteco da Nessa",
    },
    {
      img: "https://i.imgur.com/8IIkTWU.jpeg",
      alt: "Keid, proprietária da Tapioca Reis Gourmet",
      texto:
        "Em menos de 2 anos foquei só na minha lojinha. Com o faturamento junto ao PerifaFood, consegui abrir uma outra unidade.",
      nome: "Rosa — Tapioca das Rosas",
    },
    {
      img: "https://i.imgur.com/wB1DS6U.jpeg",
      alt: "Beto, proprietário do Favela Verde",
      texto:
        "Recuperei autonomia e o negócio cresceu. Conseguimos expandir o Favela Verde.",
      nome: "Beto — Favela Verde",
      color: "hover:border-[#4CAF50]",
    },
  ];

  return (
    <section className="container rounded-xl mx-auto px-6 mt-4 flex items-center justify-between">
      <div className="max-w-7xl mx-auto ">
        {/* <h2 className=" text-black text-center font-sans font-extrabold antialiased md:text-[40px] md:leading-[48px] text-[20px] leading-[24px]">
          O que os nossos parceiros dizem
          <br className="hidden sm:block font-sans font-extrabold" />
          sobre vender com o <span className="text-[#F27E63]">PerifaFood</span>
        </h2> */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {itens.map((it, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-sm border border-white/30 flex flex-col "
            >
              <div className="h-48 overflow-hidden"><img
                src={it.img}
                alt={it.alt}
                className="h-48 w-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              </div>
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
