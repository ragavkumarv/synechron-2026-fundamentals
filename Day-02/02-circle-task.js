var PI_VALUE = 3.14; // convention

var radius = +prompt("Enter the radius?");
var area = PI_VALUE * radius ** 2;
var perimeter = 2 * PI_VALUE * radius;

// var perimeter =

console.log(typeof radius, radius, radius * 2);

// console.log(Math.cos(90))
console.log(`The Area for the given ${radius}cm radius is ${area}cm²`);
console.log(
  `The Perimeter for the given ${radius}cm radius is ${Math.round(perimeter)}cm`,
);

// Number - toFixed()
console.log(
  `The Perimeter for the given ${radius}cm radius is ${perimeter.toFixed(2)}cm`,
);

// Multi line string
var quotes = `Dream is not that you see in sleep,
dream is something
that does not let you sleep.`;

console.log(quotes);

// """

// """
