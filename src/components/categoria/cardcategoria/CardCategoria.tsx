import type Categoria from "../../../models/Categoria";
import { Link } from "react-router-dom";

interface CardProps {
  categoria: Categoria;
}

export default function CardCategoria({ categoria }: CardProps) {
  return (
    <div className="shadow rounded p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">{categoria.tipo}</h3>
        <p className="opacity-70 text-sm">ID: {categoria.id}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Editar
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="px-3 py-2 bg-red-600 text-white rounded"
        >
          Apagar
        </Link>
      </div>
    </div>
  );
}
