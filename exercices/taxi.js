const playlist = [
  "Anissa",
  "Bande organisée",
  "Bella Ciao",
  "Paint the town red",
  "Baby Shark",
];

class Personnage {
  constructor() {
    this.health = 10;
  }
}

class Trajet {
  constructor() {
    this.feux = 30;
    this.musique = "";
    this.changements = 0;
  }

  passage() {
    console.log(`Feux restants : ${this.feux}`);
    this.feux--;
    this.musique = playlist[Math.floor(Math.random() * playlist.length)];
    console.log(`Musique : ${this.musique}`);
  }
}

const personnage = new Personnage();
const trajet = new Trajet();

while (trajet.feux > 0) {
  trajet.passage();

  if (trajet.musique === "Anissa") {
    personnage.health--;
    trajet.changements++;
    console.log(
      `Santé mentale actuelle : ${personnage.health}, CHANGEMENT DE TAXI !`
    );
  }

  if (personnage.health === 0) {
    console.log("Explosion");
    break;
  }
}

if (trajet.feux === 0) {
  console.log(
    `Arrivée à destination, avec ${trajet.changements} changement.s de taxi.`
  );
}
