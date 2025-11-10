import { createContext, type ReactNode, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login("/usuarios/logar", userLogin, (dados: any) => {
        const token = dados.token ?? "";
        setUsuario({
          id: dados.id ?? 0,
          nome: dados.nome ?? "",
          usuario: dados.usuario ?? userLogin.usuario,
          senha: "",
          foto: dados.foto ?? "",
          token: token,
        });
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify({
          id: dados.id ?? 0,
          nome: dados.nome ?? "",
          usuario: dados.usuario ?? userLogin.usuario,
          foto: dados.foto ?? ""
        }));
        ToastAlerta("Login realizado com sucesso!", "sucesso");
      });
    } catch {
      ToastAlerta("Dados de login inválidos.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
