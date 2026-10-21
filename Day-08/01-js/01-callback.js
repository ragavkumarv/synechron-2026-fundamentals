console.log("Started");

// // 1. Timer - Only once
// setTimeout(() => {
//   console.log("Hi, Rithik");
// }, 3000);

// Callback function
// Event completes -> Action taken
// 2. Runner
let msgIvl = setInterval(() => {
  console.log("Hi, Synechron");
}, 2000);

// 3. Stopper - cleared - wait 6s

const noOfTimes = 3;

setTimeout(() => {
  clearInterval(msgIvl);
  console.log("Finished");
}, 2000 * noOfTimes);

// Task:  Hi, Synechron x3 times in gap of 2s

console.log(window); // Global - only in browser
console.log(window.setInterval);
console.log(window.setTimeout);

const dbl = (n) => n * 2;
console.log(dbl);

// HTML -> Dom (HTML parser)
console.log(document);
