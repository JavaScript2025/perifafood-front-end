import type Categoria from "../../../models/Categoria";
import { Link } from "react-router-dom";
import ModalApagarCategoria from "../../modais/ModalApagarCategoria";
import ModalEditarCategoria from "../../modais/ModalEditarCategoria";

interface CardProps {
  categoria: Categoria;
}

export default function CardCategoria({ categoria }: CardProps) {
  return (
    <div className="shadow rounded p-4 flex flex-col justify-between bg-white">
      <div>
        <h3 className="font-bold text-lg">{categoria.tipo}</h3>
        <p className="opacity-70 text-sm">ID: {categoria.id}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <ModalEditarCategoria categoriaId={categoria.id} />

        <ModalApagarCategoria categoriaId={categoria.id} />
      </div>
    </div>
  );
}
