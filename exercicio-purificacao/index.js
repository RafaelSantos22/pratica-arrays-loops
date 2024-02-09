let caracteresCorrompidos = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];

function solucao(stringCorrompida) {
    let stringNormal = '';

    for(let string of stringCorrompida) {
        if(!caracteresCorrompidos.includes(string)) {
            stringNormal += string;
        }
    }

    console.log(stringNormal);
}

solucao('*Canis %lupus )familiaris');