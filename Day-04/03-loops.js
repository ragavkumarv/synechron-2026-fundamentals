// Task 1.1
// Output
// Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

// Create arrow function
printAvengers(avengers);

// Task 1.2.1

const heroes = [
  { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
  { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
  { name: "Doctor Strange", powerLevel: 4.9, team: "Avengers" },
  { name: "Black Panther", powerLevel: 4.8, team: "Avengers" },
  { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
];

// Output
getHeroes(heroes);
// Note: Don't mutate heroes create new array return
// ["Spider-Man", "Star-Lord", "Doctor Strange", "Black Panther", "Rocket"]

// Task 1.2.2

const heroes2 = [
  { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
  { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
  { powerLevel: 4.9, team: "Avengers" },
  { name: "Black Panther", powerLevel: 4.8, team: "Avengers" },
  { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
];

getAvengers(heroes2);
// Only Avengers
// Note: Don't mutate heroes create new array return
// ['Spider-Man', "Name missing", "Black Panther"]
