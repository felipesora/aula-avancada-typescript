
export class GerenciadorVeiculos<T>{
    private veiculos: T[] = [];

    adicionar(veiculo: T):void {
        this.veiculos.push(veiculo);
    }

    remover(veiculo: T): void {
        const index = this.veiculos.indexOf(veiculo);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
        }
    }

    listarVeiculos(): T[] {
        return this.veiculos;
    }
}