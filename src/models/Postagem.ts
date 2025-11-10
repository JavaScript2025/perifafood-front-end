import type Tema from './Tema';
import type Usuario from './Usuario';

// Postagem (front) === Produto (back)
export default interface Postagem {
  id: number;
  nome_produto: string;   // antes: titulo
  descricao: string;      // antes: texto
  preco: number;
  foto: string;
  categoria: Tema | null; // antes: tema
  usuario: Usuario | null;
}
