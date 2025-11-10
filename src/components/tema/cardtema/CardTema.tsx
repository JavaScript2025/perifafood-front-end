import type Tema from "../../../models/Tema";
import { Link } from "react-router-dom";

interface CardProps {
  tema: Tema;
}

export default function CardTema({ tema }: CardProps) {
  return (
    <div className="shadow rounded p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">{tema.tipo}</h3>
        <p className="opacity-70 text-sm">ID: {tema.id}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <Link to={`/editarTema/${tema.id}`} className="px-3 py-2 bg-blue-600 text-white rounded">Editar</Link>
        <Link to={`/deletarTema/${tema.id}`} className="px-3 py-2 bg-red-600 text-white rounded">Apagar</Link>
      </div>
    </div>
  );
}
