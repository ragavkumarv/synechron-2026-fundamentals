const sayHello = () => {
  return "Hello, ";
};

console.log(sayHello);
console.log(sayHello());

const sayHello1 = () => {
  return () => {
    console.log("Hello, ❤️");
  };
};

// Solution 1:
const result = sayHello1();
console.log(result());

// Below

// a = b
// Solution 2:
console.log(sayHello1()());

// If function can be treated as value - First class citizen
