import { fetchMovies } from './ApiCall';
import styles from './Questions.module.scss';
import { useState } from 'react';
import SuccessPage from './Success';
import Header from './Header';

import { LoadingIcon } from '../assets/icons';

const messages = [
  {
    role: 'system',
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given some context with their favorite movie and why, what kind of movie they are in the mood for, and a new or classic movie. Please return the name of the movie, a brief description, and the release year. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Always speak as if you were chatting to a friend. no longer than 25 words please.`,
  },
];

const Questions = () => {
  const [favoriteMovie, setFavoriteMovie] = useState('');
  const [mood, setMood] = useState('');
  const [newOrClassic, setNewOrClassic] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movieRecommendations, setMovieRecommendations] = useState({});

  const handleClick = async () => {
    setIsLoading(true);
    const movieString = `Can you recommend a movie for me, Favorite Movie: ${favoriteMovie}, Mood: ${mood}, New or Classic: ${newOrClassic}?`;

    const requestBody = {
      question: movieString,
      chatMessages: messages,
    };

    try {
      const movies = await fetchMovies(requestBody);

      setMovieRecommendations(movies);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className={styles['loading']}>
          <Header />
          <LoadingIcon />
        </div>
      ) : isSuccess ? (
        <SuccessPage movieRecommendations={movieRecommendations} />
      ) : (
        <>
          <Header />
          <form>
            <div className={styles['split-section']}>
              <label className={styles.label} htmlFor='favoriteMovie'>
                What&apos;s your favorite movie and why?
              </label>
              <textarea
                id='favoriteMovie'
                className={styles['txt-input']}
                value={favoriteMovie}
                onBlur={(e) => setFavoriteMovie(e.target.value)}
                onChange={(e) => setFavoriteMovie(e.target.value)}
              />
            </div>

            <div className={styles['split-section']}>
              <label className={styles.label} htmlFor='newOrClassic'>
                Are you in the mood for something new or a classic?
              </label>
              <div className={styles['btn-section']}>
                <button
                  className={newOrClassic === 'new' ? styles.active : ''}
                  id='newOrClassic'
                  onClick={(e) => (e.preventDefault(), setNewOrClassic('new'))}
                >
                  New
                </button>
                <button
                  className={newOrClassic === 'classic' ? styles.active : ''}
                  id='newOrClassic'
                  onClick={(e) => (
                    e.preventDefault(), setNewOrClassic('classic')
                  )}
                >
                  Classic
                </button>
              </div>
            </div>

            <div className={styles['split-section']}>
              <label className={styles.label} htmlFor='mood'>
                What are you in the mood for?
              </label>
              <div className={styles['btn-section']}>
                <button
                  className={mood === 'fun' ? styles.active : ''}
                  id='mood'
                  onClick={(e) => (e.preventDefault(), setMood('fun'))}
                >
                  Fun
                </button>
                <button
                  className={mood === 'serious' ? styles.active : ''}
                  id='mood'
                  onClick={(e) => (e.preventDefault(), setMood('serious'))}
                >
                  Serious
                </button>
                <button
                  className={mood === 'inspiring' ? styles.active : ''}
                  id='mood'
                  onClick={(e) => (e.preventDefault(), setMood('inspiring'))}
                >
                  Inspiring
                </button>
                <button
                  className={mood === 'scary' ? styles.active : ''}
                  id='mood'
                  onClick={(e) => (e.preventDefault(), setMood('scary'))}
                >
                  Scary
                </button>
              </div>
            </div>
            <button
              className={styles['submit-button']}
              onClick={(e) => (e.preventDefault(), handleClick())}
            >
              Fetch Movies
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Questions;
