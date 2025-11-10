import type Produto from "./Produto";

// Categoria (front) === Categoria (back)
export default interface Categoria {
  id: number;
  tipo: string; // antes: descricao
  produto?: Produto[] | null; // antes: produto?
}
