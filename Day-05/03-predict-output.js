const marks = [90, 80, 60];
console.log(
  marks
    .map((x) => x * 2) // [180, 160, 120]
    .join("|") // "180|160|120"
    .repeat(4) //  "180|160|120180|160|120180|160|120180|160|120"
    .split("|") // ["180", "160", "120180" ....]
    .map((x) => +x), // [180, 160, 120180]
);
// Output 1

const arr = [1, 3, 100, 4];
console.log(
  arr
    .toSpliced(2, 3, 4) // [1, 3, 4]
    .toReversed() // [4, 3, 1]
    .slice(3, 5) // []
    .join(" | "), // ""
);
// Output 2
