function solucao(resultados) {
    let pontos = 0;

    for(let resultado of resultados) {
        if(resultado === 'V') {
            pontos += 3;
        } 
        
        if(resultado === 'E') {
            pontos += 1;
        }

        if(resultado === 'D') {
            pontos += 0;
        }
    }

    console.log(pontos);
}

solucao(['V', 'E', 'V', 'E']);