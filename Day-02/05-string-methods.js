var quote = "Do Good, Be Good";

console.log(quote.length); // len(quote)
console.log(quote.toUpperCase());
console.log(quote.toLowerCase());

console.log(quote.toLocaleUpperCase());
console.log(quote.toLocaleLowerCase());

var quote1 = "     Failure is the first step to success     ";

console.log(quote1.trim()); // Both
console.log(quote1.trimStart());
console.log(quote1.trimEnd());

// console.log("abc" * 2)

console.log("abc".repeat(2));
console.log("🎉".repeat(10));

console.log("Running Total");
console.log("30".padStart(10));
console.log("30000".padStart(10));
console.log("7500".padStart(10));

var quote3 = "Failure is the first step to success";

console.log(quote3.includes("first")); // true
console.log(quote3.includes("or")); // false
console.log(quote3.includes("z"));

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

// Task 1.3 Case -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?:     stRawberry
// Sorry, we do not have strawberry in stock
