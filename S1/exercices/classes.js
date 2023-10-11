class Pokemon {
  constructor(name, attack, defense, health, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.luck = luck;
  }

  isLucky() {
    return Math.random() < this.luck;
  }

  attackPokemon(enemy) {
    if (this.isLucky()) {
      enemy.health -= this.attack - enemy.defense;
      console.log(
        `${this.name} attaque ${enemy.name} et lui inflige ${
          this.attack - enemy.defense
        } points de dégâts !`
      );
      console.log(`${enemy.name} a ${enemy.health} points de vie restants.\n`);
    } else {
      console.log(
        `${this.name} attaque ${enemy.name} mais rate son attaque !\n`
      );
    }
  }
}

const pokemons = [
  new Pokemon("Pikachu", 50, 30, 100, 0.8),
  new Pokemon("Bulbizarre", 50, 40, 100, 0.6),
];

while (pokemons[0].health > 0 && pokemons[1].health > 0) {
  pokemons[0].attackPokemon(pokemons[1]);
  if (pokemons[1].health <= 0) {
    console.log(`Victoire de ${pokemons[0].name} !`);
    break;
  }
  pokemons[1].attackPokemon(pokemons[0]);
  if (pokemons[0].health <= 0) {
    console.log(`Victoire de ${pokemons[1].name} !`);
    break;
  }
}
