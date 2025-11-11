import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormProduto from "../formproduto/FormProduto";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded-4xl px-5 py-3  text-white bg-[#FF751F]
          hover:bg-orange-400 cursor-pointer">
            Novo Produto
          </button>
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
