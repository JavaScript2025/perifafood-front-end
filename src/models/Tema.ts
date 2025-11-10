import type Postagem from "./Postagem";

// Tema (front) === Categoria (back)
export default interface Tema {
  id: number;
  tipo: string;                // antes: descricao
  produto?: Postagem[] | null; // antes: postagem?
}
