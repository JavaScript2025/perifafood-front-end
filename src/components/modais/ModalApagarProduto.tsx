import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import FormProduto from "../produto/formProduto/FormProduto";
// Importe o componente de deletar que você usa

interface ModalApagarProdutoProps {
  produtoId: number;
}

function ModalApagarProduto({ produtoId }: ModalApagarProdutoProps) {
  return (
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
      <FormProduto produtoId={produtoId} />
    </Popup>
  );
}

export default ModalApagarProduto;
