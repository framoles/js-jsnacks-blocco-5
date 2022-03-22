//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, 
//peso e lunghezza. Calcola quanto pesano tutte le zucchine.

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

let somma = 0;
for (let i = 0; i < zucchine.length; i++) {
    somma += zucchine[i].peso;
}
alert("Tutte le zucchine pesano: " + somma + "grammi");