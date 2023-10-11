const caracteristiques = [
  ["un nerd", [0.4, 0.4, 0.2]],
  ["sportif", [0.3, 0.3, 0.4]],
  ["un idiot", [0, 0, 1]],
  ["gros", [0.5, 0.3, 0.2]],
  ["depressif", [0.9, 0, 0.1]],
];

let morts = [];

class Tueur {
  constructor() {
    this.nom = "Jason";
    this.hp = 100;
  }
}

class Survivant {
  constructor(nom, c) {
    this.nom = nom;
    this.type = caracteristiques[c][0];
    this.probaMort = caracteristiques[c][1][0];
    this.probaEsquive = caracteristiques[c][1][1];
    this.probaSacrifice = caracteristiques[c][1][2];
  }
}

const prenoms = [
  "Lucas",
  "Hugo",
  "Enzo",
  "Louis",
  "Raphael",
  "Arthur",
  "Jules",
  "Adam",
  "Antoine",
  "Maxime",
  "Gabriel",
  "Paul",
  "Alexandre",
  "Matteo",
  "Nathan",
  "Théo",
  "Tom",
  "Ethan",
  "Noah",
  "Léo",
];

let survivants = [];
for (let i = 0; i < 5; i++) {
  survivants.push(
    new Survivant(
      prenoms[Math.floor(Math.random() * prenoms.length)],
      Math.floor(Math.random() * caracteristiques.length)
    )
  );
}

survivants.forEach((survivant) => {
  console.log("- " + survivant.nom + " est " + survivant.type);
});

const tueur = new Tueur();

while (tueur.hp > 0 && survivants.length > 0) {
  for (let i = 0; i < survivants.length; i++) {
    const randNumber = Math.random();
    // console.log(survivants[i].nom + " " + randNumber);
    console.log(`Jason attaque ${survivants[i].nom}`);
    if (randNumber > 0 && randNumber < survivants[i].probaMort) {
      console.log("Jason à tué " + survivants[i].nom);
      morts.push(survivants[i].nom);
      survivants.splice(i, 1);
    } else if (
      randNumber > survivants[i].probaMort &&
      randNumber < survivants[i].probaMort + survivants[i].probaEsquive
    ) {
      console.log(
        `${survivants[i].nom} a esquivé et inflige 10 dégats à ${tueur.nom}`
      );
      tueur.hp -= 10;
      console.log(`Il reste ${tueur.hp} hp à Jason`);
      if (tueur.hp <= 0) {
        break;
      }
    } else if (
      randNumber > survivants[i].probaMort + survivants[i].probaEsquive &&
      randNumber < 1
    ) {
      console.log(
        survivants[i].nom + " s'est sacrifié et inflige 15 dégats à Jason"
      );
      tueur.hp -= 15;
      console.log(`Il reste ${tueur.hp} hp à Jason`);
      morts.push(survivants[i].nom);
      survivants.splice(i, 1);
      if (tueur.hp <= 0) {
        break;
      }
    }
  }
  if (survivants.length === 0 && tueur.hp > 0) {
    console.log(`Jason a tué tout le monde et il lui reste ${tueur.hp} hp`);
  } else if (survivants.length > 0 && tueur.hp <= 0) {
    console.log(`Jason est mort mais il a tué ${morts.join(", ")}.`);
  } else if (survivants.length === 0 && tueur.hp <= 0) {
    console.log("Tout le monde est mort");
  }
}
