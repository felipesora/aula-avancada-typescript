export class EstoqueVeiculos<T> {
    private estoque: { modelo: string; quantidade: number } [] = [];

    adicionarEstoque(modelo: string, quantidade: number): void {
        const item = this.estoque.find(v => v.modelo === modelo);
        if (item) {
            item.quantidade += quantidade;
        } else {
            this.estoque.push({ modelo, quantidade });
        }
    }

    removerEstoque(modelo: string, quantidade: number): void {
        const item = this.estoque.find(v => v.modelo === modelo);
        if (item) {
            item.quantidade -= quantidade;
            if (item.quantidade <= 0) {
                this.estoque = this.estoque.filter(v => v.modelo !== modelo);

            }
        }
    }

    consultarEstoque(modelo: string): void {
        const item = this.estoque.find(v => v.modelo === modelo);
        if (item) {
            console.log(`Modelo: ${modelo}, Quantidade: ${item.quantidade}`);
        } else {
            console.log(`O modelo ${modelo} não está no estoque.`);
        }
    }
}