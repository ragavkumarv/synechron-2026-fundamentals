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

// Below
