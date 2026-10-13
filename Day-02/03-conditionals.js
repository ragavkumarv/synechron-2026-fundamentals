const noOfPersons = +prompt("Tell me how many persons are there?");

if (noOfPersons <= 2) {
  console.log("Lets take 🛵 to the party");
} else if (noOfPersons == 3) {
  console.log("Lets take 🛺 to the party");
} else {
  console.log("Lets take 🚘 to the party");
}
