import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar} from "../../../services/Service";
import Botao from "../../botao/Botao";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface DeletarCategoriaProps {
  categoriaId?: number;
  onDelete?: () => void; // Callback para fechar modal e atualizar lista
}

function DeletarCategoria({ categoriaId, onDelete }: DeletarCategoriaProps = {}) {
  const navigate = useNavigate();
  const { id: urlId } = useParams<{ id: string }>();
  
  const id = categoriaId?.toString() || urlId;

  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    async function carregar() {
      if (!id) return;
      try {
        await buscar(`/categorias/${id}`, setCategoria, {
          headers: {
            Authorization: token,
          }
        });
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
      await deletar(`/categorias/${id}`, {
        headers: {
            Authorization: token,
          }
      });
      
      // Se tem callback (modal), chama ele
      if (onDelete) {
        onDelete();
      } else {
        // Se não tem (página), navega
        navigate("/categorias");
      }
      ToastAlerta("Categoria deletada com sucesso", "sucesso")
    } catch (e: any) {
      if (e.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar categoria!", "erro");
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
          Você tem certeza que deseja excluir a categoria{" "}
          <strong>{categoria?.tipo}</strong>?
        </p>
        <div className="mt-4 flex gap-2">
          <Botao variant="vermelho" onClick={confirmar} disabled={isDeleting}>
            {isDeleting ? "Excluindo..." : "Sim"}
          </Botao>
          <Botao
            onClick={() => onDelete ? onDelete() : navigate("/categorias")}
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

export default DeletarCategoria;