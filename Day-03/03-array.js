// const animals = ["🐷", "🐮", "🐔", 5];

// Array - Multiple values - one variable
// mix data types - Don't do it
const animals = ["🐷", "🐮", "🐔"]; // 456
animals.push("🐴");

console.log(animals);

// const x = 10;
// x = 12

console.log(animals);
console.log(typeof animals);

console.log(animals[1]);

console.log(animals[-1]); // -ve idx
console.log(animals[10]);

console.log(animals.at(-1)); // support -ve index
console.log(animals.at(1));

animals[2] = "🦁";
console.log(animals);

const flowers = ["💐", "🌷", "🌼", "🌺", "🌹"];

// flowers[1:4]

console.log(flowers.slice(1, 4));
// console.log(flowers.toString())

// array to string -> 💐 | 🌷 | 🌼 | 🌺 | 🌹

console.log(flowers.join(" | "));

const t1 = [100, 200]; // 1 GB
const t2 = [100, 200];
const t3 = t1; // Copy by reference

console.log(t1 == t2); // false
console.log(t1 == t3); // true

const t4 = [...t1, 20];
