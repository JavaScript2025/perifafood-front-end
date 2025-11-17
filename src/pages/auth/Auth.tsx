import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Image as ImageIcon,
  MailIcon,
} from "lucide-react";

import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import type Usuario from "../../models/Usuario";
import Botao from "../../components/botao/Botao";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Auth() {
  const navigate = useNavigate();
  const {
    usuario,
    handleLogin,
    isLoading: loginIsLoading,
  } = useContext(AuthContext);

  const isLogged = !!usuario.token;

  // controla qual lado está ativo: false = login, true = cadastro
  const [isRegister, setIsRegister] = useState(false);

  // ======== ESTADO LOGIN ========
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  // redireciona para /home se já tiver logado
  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstadoLogin(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  // ======== ESTADO CADASTRO ========
  const [cadastroIsLoading, setCadastroIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [showSenhaCadastro, setShowSenhaCadastro] = useState<boolean>(false);
  const [showConfirmCadastro, setShowConfirmCadastro] =
    useState<boolean>(false);

  const [usuarioCadastro, setUsuarioCadastro] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    endereco: "",
  });

  function atualizarEstadoCadastro(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioCadastro({
      ...usuarioCadastro,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      confirmarSenha === usuarioCadastro.senha &&
      usuarioCadastro.senha.length >= 8
    ) {
      setCadastroIsLoading(true);

      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuarioCadastro,
          setUsuarioCadastro
        );
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");

        // após cadastro, volta para o modo login
        setIsRegister(false);
        setConfirmarSenha("");
        setUsuarioCadastro({
          id: 0,
          nome: "",
          usuario: "",
          senha: "",
          foto: "",
          endereco: "",
        });
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário!", "erro");
      } finally {
        setCadastroIsLoading(false);
      }
    } else {
      ToastAlerta(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro.",
        "erro"
      );
      setUsuarioCadastro({ ...usuarioCadastro, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFF5F5] to-[#F3E5F5]">
      {/* BARRA SUPERIOR COM MESMA ESTRUTURA DA NAVBAR */}
      <div className="w-full flex justify-center py-4">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo / Nome – igual à Navbar, mas sem menu */}
          <Link
            to={isLogged ? "/home" : "/"}
            className="flex items-center gap-2 group"
          >
            <div className="w-3 h-3 bg-black rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-2xl font-black text-[#F22738] group-hover:text-black transition-all">
              PerifaFood
            </span>
          </Link>

          {/* Espaço vazio na direita só pra manter alinhamento */}
          <div className="w-24" />
        </div>
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="flex flex-1 items-center justify-center px-4 py-6">
        {/* CARD DE FUNDO COM GRADIENTE */}
        <div className="relative w-full max-w-lg md:max-w-5xl md:h-[540px] bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 overflow-hidden bg-gradient-to-br from-[#F22738] via-[#F2B23A] to-[#F22738] flex items-center justify-center px-4 py-8 md:px-10 md:py-10">
          {/* CONTEÚDO (LOGIN / CADASTRO) CENTRALIZADO DENTRO DO GRADIENTE */}
          <div className="relative flex flex-col md:flex-row w-full">
            {/* -------- LOGIN -------- */}
            <div
              className={`
                w-full md:w-1/2 items-center justify-center px-2 sm:px-4 md:px-6
                transition-all duration-700 ease-in-out
                ${
                  isRegister
                    ? "hidden md:flex md:-translate-x-full md:opacity-0 md:pointer-events-none"
                    : "flex md:flex md:translate-x-0 md:opacity-100"
                }
              `}
            >
              <div className="w-full max-w-sm mx-auto bg-white/60 rounded-2xl px-6 py-7 shadow-md">
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    Entrar
                  </h1>
                  <p className="text-sm text-gray-700">
                    Acesse sua conta para continuar
                  </p>
                </div>

                <form onSubmit={login} className="space-y-4">
                  {/* Usuário */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="Usuário"
                      className="w-full pl-11 pr-4 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioLogin.usuario || ""}
                      onChange={atualizarEstadoLogin}
                      required
                    />
                  </div>

                  {/* Senha */}
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type={showPasswordLogin ? "text" : "password"}
                      id="senha"
                      name="senha"
                      placeholder="Senha"
                      className="w-full pl-11 pr-12 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioLogin.senha || ""}
                      onChange={atualizarEstadoLogin}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {showPasswordLogin ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <Botao type="submit" variant="laranja" className="w-full">
                    {loginIsLoading ? (
                      <ClipLoader color="#fff" size={20} />
                    ) : (
                      <span>Entrar</span>
                    )}
                  </Botao>

                  {/* Link de alternância para cadastro – MOBILE */}
                  <p className="mt-4 text-center text-sm text-gray-700 md:hidden">
                    Ainda não tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegister(true)}
                      className="text-[#F22738] font-semibold hover:underline"
                    >
                      Cadastre-se
                    </button>
                  </p>
                </form>
              </div>
            </div>

            {/* -------- CADASTRO -------- */}
            <div
              className={`
                w-full md:w-1/2 items-center justify-center px-2 sm:px-4 md:px-6
                transition-all duration-700 ease-in-out
                ${
                  isRegister
                    ? "flex md:flex md:translate-x-0 md:opacity-100"
                    : "hidden md:flex md:translate-x-full md:opacity-0 md:pointer-events-none"
                }
              `}
            >
              <div className="w-full max-w-sm mx-auto bg-white/60 rounded-2xl px-6 py-6 shadow-md">
                <div className="text-center mb-4">
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">
                    Cadastrar
                  </h1>
                  <p className="text-sm text-gray-700">
                    Crie sua conta para começar
                  </p>
                </div>

                <form onSubmit={cadastrarNovoUsuario} className="space-y-3">
                  {/* Nome */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome"
                      className="w-full pl-11 pr-4 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioCadastro.nome}
                      onChange={atualizarEstadoCadastro}
                      required
                    />
                  </div>

                  {/* Usuário (e-mail) */}
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type="email"
                      id="usuarioCadastro"
                      name="usuario"
                      placeholder="Email"
                      className="w-full pl-11 pr-4 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioCadastro.usuario}
                      onChange={atualizarEstadoCadastro}
                      required
                    />
                  </div>

                  {/* Foto */}
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type="text"
                      id="foto"
                      name="foto"
                      placeholder="URL da foto (opcional)"
                      className="w-full pl-11 pr-4 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioCadastro.foto}
                      onChange={atualizarEstadoCadastro}
                    />
                  </div>

                  {/* Senha */}
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type={showSenhaCadastro ? "text" : "password"}
                      id="senhaCadastro"
                      name="senha"
                      placeholder="Senha (mín. 8 caracteres)"
                      className="w-full pl-11 pr-12 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={usuarioCadastro.senha}
                      onChange={atualizarEstadoCadastro}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowSenhaCadastro(!showSenhaCadastro)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {showSenhaCadastro ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Confirmar Senha */}
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                    <input
                      type={showConfirmCadastro ? "text" : "password"}
                      id="confirmarSenha"
                      name="confirmarSenha"
                      placeholder="Confirmar senha"
                      className="w-full pl-11 pr-12 py-3 bg-white/40 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all"
                      value={confirmarSenha}
                      onChange={handleConfirmarSenha}
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmCadastro(!showConfirmCadastro)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {showConfirmCadastro ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Ações */}
                  <div className="flex justify-end w-full gap-3 mt-2">
                    <Botao
                      type="submit"
                      variant="laranja"
                      className="flex-1"
                      isLoading={cadastroIsLoading}
                    >
                      {cadastroIsLoading ? (
                        <ClipLoader color="#fff" size={18} />
                      ) : (
                        "Cadastrar"
                      )}
                    </Botao>

                    <Botao
                      type="button"
                      variant="laranja"
                      onClick={() => setIsRegister(false)}
                      className="px-6"
                    >
                      Cancelar
                    </Botao>
                  </div>

                  {/* Link de alternância para login – MOBILE */}
                  <p className="mt-4 text-center text-sm text-gray-700 md:hidden">
                    Já tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={() => setIsRegister(false)}
                      className="text-[#F22738] font-semibold hover:underline"
                    >
                      Fazer login
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* PAINEL LATERAL / LOGO – só em telas md+ */}
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            <div
              className={`
                absolute top-0 left-1/2 h-full w-1/2
                text-white flex flex-col items-center justify-center text-center px-8
                transition-transform duration-700 ease-in-out
                ${isRegister ? "-translate-x-full" : "translate-x-0"}
              `}
            >
              <img
                src="https://i.imgur.com/1W7mmb7.png"
                alt="Logo PerifaFood"
                className="w-3/4 max-w-xs mb-6 drop-shadow-xl"
              />

              {isRegister ? (
                <>
                  <h2 className="text-2xl font-semibold mb-2">
                    Bem-vindo de volta!
                  </h2>
                  <p className="text-sm opacity-90 mb-4">
                    Já faz parte da PerifaFood? Faça login e continue
                    fortalecendo a quebrada.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsRegister(false)}
                    className="pointer-events-auto border border-white/80 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition"
                  >
                    Fazer login
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-2">
                    Chega mais, é tudo nosso!
                  </h2>
                  <p className="text-sm opacity-90 mb-4">
                    Crie sua conta e ajuda a movimentar a economia da quebrada
                    com a PerifaFood.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsRegister(true)}
                    className="pointer-events-auto border border-white/80 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition"
                  >
                    Criar conta
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
