// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente se vuole pari o dispari
const userEvenOrOdd = prompt('Scegli pari o dispari');
console.log('scelta utente', userEvenOrOdd);
// e gli chiedo un numero tra 1 e 5
const userNumber = parseInt(prompt('Dammi un numero tra 1 e 5'));
console.log('numero utente', userNumber);
// Generare un numero random da 1 a 5 per il computer
const computerNumber = getRndInteger(1, 5);
console.log('numero computer', computerNumber);
// Sommo i 2 numeri
const sum = userNumber + computerNumber;
console.log('somma', sum);
// Stabilisco se la somma è pari o dispari
const sumEvenOrOdd = isNumberEvenOrOdd(sum);
console.log(sumEvenOrOdd);

// Se la scelta dell'utente è uguale al pari/dispari risultante dalla funzione l'utente ha vinto
// altrimenti ha perso
let userMessage;
if(userEvenOrOdd === sumEvenOrOdd) {
    userMessage = 'hai vinto';
} else {
    userMessage = 'hai perso';
}

alert(userMessage);

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che stabilisce se un numero è pari o dispari
// number -> numero intero da valutare
// return: stringa 'pari' se il numero è pari altrimenti 'dispari'
function isNumberEvenOrOdd(number) {
    let evenOrOdd;

    if(number % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }

    return evenOrOdd;
}