function solucao(precos) {
    let perdaMinima = Infinity;

    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            const perda = precos[i] - precos[j];
            if(perda > 0) {
                if (perda < perdaMinima) {
                    perdaMinima = perda;
                }
            }
        }
    }

    console.log(perdaMinima);
}

solucao([30, 10, 54, 76, 1, 4, 35]);
