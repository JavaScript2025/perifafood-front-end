import { useNavigate } from "react-router-dom";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Botao from "../../components/botao/Botao";

const SobreNos = () => {
  const navigate = useNavigate();

  const handleComecarAgora = () => {
    navigate("/cadastro");
  };

  const equipe = [
    {
      nome: "Inglyd Miranda",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEKJX_Zikn6PQ/profile-displayphoto-crop_800_800/B4DZod5CqPHYAM-/0/1761438085499?e=1764806400&v=beta&t=ko_SMrNac59nxKLzBvEPCPDoAUcApi7ZLD9zEju4QpI",
      linkedin: "https://www.linkedin.com/in/inglyd/",
      github: "https://github.com/inglyd",
    },
    {
      nome: "Junior Lima",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQFEUQ99OFFSZw/profile-displayphoto-crop_800_800/B4DZkNBR.sHsAM-/0/1756860065156?e=1764806400&v=beta&t=kLuSXU4-RJjXefKtxKxg36_q6LhGIzZCCcDtCEKvJYE",
      linkedin: "https://www.linkedin.com/in/limaojunio/",
      github: "https://github.com/limaojunio",
    },
    {
      nome: "Felipe Emanuel",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQH6AiYNSr29VA/profile-displayphoto-crop_800_800/B4DZmCap5.JAAI-/0/1758829650627?e=1764806400&v=beta&t=Ex6o8ZIcLcFp248r8VWs_6MF8FOSZCAkZ36ZyRrzaB4",
      linkedin: "https://www.linkedin.com/in/felipemanuel/",
      github: "https://github.com/Felipemanuell/Felipemanuell",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] text-[#4A4453] font-sans">
      {/* HEADER */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://i.imgur.com/laF4PX8.png"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Grafite vibrante"
        />
        <div className="absolute inset-0 bg-[#F22738] opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          {/* TÍTULO COM OUTLINE */}
          <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[3px_3px_0_#7B5BA8]">
            PERIFA
            <span className="text-[#F22738] drop-shadow-[3px_3px_0_#4A4453]">
              FOOD
            </span>
          </h1>

          {/* SUBTÍTULO COM OUTLINE */}
          <p className="text-xl md:text-3xl font-bold text-white mt-4 border-b-4 border-[#F22738] pb-1 drop-shadow-[2px_2px_0_#4A4453]">
            Entrega é Pra Quem Mora!
          </p>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="py-20 bg-white text-[#4A4453]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-[#F22738] mb-12 uppercase">
            É Sobre o Corre
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0FF] p-8 rounded-lg border border-[#7B5BA8] shadow hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold text-[#F22738] mb-4">Missão</h3>
              <p className="text-[#4A4453]">
                Levar delivery acessível para todas as periferias.
              </p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-lg border border-[#F2B23A] shadow hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold text-[#7B5BA8] mb-4">Visão</h3>
              <p className="text-[#4A4453]">
                Ser a maior plataforma logística das comunidades.
              </p>
            </div>

            <div className="bg-[#F5F0FF] p-8 rounded-lg border border-[#F22738] shadow hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold text-[#F22738] mb-4">
                Valores
              </h3>
              <ul className="space-y-2 text-[#4A4453]">
                <li>Respeito</li>
                <li>Giro Rápido</li>
                <li>Representatividade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-lg space-y-6">
          <h2 className="text-4xl font-black text-[#F22738] border-b-4 border-[#7B5BA8] pb-2 inline-block">
            Nossa História
          </h2>

          <p>
            A PerifaFood nasceu da vivência real da periferia — da falta de
            acesso, dos perrengues e da pressa de quem mora longe do centro.
          </p>

          <blockquote className="bg-[#F22738]/10 p-6 rounded-lg border-l-4 border-[#7B5BA8] italic font-medium">
            “Nasceu da necessidade. Da quebrada. Da vida real. A tecnologia
            virou ponte.”
          </blockquote>

          <p>
            Somos motor de{" "}
            <span className="text-[#F22738] font-bold">economia local</span>,
            fortalecendo comércio e entregadores.
          </p>

          <p className="text-2xl font-black text-[#4A4453]">O Corre é Nosso.</p>
        </div>

        <div>
          <img
            src="https://i.imgur.com/dhZN2Nd.jpeg"
            className="w-full rounded-2xl border-4 border-[#F22738] shadow-[10px_10px_0_0_#7B5BA8]"
            alt="Comunidade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F22738] py-16 text-center border-t-8 border-b-8 border-[white]">
        <h3 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-wider">
          Fazer Parte da Mudança
        </h3>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Seja parceiro, entregador ou cliente. A força tá na união.
        </p>
        <Botao variant="laranja" onClick={handleComecarAgora}>
          CADASTRO ABERTO!
        </Botao>
      </section>

      {/* EQUIPE */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-14 text-[#4A4453]">
            Nossa Tropa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
            {equipe.map((pessoa, index) => (
              <div
                key={pessoa.nome}
                className={`bg-white p-6 rounded-xl shadow border-2 ${
                  index % 2 === 0 ? "border-[#F22738]" : "border-[#7B5BA8]"
                } text-center w-60 hover:scale-105 transition`}
              >
                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  className="w-28 h-28 rounded-full mx-auto mb-3 border-4 border-[#4A4453]"
                />

                <h4 className="font-black text-xl text-[#4A4453]">
                  {pessoa.nome}
                </h4>
                <p className="text-xs text-[#7B5BA8] italic mb-3">
                  Desenvolvedor FullStack
                </p>

                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href={pessoa.linkedin}
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <LinkedinLogoIcon className="text-[#7B5BA8]" size={28} />
                  </a>
                  <a
                    href={pessoa.github}
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <GithubLogoIcon className="text-[#4A4453]" size={28} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPRESENTATIVIDADE */}
      <section className="py-20 bg-[#F5F0FF]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-black text-[#F22738] mb-6">
            Representatividade que Move
          </h3>
          <p className="text-xl text-[#7B5BA8] mb-8 font-medium">
            Construímos a plataforma justa e eficiente que a comunidade merece.
          </p>

          <button
            onClick={handleComecarAgora}
            className="bg-[#4A4453] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition"
          >
            Vem pro Time!
          </button>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
