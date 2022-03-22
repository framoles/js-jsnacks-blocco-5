//Scrivi una funzione che accetti 
//una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const string = prompt("Inserisci la parola");

strReverse = string.split('').reverse().join('');

alert(strReverse);