var x = []; // truthy -> converts into true

// -0, 0, null, undefined, NaN, "" -> falsy
console.log(Boolean(x));

if (x.length) {
  console.log("Super");
} else {
  console.log("Cool");
}

const rubyTeam = {
  //   name: "sharks",
  captain: "Cristino",
  color: "black",
  stats: {
    // win: 4,
    loss: 8,
  },
};

console.log(rubyTeam.name);

// // Error
// console.log(rubyTeam.stats); // undefined
console.log(rubyTeam.stats.win);

// 🛡️ Defensive Code
if (rubyTeam.stats) {
  if (rubyTeam.stats.win) {
    console.log(rubyTeam.stats.win);
  } else {
    console.log("Winning data is missing");
  }
} else {
  console.log("Winning data is missing");
}

if (rubyTeam && rubyTeam.stats && rubyTeam.stats.win) {
  console.log(rubyTeam.stats.win);
} else {
  console.log("Winning data is missing");
}

const rubyTeam1 = {
  //   name: "sharks",
  captain: "Cristino",
  color: "black",
  stats: {
    win: 0,
    loss: 8,
  },
};

// Optional chaining ?. - undefined (guard)
console.log(rubyTeam1?.stats?.win);

//  ?? -> Default values
console.log(rubyTeam1?.stats?.win || "No win data"); //  "No win data" ❌
console.log(rubyTeam1?.stats?.win ?? "No win data"); //  0 ✅

// const money = 50_000;
//  const money = null;
const money = 0; // "No data"
console.log(money || "No data");

// Nullish coalescing - || - 8 falsy, ?? - undefined, null (2 falsy values)
console.log(money ?? "No data");

const dbl = (n) => n * 2;

const dbl1 = (n) => {
  console.log(n);
  return n * 2;
};
