const apiKey = '34ca798e'; // replace 'yourkey' with your actual API key
let searchButton = document.getElementById('search-button')
let input = document.getElementById('input')

let result = document.getElementById('result')


searchButton.addEventListener('click',function(){
  let val = input.value
  let url = `http://www.omdbapi.com/?apikey=34ca798e&t=${val}`
  // let imageUrl = `http://img.omdbapi.com/?apikey=${apiKey}&`
  fetch(url)
  .then(response =>response.json())
  .then((res) =>
    {const movie = res
    //  const postUrl = `${imageUrl}&i=${movie.imdbID}`

    let content = `
                    <div id="movie-block">
                      <img src='${movie.Poster}'/>
                      <p>Relased in ${movie.Year}</p>
                      <p>IMDB rating : ${movie.imdbRating}</p>
                      <p>Cast: ${movie.Actors}</p>
                      <p>Director : ${movie.Director}</p>
                    <div/>
      
    `
    result.innerHTML = content
    }
    )
})