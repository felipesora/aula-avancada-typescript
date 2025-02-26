import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

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
