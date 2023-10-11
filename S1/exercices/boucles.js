let a = 3;

// for (let i = 0; i < a; i++) {
//   console.log("oklm");
// }

while (a < 9) {
  a++;
  if (a === 7) {
    continue;
  }
  if (a === 8) {
    break;
  }
  console.log(a);
}
console.log("boucle brisée au tour " + a + " !");
