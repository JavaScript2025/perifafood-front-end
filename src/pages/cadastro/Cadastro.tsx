import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { User, Mail, Image as ImageIcon, Lock, Eye, EyeOff, MailIcon } from "lucide-react";

import Botao from "../../components/botao/Botao";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [showSenha, setShowSenha] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    endereco: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar usuário!");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <div className="min-h-screen container mx-auto rounded-4xl bg-gradient-to-r from-[#FF9665] to-[#F2F2F2] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Card com 2 colunas */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 overflow-hidden md:gap-x-8">
          
          {/* Coluna Esquerda - Formulário */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Cadastrar</h1>
              <p className="text-sm text-gray-700">Crie sua conta para começar</p>
            </div>

            {/* Formulário */}
            <form onSubmit={cadastrarNovoUsuario} className="space-y-4">
              {/* Nome */}
              <div className="space-y-2">
                <label htmlFor="nome" className="sr-only">Nome</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                    value={usuario.nome}
                    onChange={atualizarEstado}
                    required
                  />
                </div>
              </div>

              {/* Usuário (email) */}
              <div className="space-y-2">
                <label htmlFor="usuario" className="sr-only">Usuário</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                  <input
                    type="email"
                    id="usuario"
                    name="usuario"
                    placeholder="Email"
                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                    value={usuario.usuario}
                    onChange={atualizarEstado}
                    required
                  />
                </div>
              </div>

              {/* Foto */}
              <div className="space-y-2">
                <label htmlFor="foto" className="sr-only">Foto (URL)</label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                  <input
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="URL da foto (opcional)"
                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                    value={usuario.foto}
                    onChange={atualizarEstado}
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <label htmlFor="senha" className="sr-only">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                  <input
                    type={showSenha ? "text" : "password"}
                    id="senha"
                    name="senha"
                    placeholder="Senha (mín. 8 caracteres)"
                    className="w-full pl-11 pr-12 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                    value={usuario.senha}
                    onChange={atualizarEstado}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowSenha(!showSenha)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {showSenha ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div className="space-y-2">
                <label htmlFor="confirmarSenha" className="sr-only">Confirmar Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6663]" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="w-full pl-11 pr-12 py-3 bg-white/10 border border-white/40 rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9665] transition-all backdrop-blur-sm"
                    value={confirmarSenha}
                    onChange={handleConfirmarSenha}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Ações */}
              <div className="flex justify-end w-full gap-3 mt-4">
                <Botao type="submit" variant="laranja" className="flex-1" isLoading={isLoading}>
                  {isLoading ? <ClipLoader color="#fff" size={18} /> : "Cadastrar"}
                </Botao>

                <Botao variant="laranja" onClick={retornar} className="px-6">
                  Cancelar
                </Botao>
              </div>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-700 mt-10">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-[#FF6663] hover:underline font-medium"
              >
                Faça o login aqui!
              </Link>
            </p>
          </div>

          {/* Coluna Direita - Logo / Imagem */}
          <div className="md:w-1/2 hidden md:flex items-center justify-center bg-white/0 backdrop-blur-1xl border-white/30 p-8">
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

export default Cadastro;
