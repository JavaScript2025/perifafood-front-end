import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Botao from "../botao/Botao";
import DeletarProduto from "../produto/deletarProduto/DeletarProduto";


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
      <DeletarProduto produtoId={produtoId} />
    </Popup>
  );
}

export default ModalApagarProduto;
