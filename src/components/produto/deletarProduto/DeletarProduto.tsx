import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, deletar, authHeader } from "../../../services/Service";
import Botao from "../../botao/Botao";

interface DeletarProdutoProps {
  produtoId?: number;
  onDelete?: () => void;
}

function DeletarProduto({ produtoId, onDelete }: DeletarProdutoProps = {}) {
  const navigate = useNavigate();
  const { id: urlId } = useParams<{ id: string }>();

  const id = produtoId?.toString() || urlId;

  const [produto, setProduto] = useState<Produto | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    async function carregar() {
      if (!id) return;
      try {
        await buscar(`/produtos/${id}`, setProduto, authHeader(token));
      } catch (e: any) {
        if (e.toString().includes("401")) handleLogout();
      }
    }
    carregar();
  }, [id]);

  async function confirmar() {
    if (!id) return;
    setIsDeleting(true);
    try {
      await deletar(`/produtos/${id}`, authHeader(token));

      if (onDelete) {
        onDelete();
      } else {
        navigate("/produtos");
      }
    } catch (e: any) {
      if (e.toString().includes("401")) {
        handleLogout();
      } else {
        alert("Erro ao deletar produto!");
      }
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="container mx-auto max-w-xl my-6">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-2">Confirmar exclusão</h2>
        <p>
          Você tem certeza que deseja excluir o produto{" "}
          <strong>{produto?.nome_produto}</strong>?
        </p>
        <div className="mt-4 flex gap-2">
          <Botao variant="vermelho" onClick={confirmar} disabled={isDeleting}>
            {isDeleting ? "Excluindo..." : "Sim"}
          </Botao>
          <Botao
            onClick={() => (onDelete ? onDelete() : navigate("/produtos"))}
            variant="cinza"
            disabled={isDeleting}
          >
            Não
          </Botao>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
