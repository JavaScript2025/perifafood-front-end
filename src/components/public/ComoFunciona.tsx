import {
  StorefrontIcon,
  HandshakeIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react";

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="container mx-auto mt-4 rounded-xl px-4 py-15 pb-20 bg-gradient-to-r from-[#FF9665] to-[#FF6663]"
    >
      <h3 className="text-5xl font-bold mb-8 text-center text-[#260101]">
        Como funciona
      </h3>

      <ul className="grid md:grid-cols-3 gap-6 text-center">
        <li className="rounded-3xl bg-white p-6 flex flex-col items-center">
          <StorefrontIcon
            size={42}
            weight="duotone"
            className="text-[#FF6B4A] mb-3"
          />
          <span className="font-medium">1. Cadastre seu restaurante</span>
        </li>

        <li className="rounded-3xl bg-white p-6 flex flex-col items-center">
          <ForkKnifeIcon size={42} className="text-[#FF6B4A] mb-3" />
          <span className="font-medium">2. Publique seus produtos</span>
        </li>

        <li className="rounded-3xl bg-white p-6 flex flex-col items-center">
          <HandshakeIcon size={42} className="text-[#FF6B4A] mb-3" />
          <span className="font-medium">3. Receba pedidos da comunidade</span>
        </li>
      </ul>
    </section>
  );
}
