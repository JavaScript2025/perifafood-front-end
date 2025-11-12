import type Produto from "../../../models/Produto";
import ModalApagarProduto from "../../modais/ModalApagarProduto";
import ModalEditarProduto from "../../modais/ModalEditarProduto"; // Corrigido

interface CardProps {
  produto: Produto;
}

export default function CardProdutos({ produto }: CardProps) {
  return (
    <div className="shadow-sm rounded-lg overflow-hidden flex flex-col bg-white border border-gray-200 hover:shadow-md transition-all duration-200">
      {/* Imagem */}
      {produto.foto && (
        <img
          src={produto.foto}
          alt={produto.nome_produto}
          className="w-full h-36 object-cover"  // altura reduzida
        />
      )}

      {/* Conteúdo */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-base leading-tight">
          {produto.nome_produto}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{produto.categoria?.tipo}</p>
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">
          {produto.descricao}
        </p>
        <p className="font-semibold text-[#FF6B4A]">
          R$ {Number(produto.preco).toFixed(2)}
        </p>
      </div>

      {/* Ações */}
      <div className="p-3 flex gap-2 justify-end">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="flex-0 px-5 text-center px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition"
        >
          Editar
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="flex-0 px-5 text-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition"
        >
          Apagar
        </Link>
      </div>
    </div>
  );
}
