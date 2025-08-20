import { useEffect, useState } from 'react';
import { fetchTMDBMovies } from './TMDBApiCall';
import styles from './Success.module.scss';

const SuccessPage = (props: any) => {
  const { movieRecommendations } = props;
  const [movieSelection, setMovieSelection] = useState({
    title: '',
    description: '',
    year: '',
    poster: '',
  });

  function extractYear(text: string) {
    const match = text.match(/\b\d{4}\b/);
    return match ? match[0] : null;
  }

  function extractTitle(text: string) {
    const match = text.match(/"([^"]+)"/);
    return match ? match[1] : null;
  }

  useEffect(() => {
    const fetchData = async () => {
      const year = extractYear(movieRecommendations.content);
      const title = extractTitle(movieRecommendations.content);

      const movies = await fetchTMDBMovies({ year, title });

      setMovieSelection({
        title: title ?? '',
        description: movieRecommendations.content,
        year: year ?? '',
        poster: `https://image.tmdb.org/t/p/original${movies.results[0].poster_path}`,
      });
    };
    fetchData();
  }, [movieRecommendations]);

  return (
    <>
      <h1 className={styles['sucess-title']}>{movieSelection.title}</h1>
      <h4 className={styles['success-year']}> ({movieSelection.year})</h4>
      <img
        className={styles['success-poster']}
        src={movieSelection.poster}
        alt={`${movieSelection.title} poster`}
      />
      <p className={styles['success-description']}>
        {movieSelection.description}
      </p>
      <button
        className={styles['success-button']}
        onClick={() => window.location.reload()}
      >
        Go Again
      </button>
    </>
  );
};

export default SuccessPage;
