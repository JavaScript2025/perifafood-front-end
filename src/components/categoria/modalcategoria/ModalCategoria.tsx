import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import FormCategoria from "../formcategoria/FormCategoria";

function ModalCategoria() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800 cursor-pointer">
          Nova Categoria
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
      <FormCategoria />
    </Popup>
  );
}
export default ModalCategoria;
