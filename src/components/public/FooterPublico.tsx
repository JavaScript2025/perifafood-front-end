import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { HamburgerIcon } from "lucide-react";

function FooterPublico() {
  const data = new Date().getFullYear();

  return (
    <footer className="container mx-auto mb-4 rounded-xl pb-2 py-10 px-4 mt-4 bg-gradient-to-r from-[#FF9665] to-[#FF6663] text-white font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Marca */}
          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold transition-colors hover:opacity-90"
            >
              <p className="flex gap-2">
                Perifa Food <HamburgerIcon size={25} color="#f8f7f7" />
              </p>
            </a>
            <p className="text-sm text-white/80">
              O melhor serviço de entrega do país.
            </p>
          </div>

          {/* Ícones sociais */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white/80 transition-colors"
            >
              <LinkedinLogoIcon size={28} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white/80 transition-colors"
            >
              <InstagramLogoIcon size={28} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white/80 transition-colors"
            >
              <FacebookLogoIcon size={28} weight="bold" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/20 text-center text-sm text-white/80">
        <p>© {data} Perifa Food. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default FooterPublico;
