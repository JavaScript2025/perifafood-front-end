import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import {
  atualizar,
  buscar,
  cadastrar,
  authHeader,
} from "../../../services/Service";
import Botao from "../../botao/Botao";

interface FormCategoriaProps {
  categoriaId?: number;
  onSuccess?: () => void;
}

// Modifique a função para aceitar a prop
function FormCategoria({ categoriaId }: FormCategoriaProps = {}) {
  const navigate = useNavigate();
  const { id: urlId } = useParams<{ id: string }>();

  // Use categoriaId da prop ou da URL
  const id = categoriaId?.toString() || urlId;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: "" });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, authHeader(token));
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  useEffect(() => {
    if (id) buscarCategoriaPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        await atualizar(
          "/categorias",
          categoria,
          setCategoria,
          authHeader(token)
        );
      } else {
        await cadastrar(
          "/categorias",
          categoria,
          setCategoria,
          authHeader(token)
        );
      }

      // ✅ chama a função de sucesso (para fechar a modal e atualizar a lista)
      if (onSuccess) onSuccess();
      else navigate("/categorias");
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-xl my-6">
      <form
        onSubmit={salvar}
        className="bg-white shadow rounded p-4 flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold">
          {id ? "Editar categoria" : "Nova categoria"}
        </h2>
        <input
          name="tipo"
          value={categoria.tipo}
          onChange={atualizarEstado}
          placeholder="Nome da categoria"
          className="border rounded p-2"
          required
        />

        <Botao variant="laranja" disabled={isLoading}>
          {isLoading ? (
            <ClipLoader size={18} />
          ) : id ? (
            "Atualizar"
          ) : (
            "Cadastrar"
          )}
        </Botao>
      </form>
    </div>
  );
}

export default FormCategoria;
