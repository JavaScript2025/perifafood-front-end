import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar, authHeader } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import FormCategoria from "../formcategoria/FormCategoria";
import ModalCategoria from "../modalcategoria/ModalCategoria";

function ListaCategorias() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  async function carregar() {
    setIsLoading(true);
    try {
      await buscar("/categorias", setCategorias, authHeader(token));
    } catch (e: any) {
      if (e.toString().includes("401")) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Categorias</h1>
        {/* Botão que abre o modal */}
        <ModalCategoria />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <SyncLoader />
        </div>
      )}

      {!isLoading && categorias.length === 0 && <p>Nenhuma categoria cadastrada.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default ListaCategorias;
