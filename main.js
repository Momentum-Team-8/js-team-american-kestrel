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

// 1. Create method to post movie item when submit button clicked
form.addEventListener('submit', event => {
    event.preventDefault()
    const movieText = document.getElementById('movie-title').value
    console.log(movieText)
    movieList(movieText)
})

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        for (let movie of data) {
        renderMovieItem(movie)

    }
})


// Create a function that creates a movie. 
function renderMovieItem(movieObj) {
const  movieItem = document.createElement("li")
movieItem.id = movieObj.title
movieItem.classList.add()
movieItem.innerText = `${movieObj.title}`
allMovies.appendChild(movieItem)

// watchedButton.innerHTML="<input type='checkbox' onclick='changeText(watched)' value='checked'/>";
movieItem.insertAdjacentHTML('afterend', `<button name="name" value="checked" id=${movieObj.id}>Watched</button>`)
document.getElementById(`${movieObj.id}`).addEventListener('click', event => {
    console.log("button clicked")
    event.preventDefault()
    fetch(url +  `/${movieObj.id}`,  {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: movieObj.id,
            watched: moment().format() 
        })
    })
    .then(() => document.getElementById(`${movieObj.id}`).innerText = 'Watched On' + movieObj.watched)
      });

}







// Create addEventListener to form submit button.