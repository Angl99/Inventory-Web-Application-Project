const moviesList = [
    {
        img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        name: "Matrix",
        year: 1999,
        genre: "Sci-fi",
        price: 34.99,
        instock: "In Stock",
    },
    {
        name: "Alien",
        year: 1979,
        genre: "Sci-fi",
        img: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        price: 54.99,
        instock: "Out of Stock",
    }
]

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
    if(movie.instock === "In Stock") {
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

const resetElement = document.querySelector(".reset");
resetElement.addEventListener("click", (event) => {
    event.preventDefault();
    const formElement = document.getElementById("new-movie-form");
    formElement.reset();
})

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
        if (name === "" || 
            year === 0 || 
            genre === "" || 
            img === "" || 
            price === 0 || 
            inStock === "") {
                errorMsg.textContent = "*Please fill in all fields*";
                
            } else {

                formElement.reset();

                createMovie({
                    img,
                    name,
                    year,
                    genre,
                    price,
                    inStock
                });
            }
    })

    // add another event listener for movieInstock for new items
document.addEventListener("DOMContentLoaded", function () {
  const toggleStock = document.querySelector(".in-stock");
  const toggleStock2 = document.querySelector(".out-of-stock");

  toggleStock.addEventListener("click", function (event) {
    event.preventDefault();

    const stockOptions = ["In Stock", "Out of Stock"];
    if (toggleStock.textContent === "In Stock") {
      toggleStock.textContent = stockOptions[1];
      toggleStock.classList.replace("in-stock", "out-of-stock");
    } else {
      toggleStock.textContent = stockOptions[0];
      toggleStock.classList.replace("out-of-stock", "in-stock");
    }
  });

  toggleStock2.addEventListener("click", function (event) {
    event.preventDefault();

    const stockOptions = ["In Stock", "Out of Stock"];
    if (toggleStock2.textContent === "Out of Stock") {
      toggleStock2.textContent = stockOptions[0];
      toggleStock2.classList.replace("out-of-stock", "in-stock");
    } else {
      toggleStock2.textContent = stockOptions[1];
      toggleStock2.classList.replace("in-stock", "out-of-stock");
    }
  });
});

for( const movie of moviesList) {
    createMovie(movie);
}
