import type Produto from "../../../models/Produto";
import { Link } from "react-router-dom";

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
        <Link
          to={`/editarProduto/${produto.id}`}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Editar
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="px-3 py-2 bg-red-600 text-white rounded"
        >
          Apagar
        </Link>
      </div>
    </div>
  );
}
