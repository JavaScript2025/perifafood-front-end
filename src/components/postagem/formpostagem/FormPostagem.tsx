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
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar, authHeader } from "../../../services/Service";

function FormPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Tema[]>([]);
  const [categoriaId, setCategoriaId] = useState<number>(0);

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    nome_produto: "",
    descricao: "",
    preco: 0,
    foto: "",
    categoria: null,
    usuario: null,
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  async function carregarCategorias() {
    try {
      await buscar("/categorias", setCategorias, authHeader(token));
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setPostagem, authHeader(token));
      setCategoriaId(Number(postagem?.categoria?.id ?? 0));
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  useEffect(() => {
    carregarCategorias();
    if (id) buscarProdutoPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
    });
  }

  function onChangeCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idSelecionado = Number(e.target.value);
    setCategoriaId(idSelecionado);
    const cat = categorias.find((c) => c.id === idSelecionado) || null;
    setPostagem({ ...postagem, categoria: cat });
  }

  async function gerarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...postagem,
      categoria: postagem.categoria ? { id: postagem.categoria.id } : null,
    };

    try {
      if (id) {
        await atualizar("/produtos", payload, setPostagem, authHeader(token));
      } else {
        await cadastrar("/produtos", payload, setPostagem, authHeader(token));
      }
      navigate("/postagens");
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-2xl my-6">
      <form onSubmit={gerarProduto} className="bg-white shadow rounded p-4 flex flex-col gap-3">
        <h2 className="text-xl font-bold">{id ? "Editar produto" : "Novo produto"}</h2>

        <input
          name="nome_produto"
          value={postagem.nome_produto}
          onChange={atualizarEstado}
          placeholder="Nome do produto"
          className="border rounded p-2"
          required
        />

        <textarea
          name="descricao"
          value={postagem.descricao}
          onChange={atualizarEstado}
          placeholder="Descrição"
          className="border rounded p-2"
          required
        />

        <input
          name="preco"
          type="number"
          step="0.01"
          value={postagem.preco}
          onChange={atualizarEstado}
          placeholder="Preço"
          className="border rounded p-2"
          required
        />

        <input
          name="foto"
          value={postagem.foto}
          onChange={atualizarEstado}
          placeholder="URL da imagem (opcional)"
          className="border rounded p-2"
        />

        <select className="border rounded p-2" value={categoriaId} onChange={onChangeCategoria} required>
          <option value={0} disabled>Selecione uma categoria</option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>{c.tipo}</option>
          ))}
        </select>

        <button disabled={isLoading} className="bg-green-600 text-white rounded p-2">
          {isLoading ? <ClipLoader size={18} /> : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
