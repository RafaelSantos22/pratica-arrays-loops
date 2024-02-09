listaPalavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
];

function solucao(letra, palavras) {
    let perdedor = 0;

    for(let palavra of palavras) {
        if(!palavra.startsWith(letra)) {
            perdedor++;
        }
    }

    console.log(perdedor);
}

solucao('m', listaPalavras);