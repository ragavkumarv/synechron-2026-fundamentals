const petProfile = {
  name: "fluffy",
  age: 3,
  color: "white",
  //   spaces
  "is Friendly": true,
  favoriteToy: "ball",
  owner: {
    name: "Murangi",
    phone: "9830303923",
  },
  hobbies: ["walking 🐕", "fetch 🦴", "dance 🕺"],
};
// Dot notation
console.log(petProfile.color);
console.log(petProfile["color"]);

var key = "favoriteToy";
console.log(petProfile[key]);

console.log(petProfile["favoriteToy"]);

// Bracket notation
console.log(petProfile["is Friendly"]);

// 1. Update owner ->  Vishal
// 2. Add sleeping to hobbies
// 3. "walking 🐕" -> "going for a walk  🐕"

console.log(petProfile);

petProfile.owner.name = "Vishal";
petProfile.owner["name"] = "Vishal";

petProfile["hobbies"][0] = "going for a walk  🐕";

petProfile.hobbies.push("sleeping 🎉");

console.log(petProfile);
console.log("Hi");

// Rest - Collect rest of the elements
// rest = spread
const [t1, ...t2] = [100, 200, 300, 500, 10000];
// const [t1, ...t2, t3] = [100, 200, 300, 500, 10000]; // ❌
console.log(t1, t2);
console.log(typeof t2);

console.log(Math.max(5, 10, 4));

const arr = [100, 200, 300, 10000, 500];
// console.log(Math.max(arr));

// spread
console.log(Math.max(...arr));
