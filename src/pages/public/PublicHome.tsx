import { Link } from "react-router-dom";
import VozesDaQuebrada from "../../components/public/VozesDaQuebrada";
import Depoimentos from "../../components/public/Depoimentos";
import Faq from "../../components/public/Faq";

export default function PublicHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFFBFF] to-[#F9F5FF]">
      
      <section className="min-h-screen relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(123,91,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,91,168,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        <div className="container mx-auto px-4 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Bloco Principal */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                  <img 
                    src="https://i.imgur.com/WRZRM4v.png" 
                    alt="PerifaFood Logo" 
                    className="h-16 lg:h-20 object-contain"
                  />
                </div>
                
                <div className="inline-flex items-center gap-3 bg-[#F22738] px-6 py-3 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white">COMUNIDADE FIRST</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none text-gray-900 text-center lg:text-left">
                  PERIFA
                  <span className="block text-[#F22738]">FOOD</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl text-center lg:text-left">
                  A plataforma de delivery que nasceu nas quebradas e revoluciona 
                  como a comunidade consome e empreende.
                </p>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/cadastro"
                  className="bg-[#F22738] text-white px-8 py-4 rounded-full font-bold hover:bg-[#d92030] transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Cadastrar Meu Restaurante
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-[#F22738] text-[#F22738] px-8 py-4 rounded-full font-bold hover:bg-[#F22738] hover:text-white transition-all duration-300 text-center"
                >
                  Acessar Plataforma
                </Link>
              </div>
            </div>

            {/* Imagem Livre - Sem Card */}
            <div className="lg:col-span-5">
              <img 
                src="https://i.pinimg.com/736x/46/7c/f3/467cf395247b776ba4170026422405f5.jpg" 
                alt="Comunidade da periferia se unindo" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resto do código permanece igual */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F9F5FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              QUEM USA <span className="text-[#7B5BA8]">RECOMENDA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja o que restaurantes e clientes estão falando sobre a experiência PerifaFood
            </p>
          </div>

          <Depoimentos />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#F22738] to-[#F2B23A]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              A REVOLUÇÃO DO DELIVERY
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Porque delivery não é só sobre comida, é sobre comunidade, 
              oportunidade e crescimento coletivo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Comida Caseira", bg: "bg-white/20" },
                { label: "Entregadores Locais", bg: "bg-white/20" },
                { label: "Economia Circular", bg: "bg-white/20" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="font-black text-white text-lg">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FFF5F5] to-[#F3E5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 text-center mb-16">
            COMO VAI <span className="text-[#F22738]">FUNCIONAR</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {[
              { step: "01", title: "Cadastro", desc: "Restaurante se cadastra", color: "bg-[#F22738]" },
              { step: "02", title: "Cardápio", desc: "Adiciona os pratos", color: "bg-[#F2B23A]" },
              { step: "03", title: "Pedidos", desc: "Clientes fazem pedidos", color: "bg-[#F22738]" },
              { step: "04", title: "Entrega", desc: "Entregador local busca", color: "bg-[#F2B23A]" },
              { step: "05", title: "Sucesso", desc: "Todo mundo ganha", color: "bg-[#F22738]" }
            ].map((item, index) => (
              <div key={index} className="text-center flex-1 group">
                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white font-black text-lg">{item.step}</div>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              DÚVIDAS <span className="text-[#7B5BA8]">FREQUENTES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre como funciona o PerifaFood
            </p>
          </div>
          <Faq />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FFF5F5] to-[#F3E5F5]">
        <div className="container mx-auto px-4">
          <VozesDaQuebrada />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F9F5FF] to-[#F3E5F5]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#F22738] to-[#F2B23A] rounded-3xl p-12 text-center shadow-2xl relative">
            <div className="absolute top-6 left-6 w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full"></div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 relative z-10">
              VEM PRA <span className="text-white/90">REVOLUÇÃO</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Milhares de restaurantes e clientes já fazem parte. 
              Chegou sua hora de transformar o delivery na sua comunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/cadastro"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
              >
                Cadastrar Restaurante
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#F22738] transition-all duration-300 text-lg"
              >
                Acessar Plataforma
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}