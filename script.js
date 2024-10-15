
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
//*Per i numeri che non sono multipli di 3 e 5 , stampa il numero;
//*Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz al posto del numero;
//*Stampare Fizz al posto del numero quando multiplo di 3;
//*Stampare Fizz al posto del numero quando multiplo di 5;

// ! Elaborazione

//*Stampare numeri da 1 a 100;
let i
for(i=1;i<=100;i=i+1 ) 
{
    //*Per i numeri che non sono multipli di 3 e 5 , stampa il numero;
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
    //*Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz al posto del numero;
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log( " FizzBuzz");
    }

    //*Stampare Fizz al posto del numero quando multiplo di 3;
    else if (i % 3 === 0) {
        console.log( " Fizz");
    }

    //*Stampare Fizz al posto del numero quando multiplo di 5;
    else if (i % 5 === 0) {
        console.log( " Buzz");
    }
}




