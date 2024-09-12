class RecintosZoo {

    static recintos() {
        return [
            { numero: 1, bioma: "savana", total: 10, ocupado: 3 },
            { numero: 2, bioma: "floresta", total: 5, ocupado: 0 },
            { numero: 3, bioma: "savana e rio", total: 7, ocupado: 1 },
            { numero: 4, bioma: "rio", total: 8, ocupado: 0 },
            { numero: 5, bioma: "savana", total: 9, ocupado: 1 },
        ];
    }

    static animais() {
        return {
            LEAO: { tamanho: 3, bioma: "savana" },
            LEOPARDO: { tamanho: 2, bioma: "savana" },
            CROCODILO: { tamanho: 3, bioma: "rio" },
            MACACO: { tamanho: 1, bioma: ["savana", "floresta"] },
            GAZELA: { tamanho: 2, bioma: "savana" },
            HIPOPOTAMO: { tamanho: 4, bioma: ["savana", "rio"] }
        };
    }

    static analisaRecintos(tipoAnimal, quantidade) {
        const animaisInfo = this.animais();
        const recintos = this.recintos();

        if (!animaisInfo[tipoAnimal]) {
            return { erro: "Animal inválido" };
        }

        if (isNaN(quantidade) || quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const animalInfo = animaisInfo[tipoAnimal];
        const recintosViaveis = [];
    }
}

export { RecintosZoo as RecintosZoo }