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

const printAvengers = (avengers) => {
  for (const avenger of avengers) {
    console.log(`${avenger} contains ${avenger.length} letters`);
  }
};

// Create arrow function
printAvengers(avengers);

// Task 1.2.1

const heroes = [
  { name: "Spider-Man", powerLevel: 4.5, team: "Avengers" },
  { name: "Star-Lord", powerLevel: 3.9, team: "Guardians" },
  null,
  { name: "Doctor Strange", powerLevel: 4.9, team: "Avengers" },
  { name: "Black Panther", powerLevel: 4.8, team: "Avengers" },
  { name: "Rocket", powerLevel: 4.7, team: "Guardians" },
];

const getHeroes = (heroes) => {
  const heroNames = [];
  for (const hero of heroes) {
    heroNames.push(hero?.name);
  }
  return heroNames;
};

// Output
console.log(getHeroes(heroes));
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

// Only Avengers
// Note: Don't mutate heroes create new array return
// ['Spider-Man', "Name missing", "Black Panther"]

const getAvengers1 = (heroes) => {
  const heroNames = [];
  for (const hero of heroes) {
    if (hero?.team === "Avengers") {
      heroNames.push(hero?.name ?? "Name missing");
    }
  }
  return heroNames;
};

const getAvengers2 = (heroes) => {
  const heroNames = [];
  for (const hero of heroes) {
    const { team, name = "Name missing" } = hero;
    if (team === "Avengers") {
      heroNames.push(name);
    }
  }
  return heroNames;
};

const getAvengers = (heroes) => {
  const heroNames = [];
  for (const { team, name = "Name missing" } of heroes) {
    if (team === "Avengers") {
      heroNames.push(name);
    }
  }
  return heroNames;
};
console.log(getAvengers(heroes2));

console.log(getAvengers(heroes2));
