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
