import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar, authHeader } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";

function ListaProdutos() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  async function buscarProdutos() {
    setIsLoading(true);
    try {
      await buscar(`/produtos`, setProdutos, authHeader(token));
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="container mx-auto my-4">
      {isLoading ? (
        <div className="flex justify-center my-8">
          <SyncLoader />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {produtos.map((post) => (
            <CardProduto key={post.id} produto={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaProdutos;
