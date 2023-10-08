
//q3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let n: string = "ErIc";
console.log(
  `Hello ${n.toLowerCase()}, would you like to learn some Python today?`
);
console.log(
  `Hello ${n.toUpperCase()}, would you like to learn some Python today?`
);

const titleCase = n
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);


