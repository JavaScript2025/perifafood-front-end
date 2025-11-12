import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const isLogged = usuario.token !== "";

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center py-4 bg-[#FFFFFF] text-white">
      <div className="container text-black rounded-full bg-[#F2F2F2] mx-auto px-6 py-4 mt-2 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link
          to={isLogged ? "/home" : "/"}
          className="text-2xl font-extrabold text-[#260101] hover:text-[#F27E63] transition"
        >
          PerifaFood
        </Link>

        {/* Menu dinâmico */}
        <div className="flex gap-4 items-center font-medium">
          {isLogged ? (
            <>
              <Link to="/produtos" className="hover:text-[#F27E63] transition">
                Produtos
              </Link>
              <Link to="/categorias" className="hover:text-[#F27E63] transition">
                Categorias
              </Link>
              <Link to="/perfil" className="hover:text-[#F27E63] transition">
                Perfil
              </Link>
              <button
                onClick={logout}
                className="hover:text-[#F27E63] transition"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-[#F27E63] transition font-semibold"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="bg-[#F27E63] text-white px-4 py-2 rounded-full hover:brightness-95 transition font-semibold"
              >
                Cadastrar restaurante
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
