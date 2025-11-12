import type Produto from "../../../models/Produto";
import ModalApagarProduto from "../../modais/ModalApagarProduto";
import ModalEditarProduto from "../../modais/ModalEditarProduto"; // Corrigido

interface CardProps {
  produto: Produto;
}

export default function CardProdutos({ produto }: CardProps) {
  return (
    <div className="shadow rounded overflow-hidden flex flex-col">
      {produto.foto && (
        <img
          src={produto.foto}
          alt={produto.nome_produto}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg">{produto.nome_produto}</h3>
        <p className="text-sm opacity-70 mb-2">{produto.categoria?.tipo}</p>
        <p className="mb-2">{produto.descricao}</p>
        <p className="font-semibold">R$ {Number(produto.preco).toFixed(2)}</p>
      </div>
      <div className="p-4 flex gap-2">
        <ModalEditarProduto produtoId={produto.id} />
        <ModalApagarProduto produtoId={produto.id} />
      </div>
    </div>
  );
}
