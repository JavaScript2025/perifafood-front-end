import { createContext, type ReactNode, useEffect, useState } from "react";
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
  // Inicializa lendo do localStorage — agora esperamos que o objeto salvo inclua token
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    try {
      const raw = localStorage.getItem("usuario");
      if (raw) {
        const parsed = JSON.parse(raw);
        // garante shape mínimo
        return {
          id: parsed.id ?? 0,
          nome: parsed.nome ?? "",
          usuario: parsed.usuario ?? "",
          senha: "",
          foto: parsed.foto ?? "",
          token: parsed.token ?? localStorage.getItem("token") ?? "",
        } as UsuarioLogin;
      }
    } catch {
      /* ignore parse errors */
    }

    return { id: 0, nome: "", usuario: "", senha: "", foto: "", token: "" };
  });

  const [isLoading, setIsLoading] = useState(false);

  // Sincroniza o usuario com o localStorage sempre que mudar.
  // Se token estiver vazio, remove a chave (logout).
  useEffect(() => {
    if (usuario && usuario.token) {
      // salva objeto completo (incluindo token) para reconstruir o estado após F5
      localStorage.setItem("usuario", JSON.stringify(usuario));
      // também salva token em key separada para compatibilidade
      localStorage.setItem("token", usuario.token);
    } else {
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
    }
  }, [usuario]);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login("/usuarios/logar", userLogin, (dados: any) => {
        const token = dados.token ?? "";

        const novoUsuario: UsuarioLogin = {
          id: dados.id ?? 0,
          nome: dados.nome ?? "",
          usuario: dados.usuario ?? userLogin.usuario,
          senha: "",
          foto: dados.foto ?? "",
          token: token,
        };

        // atualiza estado (useEffect cuidará da persistência no localStorage)
        setUsuario(novoUsuario);

        ToastAlerta("Login realizado com sucesso!", "sucesso");
      });
    } catch {
      ToastAlerta("Dados de login inválidos.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    // limpa estado e localStorage (useEffect também removeria, mas mantemos explícito)
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
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
