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
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Botao from "../../botao/Botao";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface FormProdutoProps {
  produtoId?: number;
  onSuccess?: () => void;
}

const FormProduto: React.FC<FormProdutoProps> = ({ produtoId, onSuccess }) => {
  const navigate = useNavigate();
  const { id: urlId } = useParams<{ id: string }>();

  const id = produtoId?.toString() || urlId;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaId, setCategoriaId] = useState<number>(0);

  const [produto, setProduto] = useState<Produto>({
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
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function carregarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarProdutoPorId(idParam: string) {
    try {
      await buscar(`/produtos/${idParam}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      // depois de setProduto, garantir que categoriaId seja atualizado a partir do produto retornado
      // como buscar é assíncrono, pegamos a resposta via state - portanto usar setTimeout pequeno
      // ou ajustar buscar para retornar o resultado. Aqui, vamos atualizar usando o produto vindo do state através de useEffect:
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  // quando o produto muda (após buscar), atualiza categoriaId
  useEffect(() => {
    setCategoriaId(Number(produto?.categoria?.id ?? 0));
  }, [produto]);

  useEffect(() => {
    carregarCategorias();
    if (id) buscarProdutoPorId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    } as Produto);
  }

  function onChangeCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const idSelecionado = Number(e.target.value);
    setCategoriaId(idSelecionado);
    const cat = categorias.find((c) => c.id === idSelecionado) || null;
    setProduto({ ...produto, categoria: cat } as Produto);
  }

  async function gerarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...produto,
      categoria: produto.categoria ? { id: produto.categoria.id } : null,
    };

    try {
      if (id) {
        await atualizar("/produtos", payload, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Categoria atualizada com sucesso", "sucesso")
      } else {
        await cadastrar("/produtos", payload, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Categoria cadastrada com sucesso", "sucesso")
      }

      // chama callback de sucesso se existir, caso contrário navega
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/produtos");
      }
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-2xl my-6">
      <form
        onSubmit={gerarProduto}
        className="bg-white shadow rounded p-4 flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold text-center">
          {id ? "Editar produto" : "Novo produto"}
        </h2>

        <input
          name="nome_produto"
          value={produto.nome_produto}
          onChange={atualizarEstado}
          placeholder="Nome do produto"
          className="border rounded p-2"
          required
        />

        <textarea
          name="descricao"
          value={produto.descricao}
          onChange={atualizarEstado}
          placeholder="Descrição"
          className="border rounded p-2"
          required
        />

        <input
          name="preco"
          type="number"
          step="0.01"
          value={produto.preco}
          onChange={atualizarEstado}
          placeholder="Preço"
          className="border rounded p-2"
          required
        />

        <input
          name="foto"
          value={produto.foto}
          onChange={atualizarEstado}
          placeholder="URL da imagem (Foto do produto)"
          className="border rounded p-2"
        />

        <select
          className="border rounded p-2"
          value={categoriaId}
          onChange={onChangeCategoria}
          required
        >
          <option value={0} disabled>
            Selecione uma categoria
          </option>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.tipo}
            </option>
          ))}
        </select>

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
};

export default FormProduto;
