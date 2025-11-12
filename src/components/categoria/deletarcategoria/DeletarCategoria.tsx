import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar, authHeader } from "../../../services/Service";
import Botao from "../../botao/Botao";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria | null>(null);
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
        await buscar(`/categorias/${id}`, setCategoria, authHeader(token));
      } catch (e: any) {
        if (e.toString().includes("401")) handleLogout();
      }
    }
    carregar();
  }, [id]);

  async function confirmar() {
    try {
      await deletar(`/categorias/${id}`, authHeader(token));
      navigate("/categorias");
    } catch (e: any) {
      if (e.toString().includes("401")) handleLogout();
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
          <Botao variant="vermelho" onClick={confirmar}>
            Sim
          </Botao>
          <Botao
            onClick={() => navigate("/categorias")}
            variant="cinza"
          >
            Não
          </Botao>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
