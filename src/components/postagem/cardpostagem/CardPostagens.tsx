import type Postagem from "../../../models/Postagem";
import { Link } from "react-router-dom";

interface CardProps {
  postagem: Postagem;
}

export default function CardPostagens({ postagem }: CardProps) {
  return (
    <div className="shadow rounded overflow-hidden flex flex-col">
      {postagem.foto && (
        <img src={postagem.foto} alt={postagem.nome_produto} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg">{postagem.nome_produto}</h3>
        <p className="text-sm opacity-70 mb-2">{postagem.categoria?.tipo}</p>
        <p className="mb-2">{postagem.descricao}</p>
        <p className="font-semibold">R$ {Number(postagem.preco).toFixed(2)}</p>
      </div>
      <div className="p-4 flex gap-2">
        <Link to={`/editarPostagem/${postagem.id}`} className="px-3 py-2 bg-blue-600 text-white rounded">Editar</Link>
        <Link to={`/deletarPostagem/${postagem.id}`} className="px-3 py-2 bg-red-600 text-white rounded">Apagar</Link>
      </div>
    </div>
  );
}
