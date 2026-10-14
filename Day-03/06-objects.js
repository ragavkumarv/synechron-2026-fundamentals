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

// Update owner ->  Vishal
// Add sleeping to hobbies

console.log(petProfile);
