// resolve, reject -> callback fn

function case1() {
  const drivingTest = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18) {
      resolve("Allowed for Driving test 🚌");
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  console.log(drivingTest);
  console.log(typeof drivingTest);
}

// Promise rejection
function case2() {
  const drivingTest = new Promise((resolve, reject) => {
    let age = 14;
    if (age >= 18) {
      resolve("Allowed for Driving test 🚌");
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  console.log(drivingTest);
  console.log(typeof drivingTest);
}

function case3() {
  // Declaration
  const drivingTest = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18) {
      resolve("Allowed for Driving test 🚌");
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  //  Using

  drivingTest.then((msg) => console.log(msg));
}

// Handle Async code
function case4() {
  // Declaration

  console.log("Test started");

  const drivingTest = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 5000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  console.log(drivingTest);
  //  Using
  //  then waits for resolve to be called
  drivingTest.then((msg) => console.log(msg));
}

// Rejection - Handle
function case5() {
  // Declaration

  console.log("Test started");

  const drivingTest = new Promise((resolve, reject) => {
    let age = 14;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 5000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  console.log(drivingTest);
  //  Using
  //  then waits for resolve to be called
  drivingTest
    .then((msg) => console.log(msg)) // skip
    .catch((x) => console.log(`Oh Nooo: ${x}`));
}

// Dot Chaining
function case6() {
  // Declaration

  console.log("Test started");

  const drivingTest = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 5000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  console.log(drivingTest);
  //  Using
  //  then waits for resolve to be called
  drivingTest
    .then((msg) => msg + " Super 🎉") // What does .then returns - Promise
    .then((y) => console.log("Cool " + y));

  // [1, 2, 3]
  //   .map((n) => n * 2) // []
  //   .map((n) => n * n); //[]
}

// case5();

function case7() {
  // Declaration

  const drivingTest = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 2000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  drivingTest
    .then((msg) => msg + " Super 🎉")
    .then((y) => console.log("Cool " + y))
    .then((y1) => console.log(y1 + " Amazing"));
}

function case8() {
  // Declaration

  const drivingTest = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 2000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  drivingTest
    .then((msg) => msg + " Super 🎉")
    .then((y) => "Cool " + y)
    .then((y1) => console.log(y1 + " Amazing"));
}

case8();

function case9() {
  // Declaration

  const drivingTest = new Promise((resolve, reject) => {
    let age = 10;
    if (age >= 18) {
      setTimeout(() => {
        resolve("Allowed for Driving test 🚌");
      }, 2000);
    } else {
      reject("Try again after some years 👶🍼");
    }
  });

  drivingTest
    .then((msg) => msg + " Super 🎉")
    .then((y) => "Cool " + y)
    .then((y1) => console.log(y1 + " Amazing"))
    .catch((msg) => msg + "  wowwww")
    .then((y) => console.log("Ohhhhh:" + y));
}

// case8();

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake") // Promise
  .then((res) => res.json()) // json -> object
  .then((data) => console.log(data.meals));

// Clue: Array methods - map
// Task 1.1 - Provide the pancake dish names in array
// [ 'Pancakes', 'Blini Pancakes', 'Banana Pancakes', ....]

// Task 1.2 - Print the array with noodles which are Seafood category
// [
//   "Laksa King Prawn Noodles",
//   "Spicy Thai prawn noodles",
//   "Singapore Noodles with Shrimp",
// ];
