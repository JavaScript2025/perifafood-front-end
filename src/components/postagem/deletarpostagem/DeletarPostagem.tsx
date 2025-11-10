import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar, deletar, authHeader } from "../../../services/Service";

function DeletarPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [postagem, setPostagem] = useState<Postagem | null>(null);
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
        await buscar(`/produtos/${id}`, setPostagem, authHeader(token));
      } catch (e: any) {
        if (e.toString().includes("401")) handleLogout();
      }
    }
    carregar();
  }, [id]);

  async function confirmar() {
    try {
      await deletar(`/produtos/${id}`, authHeader(token));
      navigate("/postagens");
    } catch (e: any) {
      if (e.toString().includes("401")) handleLogout();
    }
  }

  return (
    <div className="container mx-auto max-w-xl my-6">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-2">Confirmar exclusão</h2>
        <p>Você tem certeza que deseja excluir o produto <strong>{postagem?.nome_produto}</strong>?</p>
        <div className="mt-4 flex gap-2">
          <button onClick={confirmar} className="bg-red-600 text-white rounded px-4 py-2">Sim</button>
          <button onClick={() => navigate("/postagens")} className="bg-gray-300 rounded px-4 py-2">Não</button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
