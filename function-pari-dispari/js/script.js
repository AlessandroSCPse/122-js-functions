// scrivere una funzione per verificare 
// se un numero è pari o dispari, quindi 
// chiedere un numero all'utente e comunicargli 
// se è pari o dispari

// Chiedere un numero all'utente
// avrò una funzione che mi dice se il numero è pari o dispari
// ora che so se il numero è pari o dispari lo comunico all'utente
const userNumber = parseInt(prompt('Dimmi un numero'));
let userNumberEvenOrOdd = isEvenOrOdd(userNumber);

let userMessage;
if(userNumberEvenOrOdd === 'even') {
    userMessage = 'pari';
} else {
    userMessage = 'dispari';
}

alert(userMessage);

// FUNCTIONS
// Stabilisce se un numero è pari o dispari
// number -> numero intero da valutare (se pari o dispari)
// return: stringa 'even' se il numero è pari, altrimenti 'odd'
function isEvenOrOdd(number) {
    // se il numero è pari il risultato è 'even'
    // altrimenti è 'odd'
    let evenOrOdd;
    
    if(number % 2 === 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }

    return evenOrOdd;
}