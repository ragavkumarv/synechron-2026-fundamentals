const arr = [100, 200, 300, 500, 10000];
const [t1, ...t2] = arr;
// const [t1, ...t2] =  [100, 200, 300, 500, 10000] ;
console.log(t1, t2);

// numeric separator
const student = {
  name: "murangi 🔥",
  height: 175,
  balance: 50_000,
  address: {
    city: "johannesburg 🏙️",
    province: "gauteng 📍",
  },
  hobbies: ["rugby 🏉", "chess ♟️", "music 🎵"],
};

// const height = s`tudent.height;
// const balance = student.balance;

const { height, balance } = student;
console.log(height, balance);

// Your code

console.log(favHobby); // "chess ♟️"
