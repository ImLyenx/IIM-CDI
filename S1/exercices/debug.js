let users = ["Stéphanie", "Gaia", "Etienne", "Michel", "Roberto", "Julie"];
function countCharacter(value) {
  return value.length;
}
users.forEach((user) => {
  if (countCharacter(user) < 5) {
    console.log("c'est un prénom de moins de 5 lettres.");
  } else {
    console.log("ce n'est pas du tout un prénom long.");
  }
});
