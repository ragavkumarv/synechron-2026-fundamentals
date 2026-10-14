// Case 1:
const movies = ["Crazy rich asians", "Vacation", "Rango", "Titanic"];

// Output
// My favorite movies are Crazy rich asians, Vacation, Rango and Titanic

// Case 2:
const movies1 = ["Rango", "Titanic"];
// My favorite movies are Rango and Titanic

// Case 3:
const movies2 = ["Rango"];
// My favorite movies is Rango

function formatFavMovies1(movies) {
  // Early return

  if (movies.length > 1) {
    return `My favorite movies are ${movies.slice(0, -1).join(", ")} and ${movies.at(-1)}`;
  }

  return `My favorite movies is ${movies.at(-1)}`;
}

function formatFavMovies2(movies) {
  // Early return
  return movies.length > 1
    ? `My favorite movies are ${movies.slice(0, -1).join(", ")} and ${movies.at(-1)}`
    : `My favorite movies is ${movies.at(-1)}`;
}

const formatFavMovies3 = (movies) => {
  // Early return
  return movies.length > 1
    ? `My favorite movies are ${movies.slice(0, -1).join(", ")} and ${movies.at(-1)}`
    : `My favorite movies is ${movies.at(-1)}`;
};

const formatFavMovies = (movies) =>
  movies.length > 1
    ? `My favorite movies are ${movies.slice(0, -1).join(", ")} and ${movies.at(-1)}`
    : `My favorite movies is ${movies.at(-1)}`;

console.log(formatFavMovies(movies));
console.log(formatFavMovies(movies1));
console.log(formatFavMovies(movies2));

function add(n1, n2) {
  return n1 + n2;
}

// Arrow function
const add1 = (n1, n2) => {
  return n1 + n2;
};

// this
const add2 = (n1, n2) => n1 + n2;
console.log(add1(10, 20));
console.log(add2(10, 20));
