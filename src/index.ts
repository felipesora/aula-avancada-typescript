
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { Veiculo } from "./interface/Veiculo";
import { FiltroVeiculos } from "./utils/FiltroVeiculos";
import { RelatorioVeiculos } from "./utils/RelatorioVeiculos";

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
}

const meuCarro2: Carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
}

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
}

const minhaMoto2: Moto = {
    marca: "Honda",
    modelo: "CB 300",
    ano: 2019,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
}

console.log("Carro: ", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto: ", minhaMoto);
console.log(minhaMoto.acelerar());

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gereciadorMotos = new GerenciadorVeiculos<Moto>();

// Adicionando veículos
gerenciadorCarros.adicionar(meuCarro);
gerenciadorCarros.adicionar(meuCarro2);

gereciadorMotos.adicionar(minhaMoto);
gereciadorMotos.adicionar(minhaMoto2);

// Listando veículos
console.log(gerenciadorCarros.listarVeiculos());
console.log(gereciadorMotos.listarVeiculos());


// Removendo veíclos
gereciadorMotos.remover(minhaMoto2);
console.log("Lista de Motos após a remoção:");
console.log(gereciadorMotos.listarVeiculos());

// Estoque
// Adicionando veículos ao estoque
const estoque = new EstoqueVeiculos();
estoque.adicionarEstoque("Corolla", 5);
estoque.adicionarEstoque("Civic", 3);
estoque.adicionarEstoque("Corolla", 2); 

// Consultando o estoque
estoque.consultarEstoque("Corolla"); 
estoque.consultarEstoque("Civic"); 
estoque.consultarEstoque("HB20");

// Removendo veículos do estoque
estoque.removerEstoque("Civic", 2);
estoque.consultarEstoque("Civic"); 

estoque.removerEstoque("Civic", 1);
estoque.consultarEstoque("Civic");

// Filtro Veículos
const veiculos: Veiculo[] = [
    { marca: "Toyota", modelo: "Corolla", ano: 2022 , acelerar: () => "O carro está acelerando!"},
    { marca: "Ford", modelo: "Ka", ano: 2020, acelerar: () => "O carro está acelerando!"},
    { marca: "Honda", modelo: "Civic", ano: 2022, acelerar: () => "O carro está acelerando!" },
    { marca: "Honda", modelo: "Fit", ano: 2019, acelerar: () => "O carro está acelerando!" },
    { marca: "Toyota", modelo: "Hilux", ano: 2021, acelerar: () => "O carro está acelerando!" },
    { marca: "Ford", modelo: "Fiesta", ano: 2018, acelerar: () => "O carro está acelerando!" }
];

const filtroVeiculos = new FiltroVeiculos;

console.log("Veículos do ano 2022:", filtroVeiculos.filtrarPorAno(veiculos, 2022));
console.log("Veículos da marca Honda:", filtroVeiculos.filtrarPorMarca(veiculos, "Honda"));
console.log("Veículos do modelo Corolla:", filtroVeiculos.filtrarPorModelo(veiculos, "Corolla"));

// Relatório de Veículos
const relatorio = RelatorioVeiculos.gerarRelatorio(veiculos);
console.log("Relatório de Veículos:");
console.log(relatorio);