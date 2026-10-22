// Callback hell
console.log("Started");
setTimeout(function timer1() {
  console.log("This is cool - 1");
  setTimeout(function timer2() {
    console.log("This is cool - 2");
    setTimeout(function timer3() {
      console.log("This is cool - 3");
      setTimeout(function timer4() {
        console.log("This is cool - 4"); // 8s
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000); // waits
