function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] to-[#F5F0FF] text-[#4A4453]">
      
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2B23A]/10 via-transparent to-[#F22738]/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
               
                <div className="inline-flex items-center gap-2 bg-[#F22738] text-white px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">Da Quebrada pra Quebrada</span>
                </div>
                
                
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className="bg-gradient-to-r from-[#4A4453] to-[#F22738] bg-clip-text text-transparent">
                      PERIFA
                    </span>
                    <span className="block text-[#F22738]">FOOD</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-[#7B5BA8] font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                    O delivery que entende a <span className="text-[#F22738] font-semibold">fome</span> e a <span className="text-[#F22738] font-semibold">pressa</span> da comunidade
                  </p>
                </div>
              </div>

              
              <div className="flex justify-center lg:justify-start gap-8 py-6">
                {[
                  { number: "100+", label: "Restaurantes" },
                  { number: "24/7", label: "Disponível" },
                  { number: "R$", label: "Acessível" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl md:text-3xl font-black text-[#F22738] group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-[#7B5BA8] text-xs uppercase tracking-wider mt-2 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-[#F22738] hover:bg-[#d92030] text-white font-semibold py-4 px-8 rounded-full uppercase tracking-wide text-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    Fazer Pedido
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                <button className="group bg-white/80 backdrop-blur-sm border-2 border-[#7B5BA8] text-[#7B5BA8] hover:bg-[#7B5BA8] hover:text-white font-semibold py-4 px-8 rounded-full uppercase tracking-wide text-lg transition-all duration-300">
                  Ver Cardápio
                </button>
              </div>
            </div>

            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                {/* Gradiente de fundo sutil */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F22738] to-[#F2B23A] rounded-3xl opacity-5 blur-xl"></div>
                
                <img
                  src="https://i.imgur.com/1W7mmb7.png"
                  alt="Delivery Perifa Food" 
                  className="relative w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E1D5F5] to-transparent"></div>

      
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#4A4453] mb-4">
              Porque é da <span className="text-[#F22738]">Nossa</span> Comunidade
            </h2>
            <p className="text-[#7B5BA8] text-lg">
              Criado por quem entende as necessidades reais da periferia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: "from-[#F22738] to-[#F49868]",
                title: "Preço Justo",
                description: "Valores que respeitam a realidade do trabalhador"
              },
              {
                color: "from-[#7B5BA8] to-[#9C89B8]",
                title: "Entrega Ágil",
                description: "Chegamos onde os grandes apps não chegam"
              },
              {
                color: "from-[#4CAF50] to-[#81C784]",
                title: "Feito por Nós",
                description: "Quem vive na quebrada entende suas necessidades"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 border border-[#F3E5F5]">
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mb-6 group-hover:w-16 transition-all duration-300`}></div>
                  <h3 className="text-2xl font-black text-[#4A4453] mb-4">{feature.title}</h3>
                  <p className="text-[#7B5BA8] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gradient-to-br from-[#F9F5FF] to-[#F3E5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#4A4453] mb-4">
              Histórias da <span className="text-[#F22738]">Quebrada</span>
            </h2>
            <p className="text-[#7B5BA8] text-lg">
              A gastronomia periférica que está conquistando o mundo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://conteudo.imguol.com.br/c/entretenimento/2c/2022/06/22/edson-leite-1655902703894_v2_900x506.jpg",
                title: "Chef Brilha na Espanha",
                description: "Edson Leite, da zona leste de SP, recebe menção honrosa em prêmio internacional",
                link: "https://www.uol.com.br/nossa/noticias/redacao/2022/06/22/chef-de-cozinha-da-periferia-de-sp-e-destaque-de-honra-em-premio-espanhol.htm",
                color: "hover:border-[#F22738]"
              },
              {
                image: "https://conteudo.imguol.com.br/c/entretenimento/bb/2024/10/22/restaurante-da-tia-nice-e-armazem-organicamente-rango-thiago-vinicius-de-paula-silva-e-sua-mae-tia-nice-no-restaurante-no-bairro-do-campo-limpo-1729630356777_v2_300x225.jpg.webp",
                title: "Cozinha das Quebradas",
                description: "Tia Nice e seu filho mostram que comida saudável é coisa de periferia",
                link: "https://www.uol.com.br/play/videos/nossa/2024/10/23/cozinha-das-quebradas-thiago-simpatia-visita-o-organicamente-rango.htm",
                color: "hover:border-[#7B5BA8]"
              },
              {
                image: "https://www.anf.org.br/wp-content/uploads/2025/07/gastronomia-1.jpg",
                title: "Formando Chefs",
                description: "Projeto oferece formação gratuita em gastronomia na periferia de Salvador",
                link: "https://www.anf.org.br/projeto-cozinha-do-amanha-oferece-formacao-gratuita-em-gastronomia-para-moradores-da-periferia-de-salvador/",
                color: "hover:border-[#4CAF50]"
              }
            ].map((story, index) => (
              <div key={index} className="group">
                <div className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 border border-[#F3E5F5] ${story.color}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#4A4453] mb-3">{story.title}</h3>
                    <p className="text-[#7B5BA8] mb-4 text-sm leading-relaxed">{story.description}</p>
                    <a 
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F22738] hover:bg-[#d92030] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      Ver História
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-[#7B5BA8] text-lg">
                Sua história também pode fazer parte dessa revolução
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-gradient-to-br from-[#F9F5FF] to-[#F3E5F5] py-12 border-t border-[#E1D5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#F22738] rounded-full animate-pulse"></div>
              <p className="text-[#F22738] font-bold text-lg uppercase tracking-wider">
                Perifa Food
              </p>
              <div className="w-2 h-2 bg-[#F22738] rounded-full animate-pulse"></div>
            </div>
            <p className="text-[#7B5BA8] text-sm max-w-md mx-auto leading-relaxed">
              Conectando sabores e histórias da periferia. 
              Feito com orgulho para nossa comunidade.
            </p>
            
           
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-[#F22738] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm">📱</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#7B5BA8] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#F22738] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm">📹</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
