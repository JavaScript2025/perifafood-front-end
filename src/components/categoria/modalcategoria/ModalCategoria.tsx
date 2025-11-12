import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormCategoria from "../formcategoria/FormCategoria";
import Botao from "../../botao/Botao";

function ModalCategoria() {
  return (
    <Popup
      trigger={

        <Botao variant="laranja">Nova Categoria</Botao>

      }
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
      <FormCategoria />
    </Popup>
  );
}
export default ModalCategoria;
