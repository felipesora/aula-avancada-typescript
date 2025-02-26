import { Veiculo } from "../interface/Veiculo";

export class RelatorioVeiculos {
    static gerarRelatorio(veiculos: Veiculo[]): string {
        if (veiculos.length === 0) {
            return "Nenhum veículo cadastrado.";
        }

        return veiculos.map((v, index) => 
                `#${index + 1} - ${v.marca} ${v.modelo} (${v.ano})`
            )
            .join("\n");
    }
}