function solucao(notas) {
    let maiorNota = Math.max(...notas);
    let menorNota = Math.min(...notas);

    let total = notas.reduce((a, b) => a + b, 0) - maiorNota - menorNota;
    
    let media = total / (notas.length - 2);
    console.log(media);
}

solucao([100, 100, 100, 20, 50, 30, 14, 100, 100, 100]);