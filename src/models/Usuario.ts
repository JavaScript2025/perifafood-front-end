import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // email/login
  foto: string;
  senha: string;
  endereco?: string;  // opcional no back
  postagem?: Postagem[] | null;
}
