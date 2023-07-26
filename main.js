//* chiedo all'utente un numero
const firstNumber = parseInt(prompt("Inserisci un numero"));

//* chiedo all'utente un'altro numero
const secondNumber = parseInt(prompt("Inserisci un'altro numero"));

//* genero un numero casuale
let NumberCompreso = Math.floor(Math.random() * secondNumber) + firstNumber;

console.log(NumberCompreso);
