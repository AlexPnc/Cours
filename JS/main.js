let prenom = "Alexandre";
let nom = "Pancino";
let age = 23;

let phrase = `Bonjour je m'appelle ${prenom} ${nom}, j'ai ${age} ans`;
console.log(phrase);

age++;
let phrase2 = `L'année prochaine j'aurais ${age} ans`;
console.log(phrase2);

let prenomVoisin = "Jean"
let nomVoisin = "Dupont"

let phrase3 = `Mon voisin s'appelle ${prenomVoisin} ${nomVoisin}`;
console.log(phrase3);

let phrase4 = "Mon voisin s'appelle " + prenomVoisin + " " + nomVoisin;
console.log(phrase4);

let moi = {
    prenom: "Alex",
    nom: "Pancino",
    age: 23
}
console.log(moi);

let ageObjet = moi["age"]

console.log(moi.prenom);
console.log(moi.nom);
console.log(ageObjet);

class Person {
    constructor(prenom,nom,age,lunettes) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.lunettes = lunettes
    }
}

let moi2 = new Person ("Alex", "Pancino", 23, false)
console.log(moi2);

let voisins = ["Ludo", "Maxime", "Aurélie"]; console.log(voisins);
let voisin1 = voisins[0]; console.log(voisin1);
let voisin2 = voisins[1]; console.log(voisin2);
let voisin3 = voisins[2]; console.log(voisin3);

voisins.unshift("David");
voisins.push("Quentin");

console.log(voisins);

let feu = "vert"

if (feu == "rouge") {
    alert("Vous ne passerez pas !!")
} else if (feu == "orange") {
    alert ("Ralentis chauffard !")
} else if (feu == "vert") {
    alert ("Vous pouvez passer mais je vous ai à l'oeil !")
} else {
    alert ("Le feu ne marche plus, foncez !")
}

let sexe = prompt("Sexe :");
let age2 = prompt("age");
let reduction = "20%"


if (sexe == "femme" && age2<25) {
    reduction == "20%";
    alert(`réduction de ${reduction}%`)
} else if (sexe == "homme" && age2>50){
    reduction = "25%";
    alert(`réduction de ${reduction}%`)
} else if (sexe == "femme" && age2>26) {
    reduction = "25%";
    alert(`réduction de ${reduction}%`)
} else if (age2<18) {
    reduction = `${age2}`
    alert(`réduction de ${reduction}%`)
}

for (let voisin of voisins) {
    console.log(`dites bonjour à ${voisin}`);
}

