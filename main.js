// Create variable where we assign the url to the variable.
const url = 'http://localhost:3000/movies'

// Create a function that lists the movies.
function movieList() {
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: movieText,
            body: movieText,
            create_at: moment().format() 
        })
    })
    .then(response => response.json())
    .then(data => renderMovieItem(data))
}




//     .then((response) => response.json())
//     .then((data) => {
//         for (let movie of data) {
//         renderMovieList(movie)
//     }
// })
// }

// Create a function that creates a movie. 
// const createMovie = () 
// {
// const  movieItem = document.createElement("li")
// movieItem.setAttribute("id", movies.id)
// }

// Create addEventListener to form submit button.