function solucao(palpite, palavra) {
    let acertos = 0;

    for(let letra of palavra) {
        if(letra === palpite) {
            acertos++;
        }
    }

    console.log(acertos);
}

solucao('a', 'abelha');