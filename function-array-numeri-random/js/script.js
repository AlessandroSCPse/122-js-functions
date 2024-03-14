// Scrivere una funzione che restituisce 
// un array di 10 numeri random
// compresi tra 1 e 100
// L'array non dovrà contenere duplicati
const randArray = generateRandomArray(80, 1, 120);
console.log(randArray);

const randArray2 = generateRandomArray(10, 2, 80);
console.log(randArray2);

// Genera un array di arrayLength numeri random
// arrayLength -> numero intero che definisce la lunghezza dell'array tornato
// numMin -> numero intero minimo da generare
// numMax -> numero intero massimo da generare
// return: un array di arrayLength numeri random
function generateRandomArray(arrayLength, numMin, numMax) {
    // Creiamo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random
        const randNumber = getRndInteger(numMin, numMax);
        // se il numero random non esiste nell'array lo pusho
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    
    return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}