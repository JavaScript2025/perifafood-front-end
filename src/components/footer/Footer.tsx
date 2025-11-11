import {
  FacebookLogoIcon,
  Hamburger,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <footer className="py-12 px-4 bg-muted border-t border-gray-100 border-border bg-[#F42513] text-white font-mono">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            <div className="space-y-4">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80"
              >
                <p className=" flex gap-2">
                  Perifa Food <Hamburger size={25} color="#f8f7f7" />
                </p>
              </a>
              <p className="text-sm text-muted-foreground">
                O melhor serviço de entrega do país.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <LinkedinLogoIcon size={28} weight="bold" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <InstagramLogoIcon size={28} weight="bold" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <FacebookLogoIcon size={28} weight="bold" />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border border-gray-300 text-center text-sm text-muted-foreground">
            <p>© {data} Perifa Food. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }

  return <>{component}</>;
}

export default Footer;
