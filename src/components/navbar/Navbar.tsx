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
    <div className="w-full flex justify-center py-4 bg-gradient-to-r from-[#F22738] to-[#F2B23A] shadow-lg">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <Link
          to={isLogged ? "/home" : "/"}
          className="flex items-center gap-2 group"
        >
          <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
          <span className="text-2xl font-black text-white group-hover:text-[#1A1A1A] transition-all">
            PerifaFood
          </span>
        </Link>

        {/* Menu dinâmico */}
        <div className="flex gap-6 items-center font-semibold">
          {isLogged ? (
            <>
              <Link 
                to="/produtos" 
                className="text-white hover:text-[#1A1A1A] transition-colors duration-300 relative group"
              >
                Produtos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/categorias" 
                className="text-white hover:text-[#1A1A1A] transition-colors duration-300 relative group"
              >
                Categorias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/perfil" 
                className="text-white hover:text-[#1A1A1A] transition-colors duration-300 relative group"
              >
                Perfil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button
                onClick={logout}
                className="text-white hover:text-[#1A1A1A] transition-colors duration-300 relative group"
              >
                Sair
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-[#1A1A1A] transition-colors duration-300 relative group font-semibold"
              >
                Entrar
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/cadastro"
                className="bg-white text-[#F22738] px-6 py-2 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold border border-white/20"
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