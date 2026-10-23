// Types of callbacks

// 1. sync - Immediately
// 2. async - Time

// dbl -> callback fn
const dbl = (num) => num * 2;
[1, 2, 3].map(dbl);

[1, 2, 3].map((n) => dbl(n));

// callback function
const printHi = () => {
  console.log("Hi");
};

// 2s over
setTimeout(printHi, 2000);
