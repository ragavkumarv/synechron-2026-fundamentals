const fruits = ["🍎", "🍊", "🍌", "🍇"];
// const copyFruits = fruits; // Copy by reference

// * unpacking operator | ... spread
const t1 = [100, 200];
const t2 = [90, ...t1]; // Copy by value

// == -> primitive -> checks value
// == -> non primitive -> checks for reference
console.log(t2);
console.log(t1 == t2); // false

const b1 = ["🍎", "🍊"];
const b2 = ["🍌", "🍇", "🍉"];

const b3 = [...b1, ...b2];
const b4 = [80, ...b1, 10, ...b2];

console.log(b3);
// merge
// ["🍎", "🍊", "🍌", "🍇", "🍉"]
