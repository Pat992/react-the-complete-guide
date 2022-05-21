import { Fragment, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    let res = await fetch('https://swapi.dev/api/films/');
    let jsonData = await res.json();

    const transformedMovies = jsonData.results.map(jsonItem => {
      return {
        id: jsonItem.episode_id,
        title: jsonItem.title,
        openingText: jsonItem.opening_crawl,
        releaseDate: jsonItem.release_date
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  };

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
