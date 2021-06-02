// Create variable where we assign the url to the variable.
const url = 'http://localhost:3000/movies'
const form = document.querySelector("#movie-form")
const allMovies = document.querySelector("#movie-list")

// Create a function that lists the movies.
function movieList(movie) {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: movie,
            body: movie,
            create_at: moment().format() 
        })
    })
    .then(response => response.json())
    .then(data => renderMovieItem(data))
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const movieText = document.getElementById('movie-title').value
    console.log(movieText)
    movieList(movieText)
})


//     .then((response) => response.json())
//     .then((data) => {
//         for (let movie of data) {
//         renderMovieList(movie)
//     }
// })
// }

// Create a function that creates a movie. 
function renderMovieItem(movieObj) {
const  movieItem = document.createElement("li")
movieItem.id = movieObj.id
movieItem.classList.add()
movieItem.innerText = `${movieObj.title}`
allMovies.appendChild(movieItem)

console.log(movieItem)
}

// Create addEventListener to form submit button.