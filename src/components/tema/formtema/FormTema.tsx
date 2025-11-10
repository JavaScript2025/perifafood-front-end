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
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar, authHeader } from "../../../services/Service";

function FormTema() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tema, setTema] = useState<Tema>({ id: 0, tipo: "" });

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
      await buscar(`/categorias/${id}`, setTema, authHeader(token));
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  useEffect(() => {
    if (id) buscarCategoriaPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({ ...tema, [e.target.name]: e.target.value });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        await atualizar("/categorias", tema, setTema, authHeader(token));
      } else {
        await cadastrar("/categorias", tema, setTema, authHeader(token));
      }
      navigate("/temas");
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-xl my-6">
      <form onSubmit={salvar} className="bg-white shadow rounded p-4 flex flex-col gap-3">
        <h2 className="text-xl font-bold">{id ? "Editar categoria" : "Nova categoria"}</h2>
        <input
          name="tipo"
          value={tema.tipo}
          onChange={atualizarEstado}
          placeholder="Nome da categoria"
          className="border rounded p-2"
          required
        />
        <button disabled={isLoading} className="bg-green-600 text-white rounded p-2">
          {isLoading ? <ClipLoader size={18} /> : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
