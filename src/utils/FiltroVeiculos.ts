import { Veiculo } from "../interface/Veiculo";

export class FiltroVeiculos {
    filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
        return veiculos.filter(v => v.ano === ano);
    }

    filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
        return veiculos.filter(v => v.marca.toLowerCase() === marca.toLowerCase());
    }

    filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[] {
        return veiculos.filter(v => v.modelo.toLowerCase() === modelo.toLowerCase());
    }
}