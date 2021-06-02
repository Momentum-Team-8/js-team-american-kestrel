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
movieItem.id = movieObj.id
movieItem.classList.add()
movieItem.innerText = `${movieObj.title}`
allMovies.appendChild(movieItem)
const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "checked";
checkbox.id = movieObj.id;

// watchedButton.innerHTML="<input type='checkbox' onclick='changeText(watched)' value='checked'/>";
movieItem.insertAdjacentHTML('afterend', 
'<button name="name" value="checked" id="c-box">Watched</button>')
}




// Create addEventListener to form submit button.