import { Restaurante } from './restaurante.model';

export class Prato {
    id: number;
    nome: string;
    restaurante: Restaurante;

    setId(id: number) {
        this.id = id;
    }
    setNome(nome: string) {
        this.nome = nome;
    }
    setRestaurante(l: Restaurante) {
        this.restaurante = l;
    }
}
