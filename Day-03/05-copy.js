const fruits = ["🍎", "🍊", "🍌", "🍇"];
// const copyFruits = fruits; // Copy by reference

// * unpacking operator | ... spread
const t1 = [100, 200];
const t2 = [...t1]; // Copy by value

// == -> primitive -> checks value
// == -> non primitive -> checks for reference
console.log(t2);
console.log(t1 == t2); // false

const b1 = ["🍎", "🍊"];
const b2 = ["🍌", "🍇", "🍉"];

// const b3 = ?

// merge
// ["🍎", "🍊", "🍌", "🍇", "🍉"]
