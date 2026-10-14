const stock1 = "vanilla";
const stock2 = "chocolate";
const stock3 = "butterscotch";
const stock4 = "cotton candy";

// Dot chaining
// var favIceCream = prompt("Tell me your fav ice cream 🍧?").trim();

// var favIceCream = favIceCream.toLowerCase();

var favIceCream = +prompt("Tell me your fav ice cream 🍧?") // "vanilla"
  .trim() // output
  .toLowerCase() //input
  .length.toFixed(4);

// Principles
// DRY - Don't Repeat Yourself
// WET - Write Everything Twice

// Solution 1:
if (favIceCream == stock1) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else if (favIceCream == stock2) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else if (favIceCream == stock3) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else if (favIceCream == stock4) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else {
  console.log(`Sorry, we do not have ${favIceCream} in stock`);
}

// Solution 2:

if (
  favIceCream == stock1 ||
  favIceCream == stock2 ||
  favIceCream == stock3 ||
  favIceCream == stock4
) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else {
  console.log(`Sorry, we do not have ${favIceCream} in stock`);
}

// Solution 3:
if ([stock1, stock2, stock3, stock4].includes(favIceCream)) {
  console.log(`Yes, we have ${favIceCream} in stock`);
} else {
  console.log(`Sorry, we do not have ${favIceCream} in stock`);
}

// Solution 4.1:
[stock1, stock2, stock3, stock4].includes(favIceCream)
  ? console.log(`Yes, we have ${favIceCream} in stock`)
  : console.log(`Sorry, we do not have ${favIceCream} in stock`);

// Solution 4.2:
console.log(
  [stock1, stock2, stock3, stock4].includes(favIceCream)
    ? `Yes, we have ${favIceCream} in stock`
    : `Sorry, we do not have ${favIceCream} in stock`,
);

// Solution 4.3:
console.log(
  ([stock1, stock2, stock3, stock4].includes(favIceCream)
    ? `Yes, we`
    : `Sorry, we do not`) + `have ${favIceCream} in stock`,
);

var result = [stock1, stock2, stock3, stock4].includes(favIceCream)
  ? `Yes, we`
  : `Sorry, we do not`;

// Solution 4.3:
console.log(`${result} have ${favIceCream} in stock`);

// Solution 4.3:
console.log(
  `${
    [stock1, stock2, stock3, stock4].includes(favIceCream)
      ? `Yes, we`
      : `Sorry, we do not`
  } have ${favIceCream} in stock`,
);
