import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, deletar, authHeader } from "../../../services/Service";
import Botao from "../../botao/Botao";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
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
      try {
        await buscar(`/produtos/${id}`, setProduto, authHeader(token));
      } catch (e: any) {
        if (e.toString().includes("401")) handleLogout();
      }
    }
    carregar();
  }, [id]);

  async function confirmar() {
    try {
      await deletar(`/produtos/${id}`, authHeader(token));
      navigate("/produtos");
    } catch (e: any) {
      if (e.toString().includes("401")) handleLogout();
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
          <Botao variant="vermelho" onClick={confirmar}>
            Sim
          </Botao>
          <Botao
            onClick={() => navigate("/produtos")}
            variant="cinza"
          >
            Não
          </Botao>

        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
