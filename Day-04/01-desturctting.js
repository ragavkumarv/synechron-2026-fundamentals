// numeric separator
// var undefined1 = "Abi";
const student = {
  //   name: "murangi 🔥",
  height: 175,
  balance: 50_000,
  address: {
    // city: "johannesburg 🏙️",
    province: "gauteng 📍",
  },
  hobbies: ["rugby 🏉", "chess ♟️"],
  //   age: null,
  //   height: undefined,
};

const {
  name = "N/A",
  address: { city = "N/A" },
  hobbies: [, , third = "Not found"],
} = student;

console.log(name, city, third);

console.log(student.address.city);

// 1. name - "N/A"
// 2. city - "N/A"
// 3. third hobby - "Not found"

// Default value
// const { height, hobbies, age = 18 } = student;
// console.log(hobbies, age);

console.log(student);

// const { hobbies } = student;
// const [, second] = hobbies;
// console.log(hobbies);
// console.log(second);

// const {
//   hobbies: [first, second, third],
// } = student;

// // console.log(second);
// console.log(first, second, third);
// console.log(student.hobbies);

const student1 = {
  //   name: "murangi 🔥",
  height: 175,
  balance: 50_000,
  address: {
    // city: "johannesburg 🏙️",
    province: "gauteng 📍",
  },
  hobbies: ["rugby 🏉", "chess ♟️"],
  //   age: null,
  //   height: undefined,
};

function getCity({ address: { city = "N/A" }, hobbies }) {
  return city;
}

getCity(student1);
