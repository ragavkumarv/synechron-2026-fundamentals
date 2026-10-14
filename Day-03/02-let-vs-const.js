// let x = "Abinav"; // Declaration - creating x
// // let x = "Vishal"; // Re-Declaration - recreating x - ❌
// x = "Vishal"; // Re-Assignment

// console.log(x);

// const > let > var

// {} -> block
// let & const - block scoped
// var - function scoped

// {
//   let quote1 = "Do good, be good";
//   var quote2 = "Do good, be good";
// }

// // console.log(quote1); // not defined
// console.log(quote2);

// let & const - block scoped
// var - function scoped

function awesome() {
  let quote1 = "Do good, be good";
  var quote2 = "Do good, be good";
}

awesome();
// console.log(quote1);
console.log(quote2);
