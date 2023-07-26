// //* chiedo all'utente un numero
// const firstNumber = parseInt(prompt("Inserisci un numero"));

// //* chiedo all'utente un'altro numero
// const secondNumber = parseInt(prompt("Inserisci un'altro numero"));

// //* genero un numero casuale
// if (firstNumber < secondNumber) {
//   let NumberCompreso =
//     Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + firstNumber;
// }

// console.log(NumberCompreso);

//* chiedo all'utente una parola
const primaParola = prompt("Inserisci una parola");

//* chiedo all'utente un'altra parola
const secondaParola = prompt("Inserisci un'altra parola");

//* se le due parole sono uguali stampo entrambe
if (primaParola.length == secondaParola.length) {
  console.log(primaParola, secondaParola);
}

//* altrimenti se la prima parola è più lunga stampo la prima
else if (primaParola.length > secondaParola.length) {
  console.log(primaParola);
}

//* altrimenti la seconda parola è più lunga stampo la seconda
else {
  console.log(secondaParola);
}
