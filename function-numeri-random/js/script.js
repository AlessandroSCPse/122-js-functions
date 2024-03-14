// generare 10 numeri random attraverso una funzione 
// (copiamola da w3schools) e stamparli a schermo

for(let i = 0; i < 10; i++) {
    const randNumber = getRndInteger(1, 100);
    console.log(randNumber);
}

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
