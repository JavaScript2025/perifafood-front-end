import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import Botao from "../../components/botao/Botao";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="min-h-screen container mx-auto rounded-4xl bg-gradient-to-r from-[#FF9665] to-[#F2F2F2] flex items-center justify-center p-4 relative overflow-hidden">

      {/* Card com 2 colunas */}
      <div className="w-full max-w-3xl ">
        <div className="flex flex-col md:flex-row bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 overflow-hidden">

          {/* Coluna Esquerda - Formulário */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white/40 backdrop-blur-xl">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Entrar</h1>
              <p className="text-sm text-gray-700">Acesse sua conta para continuar</p>
            </div>

            <form onSubmit={login} className="space-y-4">
              {/* Campo Usuário */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Usuário"
                  className="w-full pl-11 pr-4 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                  value={usuarioLogin.usuario || ""}
                  onChange={atualizarEstado}
                  required
                />
              </div>

              {/* Campo Senha */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="w-full pl-11 pr-12 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                  value={usuarioLogin.senha || ""}
                  onChange={atualizarEstado}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Botão */}
              <Botao type="submit" variant="laranja" className="w-full">
                {isLoading ? <ClipLoader color="#fff" size={20} /> : <span>Entrar</span>}
              </Botao>

              <p className="text-center text-sm text-gray-700 mt-6">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastro" className="text-[#FF6663] hover:underline font-medium">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>

          {/* Coluna Direita - Logo / Imagem */}
          <div className="md:w-1/2 hidden md:flex items-center justify-center bg-white/40 backdrop-blur-2xl border-white/30 pl-10">
            <div className="">
              <img
                src="https://i.imgur.com/1W7mmb7.png"
                alt="Logo PerifaFood"
                className="w-4/5 drop-shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
