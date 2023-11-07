// const moviesList = [
//     {
//         name: "Matrix",
//         year: 1999,
//         genre: "Sci-fi",
//         img: "imgs/matrix.png",
//         price: 34.99,
//         instock: "In stock",
//     },
//     {
//         name: "Dead Space: Downfall",
//         year: 2008,
//         genre: "Horror",
//         img: "imgs/dsd.png",
//         price: 24.99,
//         instock: "Preorder",
//     },
//     {
//         name: "Alien",
//         year: 1979,
//         genre: "Sci-fi",
//         img: "imgs/alien.png",
//         price: 54.99,
//         instock: "Out of Stock",
//     }
// ]

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
    moviePrice.textContent = movie.price;

    const movieInStock = document.createElement("p");
    movieInStock.textContent = movie.instock;

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
  mainSection.append(movieContainer);

}

const formElement = document.getElementById("new-movie-form");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = formElement.movieName.value;
        const year = formElement.movieYear.value;
        const genre = formElement.movieGenre.value;
        const img = formElement.movieImageUrl.value;
        const price = formElement.moviePrice.value;
        const inStock = formElement.movieInStock.value;
        // const errorMsg = document.querySelector("p");

        // if (movieName === "" || movieYear === "" || movieGenre === "" || movieImageUrl === "" || moviePrice === "" || movieInStock === "") {
        //     errorMsg.textContent = "Please fill in all fields";
        // }

        formElement.reset();

        createMovie({
            img,
            name,
            year,
            genre,
            price,
            inStock
        });
    })

// console.log(movieContainer);