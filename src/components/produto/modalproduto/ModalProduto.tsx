import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormProduto from "../formproduto/FormProduto";
import Botao from "../../botao/Botao";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
<Botao variant="laranja">Novo Produto</Botao>
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
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalProduto;
