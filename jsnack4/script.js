//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
//prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = ["a", "b", "c"];
const array2 = ["1", "2", "3"];
let finalArray = [];

for (let i = 0; i < array1.length; i++) {
    finalArray.push(array1[i]);
    finalArray.push(array2[i]);
}

alert(finalArray);