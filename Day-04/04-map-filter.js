const nums = [10, 5, 15];
console.log(nums.map((num) => num * 2));
const dblNums = nums.map((num) => num * 2);

console.log(dblNums);

// normal function
function dbl(num) {
  return num * 2;
}

const dblNums1 = nums.map(dbl);

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];

const result = avengers.map((avenger) => avenger.length);
console.log(result);

// Array of any -> Array of any

// Imperative -> Declarative
// How do it? -> What to do?
