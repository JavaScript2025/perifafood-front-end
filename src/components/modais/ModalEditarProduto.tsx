import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import FormProduto from "../produto/formProduto/FormProduto";


interface ModalEditarProdutoProps {
  produtoId: number;
  onEdit?: () => void;
}

function ModalEditarProduto({ produtoId, onEdit }: ModalEditarProdutoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onEdit) onEdit();
    close();
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
      <div className="bg-white rounded-2xl p-6 shadow-xl max-w-lg mx-auto">
        <FormProduto produtoId={produtoId} onSuccess={handleClose} />
        <div className="mt-4 flex justify-end">
          <Botao variant="vermelho" onClick={handleClose}>
            Fechar
          </Botao>
        </div>
      </div>
    </Popup>
  );
}

export default ModalEditarProduto;
