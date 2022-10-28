//chiedere all'utente di inserire una parola salvandola in una variabile
//analizza la parola con un if verificandola con una condizione
//stampare il messaggio con un alert

// const parolaUtente = prompt("Inserisci una parola e ti dirò se è palindroma");
// let arrPalindroma = [parolaUtente.length];



// for (let i = 0; i < parolaUtente.length; i++) {
//     console.log(parolaUtente[i]);
// }

const parolaUtente = prompt("dammi una parola");
const primaMeta = [];

 for (let i = 0; i < Math.floor(parolaUtente.length / 2); i++) {
    primaMeta.push(parolaUtente[i]);
}

 const secondaMetaRibaltata = [];

 for (let i = parolaUtente.length -1; i >= parolaUtente.length / 2; i--){
    secondaMetaRibaltata.push(parolaUtente[i]);
}
let hoIncontratoLettereDiverse = false;

console.log(primaMeta, secondaMetaRibaltata);


for (let i = 0; i < secondaMetaRibaltata.length; i++) {
    if (primaMeta[i] != secondaMetaRibaltata[i]) {
        hoIncontratoLettereDiverse = true;
    }
}

if (hoIncontratoLettereDiverse == true) {
    alert("La parola non è Palindroma");
} else {
    alert("La parola è Palindroma");
}