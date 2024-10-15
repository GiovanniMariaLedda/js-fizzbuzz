
//* Traccia
/* 
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano". 
*/

console.log('JS OK');
//#Procedura

// ! Raccolta Dati
//*Stampare numeri da 1 a 100;
//*Stampare Fizz al posto del numero quando multiplo di 3;
//*Stampare Buzz per i multipli di 5;
//*Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz;
// ! Elaborazione

//*Stampare numeri da 1 a 100;
let i

for(i=1;i<=100;i=i+1 ) 
{
console.log(i)
//*Stampare Fizz al posto del numero quando multiplo di 3;
if (i % 3 === 0) {
    console.log(i + " fizz");
}
//*Stampare Buzz per i multipli di 5;
if (i % 5 === 0) {
    console.log(i + " Buzz");
}
//*Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz;
}


// ! Output
