import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, authHeader } from "../../../services/Service";
import CardProduto from "../cardProduto/CardProduto";
import ModalProduto from "../modalProduto/ModalProduto";

interface ListaProdutosProps {
  showCreateButton?: boolean;
  showTitle?: boolean;
}

function ListaProdutos({
  showCreateButton = true,
  showTitle = true,
}: ListaProdutosProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  }, [token, navigate]);

  async function buscarProdutos() {
    setIsLoading(true);
    try {
      await buscar("/produtos", setProdutos, authHeader(token));
    } catch (error: any) {
      if (error?.response?.status === 403 || error?.response?.status === 401) {
        handleLogout();
      }
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container bg-[#F2F2F2] rounded-xl mx-auto mt-4 px-4 py-6">
      {(showCreateButton || showTitle) && (
        <div className="mb-6 flex items-center justify-between">
          {showTitle ? (
            <h2 className="text-2xl font-bold">Produtos</h2>
          ) : (
            <div />
          )}
          {showCreateButton && <ModalProduto />}
        </div>
      )}

      {isLoading ? (
        <div className="w-full flex justify-center items-center py-8">
          <SyncLoader />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {produtos.map((post) => (
            <CardProduto
              key={post.id}
              produto={post}
              onEdit={buscarProdutos}
              onDelete={buscarProdutos}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaProdutos;
