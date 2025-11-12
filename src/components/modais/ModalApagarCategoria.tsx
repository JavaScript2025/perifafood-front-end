import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import DeletarCategoria from "../categoria/deletarcategoria/DeletarCategoria";

interface ModalApagarCategoriaProps {
  categoriaId: number;
  onDelete?: () => void;
}

function ModalApagarCategoria({ categoriaId, onDelete }: ModalApagarCategoriaProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    setIsOpen(false);
    if (onDelete) onDelete();
  };

  return (
    <Popup
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Botao variant="vermelho">Apagar</Botao>}
      modal
      lockScroll
      closeOnEscape
      overlayStyle={{
        background: "rgba(0, 0, 0, 0.70)",
        backdropFilter: "blur(5px)",
      }}
      contentStyle={{
        background: "transparent",
        padding: 0,
        border: "none",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <DeletarCategoria 
        categoriaId={categoriaId} 
        onDelete={handleDelete} 
      />
    </Popup>
  );
}

export default ModalApagarCategoria;
