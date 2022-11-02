// chiedi all'utente con prompt se vuole essere pari o dispari e che numero scegliere da uno a 5
// estrai dal programma un numero da 1 a 5
// sommalo con il numero dell'utente
// definisci la vittoria o la sconfitta dell'utente

let squadraUtente = prompt("pari o dispari?");
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));;

let numeroPC = parseInt(Math.ceil(Math.random() * 5));

function risultato(utente, pc) {
    return utente + pc;
}

console.log("hai scelto = " + squadraUtente); 
console.log("numero squadra Utente = " + numeroUtente);
console.log("numero squadra PC = " + numeroPC);
console.log("Il risultato è = " + risultato(numeroUtente, numeroPC));

if (squadraUtente == "pari" && risultato() % 2 == 0) {
    console.log("HAI VINTO");
} else if (squadraUtente == "dispari" && risultato() % 2 != 0) {
    console.log("HAI VINTO");
} else {
    console.log("HAI PERSO");
}






































// let squadraUtente = prompt("Pari o Dispari?");
// let numeroUtente = prompt("scegli un cazzo di numero");
// function numeroPc () {
//     return parseInt(Math.floor(Math.random() * 5) + 1);
// }

// function risultato(num1, num2) {
//     return num1 + num2;
// }

// const risultatoFinale = risultato(numeroUtente, numeroPc());


// if ((squadraUtente != "pari" && squadraUtente != "dispari") && (squadraUtente != "Pari" && squadraUtente != "Dispari"))  {
//     alert("inserisci bene");
// }

// if (numeroUtente < 5) {
//     if ((risultatoFinale % 2 == 0) && (squadraUtente == "pari" || squadraUtente == "Pari")) {
//         alert("grande hai vinto");
//     } else {
//         alert("hai perso");
//     }
// }

// console.log(squadraUtente);
// console.log(numeroUtente);
// console.log(risultatoFinale);
