function solucao(disparos) {
    let contador = 0;
    for(let disparo of disparos) {
        if(disparo >= 70) {
            contador++;
        } 
    }

    contador >= 3 ? console.log(contador) : console.log('ELIMINADO');
}

//solucao([0, 50, 90, 80, 100, 80, 40,]);
solucao([0, 10, 50, 70, 80, 30]);