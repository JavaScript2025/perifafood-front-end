import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

// Produto (front) === Produto (back)
export default interface Produto {
  id: number;
  nome_produto: string; // antes: titulo
  descricao: string; // antes: texto
  preco: number;
  foto: string;
  categoria: Categoria | null; // antes: categoria
  usuario: Usuario | null;
}
