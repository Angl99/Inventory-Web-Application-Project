// example movie list data
const moviesList = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    name: "Matrix",
    year: 1999,
    genre: "Sci-fi",
    price: 34.99,
    inStock: "In Stock",
  },
  {
    name: "Alien",
    year: 1979,
    genre: "Sci-fi",
    img: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    price: 54.99,
    inStock: "Out of Stock",
  },
];

// create movie function to create movie via form input
function createMovie(movie) {
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-board");

  const movieName = document.createElement("strong");
  movieName.textContent = movie.name;

  const movieYear = document.createElement("p");
  movieYear.textContent = movie.year;

  const movieGenre = document.createElement("p");
  movieGenre.textContent = movie.genre;

  const movieImageElement = document.createElement("img");
  movieImageElement.setAttribute("src", movie.img);

  const moviePrice = document.createElement("p");
  moviePrice.textContent = `$${movie.price}`;

  const movieInStock = document.createElement("p");
  let stockOptions = ["In Stock", "Out of Stock"];

  if (movie.inStock === "In Stock") {
    movieInStock.classList.add("in-stock");
    movieInStock.textContent = stockOptions[0];
  } else {
    movieInStock.classList.add("out-of-stock");
    movieInStock.textContent = stockOptions[1];
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    movieContainer.remove();
  });

  movieContainer.append(
    movieImageElement,
    movieName,
    movieYear,
    movieGenre,
    moviePrice,
    movieInStock,
    removeButton
  );

  const mainSection = document.querySelector("main");
  mainSection.prepend(movieContainer);
}

// reset button event listener to reset form
const resetElement = document.querySelector(".reset");
resetElement.addEventListener("click", (event) => {
  event.preventDefault();
  const formElement = document.getElementById("new-movie-form");
  formElement.reset();
});

// submit button event listener to submit form with error handling
const formElement = document.getElementById("new-movie-form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = formElement.movieName.value;
  const year = formElement.movieYear.value;
  const genre = formElement.movieGenre.value;
  const img = formElement.movieImageUrl.value;
  const price = formElement.moviePrice.value;
  const inStock = formElement.movieInStock.value;

  const errorMsg = document.querySelector("#error-box");
  if (
    name === "" ||
    year === 0 ||
    genre === "" ||
    img === "" ||
    price === 0 ||
    inStock === ""
  ) {
    errorMsg.textContent = "*Please fill in all fields*";
  } else {
    formElement.reset();

    createMovie({
      img,
      name,
      year,
      genre,
      price,
      inStock,
    });
  }
});

// in-stock/out-of-stock button event listener
document.addEventListener("click", function (event) {
  const targetElement = event.target;

  if (
    targetElement.classList.contains("in-stock") ||
    targetElement.classList.contains("out-of-stock")
  ) {
    event.preventDefault();

    const stockOptions = ["In Stock", "Out of Stock"];
    if (targetElement.textContent === "In Stock") {
      targetElement.textContent = stockOptions[1];
      targetElement.classList.replace("in-stock", "out-of-stock");
    } else {
      targetElement.textContent = stockOptions[0];
      targetElement.classList.replace("out-of-stock", "in-stock");
    }
  }
});

// for loop to create movies via movieList example data
for (const movie of moviesList) {
  createMovie(movie);
}
