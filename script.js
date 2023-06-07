

document.addEventListener('DOMContentLoaded', function() {
    // Fetch popular movies from TMDB API
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=452562bed37e5dcadb4116ca25b5641b')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayMovies(data.results);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
  function searchMovies() {
    var searchQuery = document.getElementById('searchInput').value;
  
    // Clear previous results
    document.getElementById('movieList').innerHTML = '';
  
    // Fetch movie data from TMDB API
    fetch('https://api.themoviedb.org/3/search/movie?api_key=452562bed37e5dcadb4116ca25b5641b&query=' + searchQuery)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayMovies(data.results);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayMovies(movies) {
    var movieList = document.getElementById('movieList');
  
    movies.forEach(function(movie) {
      var movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
  
      var movieImage = document.createElement('img');
      movieImage.src = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
      movieCard.appendChild(movieImage);
  
      var movieTitle = document.createElement('h3');
      movieTitle.textContent = movie.title;
      movieCard.appendChild(movieTitle);
  
      movieList.appendChild(movieCard);
    });
  }
  