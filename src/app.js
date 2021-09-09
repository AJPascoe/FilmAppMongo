const connection = require("./db/connection");
const { addMovie, listMovies } = require("./utils");
const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    const newMovie = {
      name: process.argv[3],
      actor: process.argv[4],
      like: process.argv[5],
      year: process.argv[6],
    };
    await connection(addMovie, newMovie);
  } else if (command === "list") {
    await connection(listMovies);
  }  else if (command === "update") {
    const updateObj = {
      filter: process.argv[3],
      like: process.argv[4],
    };
    await connection(updateMovie, updateObj);
  } else if (command === "delete") {
    await connection(deleteMovie, { filter: process.argv[3] });
  } else {
    console.log("Incorrect command");
  }









  // } else if (command === "del") {
  //   const delMovie = {
  //     name: process.argv[3]
  //     // actor: process.argv[4],
  //     // like: process.argv[5],
  //     // year: process.argv[6],
  //   };
  //   await connection(delMovie, input[3]);
  // } else if (command === "update") {
  //   const updateMovie = {
  //     name: process.argv[3],
  //     actor: process.argv[4],
  //     like: process.argv[5],
  //     year: process.argv[6],
  //   };
  //   await connection(updateMovie, newMovie);
  // }
};

app();
