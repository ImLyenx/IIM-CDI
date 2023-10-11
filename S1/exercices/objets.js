const student = {
  name: "Nicolas",
  favoriteFood: "Salade",
  city: "Paris",
};

let totalChars = 0;
Object.values(student).forEach((value) => {
  totalChars += value.length;
});
console.log(totalChars);

if (totalChars % 2 === 0) {
  console.log("pair");
} else {
  console.log("impair");
}
