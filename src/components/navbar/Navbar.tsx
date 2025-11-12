import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full flex justify-center py-4
            			   bg-[#FFFFFF] text-white"
      >
        <div className="container text-black rounded-full bg-[#F2F2F2] mx-auto px-6 py-4 mt-2 flex items-center justify-between">
          <Link to="/home" className="text-2xl font-extrabold text-[#260101] hover:hover:text-[#F27E63] ">
            PerifaFood
          </Link>

          <div className="flex gap-4">
            <Link to="/produtos" className="hover:text-[#F27E63]">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:text-[#F27E63]">
              Categorias
            </Link>
            <Link to="/perfil" className="hover:text-[#F27E63]">
              Perfil
            </Link>
            <Link to="" onClick={logout} className="hover:text-[#F27E63]">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;
