//Scrivi una funzione che accetti tre argomenti: un array e due numeri 
//(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];

let b = 0;
do {
    b = parseInt(prompt("Inserisci l'ultimo numero che non deve superare: " + array.length));
} while (b > array.length);

let a = 0;
do {
    a = parseInt(prompt("Inserisci il primo numero che non deve superare: " + b));
} while (a >= b);

console.log(a, b);

let newArray = [];

for (let i = a + 1; i < b - 1; i++) {
    newArray.push(array[i]);
}

alert(newArray);