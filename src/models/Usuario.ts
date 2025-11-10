import type Produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // email/login
  foto: string;
  senha: string;
  endereco?: string; // opcional no back
  produto?: Produto[] | null;
}
