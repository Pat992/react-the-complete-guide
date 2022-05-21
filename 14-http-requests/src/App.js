import { Fragment, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = async () => {
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
  };

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
