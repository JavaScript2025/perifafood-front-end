import type Categoria from "../../../models/Categoria";
import ModalEditarCategoria from "../../modais/ModalEditarCategoria";
import ModalApagarCategoria from "../../modais/ModalApagarCategoria";

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete?: () => void; // Adicione esta prop
  onEdit?: () => void;
}

export default function CardCategoria({
  categoria,
  onDelete,
  onEdit,
}: CardCategoriaProps) {
  return (
    <div className="shadow rounded overflow-hidden flex flex-col bg-white p-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">{categoria.tipo}</h3>
      </div>
      <div className="mt-4 flex gap-2">
        <ModalEditarCategoria categoriaId={categoria.id} onEdit={onEdit} />
        
        <ModalApagarCategoria categoriaId={categoria.id} onDelete={onDelete} />
      </div>
    </div>
  );
}
