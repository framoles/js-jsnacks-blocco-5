//Crea 10 oggetti che rappresentano una zucchina. Dividi in due array 
//separati le zucchine che misurano meno o più di 15cm. 
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let zucchine = [
    {
        varieta: "Zucchino nero di Milano",
        peso: 200,
        lunghezza: 10
    },
    {
        varieta: "Zucchino romanesco",
        peso: 150,
        lunghezza: 12
    },
    {
        varieta: "Zucchino ortolano di Faenza",
        peso: 300,
        lunghezza: 7
    },
    {
        varieta: "Zucchina lunga fiorentina",
        peso: 450,
        lunghezza: 14
    },
    {
        varieta: "Zucchino siciliano",
        peso: 650,
        lunghezza: 17
    },
    {
        varieta: "Zucchina striata di Napoli",
        peso: 80,
        lunghezza: 19
    },
    {
        varieta: "Zucchina bianca triestina",
        peso: 420,
        lunghezza: 15
    },
    {
        varieta: "Zucchina rigata pugliese",
        peso: 370,
        lunghezza: 8
    },
    {
        varieta: "Zucchino tondo di Piacenza",
        peso: 225,
        lunghezza: 25
    },
    {
        varieta: "Zucchino tondo di Nizza",
        peso: 530,
        lunghezza: 18
    }
]

let array1 = [];
let array2 = [];

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        array1.push(zucchine[i]);
    }
    else {
        array2.push(zucchine[i]);
    }
}

function somma(zucchina) {
    let somma = 0;
    for (let i = 0; i < zucchina.length; i++) {
        somma += zucchina[i].peso;
    }
    return somma;
}

alert("Le zucchine che hanno una lunghezza minore di 15cm pesano: " + somma(array1) + " grammi");
alert("Le zucchine che hanno una lunghezza maggiore di 15cm pesano: " + somma(array2) + " grammi");