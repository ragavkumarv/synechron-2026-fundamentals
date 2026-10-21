console.log("Started");

// 1. Timer - Only once
setTimeout(() => {
  console.log("Hi, Rithik");
}, 3000);

// Callback function
// Event completes -> Action taken
// 2. Runner
let msgIvl = setInterval(() => {
  console.log("Hi, Synechron");
}, 2000);

// 3. Stopper - cleared
clearInterval(msgIvl);

// Task:  Hi, Synechron x3 times in gap of 2s
