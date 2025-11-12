import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import FormCategoria from "../categoria/formcategoria/FormCategoria";

interface ModalEditarCategoriaProps {
  categoriaId: number;
  onEdit?: () => void;
}

function ModalEditarCategoria({
  categoriaId,
  onEdit,
}: ModalEditarCategoriaProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onEdit) onEdit(); // ✅ atualiza a lista no pai
  };

  return (
    <Popup
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Botao variant="azul">Editar</Botao>}
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
      {/* Aqui o formulário aparece dentro da modal */}
      <div className="bg-white rounded-2xl p-6 shadow-xl max-w-lg mx-auto">
        <FormCategoria categoriaId={categoriaId} onSuccess={handleClose} />

        <div className="mt-4 flex justify-end">
          <Botao variant="vermelho" onClick={handleClose}>
            Fechar
          </Botao>
        </div>
      </div>
    </Popup>
  );
}

export default ModalEditarCategoria;
