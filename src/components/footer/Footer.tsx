import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  HamburgerIcon,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  return (
    <footer className="w-full bg-gradient-to-r from-[#F22738] to-[#F2B23A] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          
         
          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
              <span className="text-2xl font-black text-white group-hover:text-[#1A1A1A] transition-all">
                PerifaFood
              </span>
              <HamburgerIcon size={25} className="group-hover:scale-110 transition-transform" />
            </a>
            <p className="text-sm text-white/80 max-w-md">
              Conectando sabores da periferia. Delivery feito por nós, para nós.
            </p>
          </div>

          
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#F22738] transition-all duration-300 transform hover:scale-110"
            >
              <LinkedinLogoIcon size={20} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#F22738] transition-all duration-300 transform hover:scale-110"
            >
              <InstagramLogoIcon size={20} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#F22738] transition-all duration-300 transform hover:scale-110"
            >
              <FacebookLogoIcon size={20} weight="bold" />
            </a>
          </div>
        </div>

        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
          <a href="/sobre" className="text-white/80 hover:text-white hover:underline transition-colors">
            Sobre Nós
          </a>
          <a href="/contato" className="text-white/80 hover:text-white hover:underline transition-colors">
            Contato
          </a>
          <a href="/ajuda" className="text-white/80 hover:text-white hover:underline transition-colors">
            Ajuda
          </a>
          </div>

     
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            © {data} Perifa Food. Feito com ❤️ pela comunidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;