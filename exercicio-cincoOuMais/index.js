function solucao(precos) {
    let menorPreco = Math.min(...precos);

    let total = precos.reduce((a, b) => a + b);

    if(precos.length >= 5) {
        total -= menorPreco;
    } 
    
    console.log(total);
}

solucao([100, 500, 100, 200, 50]);