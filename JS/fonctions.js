let soustraction = (a,b) => a - b;
console.log(soustraction(12,5));



function moyenne (notes) {
    let nbNotes = notes.length;
    somme = 0;
    for (let i = 0; i < nbNotes; i++) {
        somme += notes[i];
        
    }
    return somme / nbNotes
}

console.log(moyenne([10,12,13,8,3]));

// Fonction .map
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr);

// Fonction .filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

