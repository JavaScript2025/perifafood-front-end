import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import FormCategoria from "../categoria/formcategoria/FormCategoria";

// Importe o componente de deletar que você usa

interface ModalApagarCategoriaProps {
  categoriaId: number;
}

function ModalApagarCategoria({ categoriaId }: ModalApagarCategoriaProps) {
  return (
    <>
      <Popup
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
        <FormCategoria categoriaId={categoriaId} />
      </Popup>
    </>
  );
}

export default ModalApagarCategoria;
