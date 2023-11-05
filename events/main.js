const moviesList = [
    {
        name: "Matrix",
        year: 1999,
        genre: "Sci-fi",
        img: "imgs/matrix.png",
        price: 34.99,
        instock: "In stock",
    },
    {
        name: "Dead Space: Downfall",
        year: 2008,
        genre: "Horror",
        img: "imgs/dsd.png",
        price: 24.99,
        instock: "Preorder",
    },
    {
        name: "Alien",
        year: 1979,
        genre: "Sci-fi",
        img: "imgs/alien.png",
        price: 54.99,
        instock: "Out of Stock",
    }
]

function createMovie(movie) {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-board");

    
    const movieImageElement = document.createElement("img");
    movieImageElement.setAttribute("src", movie.img);

    const movieName = document.createElement("strong");
    movieName.textContent = movie.name;

    const movieYear = document.createElement("p");
    movieYear.textContent = movie.year;

    const movieGenre = document.createElement("p");
    movieGenre.textContent = movie.genre;

    const moviePrice = document.createElement("p");
    moviePrice.textContent = movie.price;

    const movieInStock = document.createElement("p");
    movieInStock.textContent = movie.instock;

    movieContainer.append(movieImageElement, movieName, movieYear, movieGenre, moviePrice, movieInStock);

}