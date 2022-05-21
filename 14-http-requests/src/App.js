import { Fragment, useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      let res = await fetch('https://swapi.dev/api/films/');
      if (res.status !== 200) {
        throw ('Something went wrong');
      }
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
    } catch (e) {
      setError('Something went wrong');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
    // If empty array, this will only run if loaded for the first time
    // Should still have dependencies
  }, [fetchMoviesHandler]);

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && !error && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </Fragment>
  );
}

export default App;
