import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar, authHeader } from "../../../services/Service";
import CardTema from "../cardtema/CardTema";

function ListaTemas() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);
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
      await buscar("/categorias", setTemas, authHeader(token));
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
    <div className="container mx-auto my-4">
      {isLoading ? (
        <div className="flex justify-center my-8">
          <SyncLoader />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {temas.map((t) => (
            <CardTema key={t.id} tema={t} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaTemas;
