import { fetchMovies } from './ApiCall';
import styles from './Questions.module.scss';
import { useState } from 'react';

const messages = [
  {
    role: 'system',
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given some context with their favorite movie and why, what kind of movie they are in the mood for, a new or classic movie. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Always speak as if you were chatting to a friend.`,
  },
];

const Questions = () => {
  const [favoriteMovie, setFavoriteMovie] = useState('');
  const [mood, setMood] = useState('');
  const [newOrClassic, setNewOrClassic] = useState('');

  const [messageHistory, setMessageHistory] = useState(messages);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const movieString = {
      role: 'user',
      content: `Please recommend a movie. Favorite Movie: ${favoriteMovie}, Mood: ${mood}, New or Classic: ${newOrClassic}`,
    };
    setMessageHistory((prev) => [...prev, movieString]);

    const movies = await fetchMovies(messageHistory);
    setMessageHistory((prev) => [...prev, movies]);

    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div className={styles['loading']}>
          <p>Loading...</p>
        </div>
      ) : (
        <form>
          <div className={styles['split-section']}>
            <label className={styles.label} htmlFor='favoriteMovie'>
              What&apos;s your favorite movie and why?
            </label>
            <input
              type='text'
              id='favoriteMovie'
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
                id='newOrClassic'
                value='new'
                onClick={(e) => (e.preventDefault(), setNewOrClassic('new'))}
              >
                New
              </button>
              <button
                id='newOrClassic'
                value='classic'
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
                id='mood'
                value='fun'
                onClick={(e) => (e.preventDefault(), setMood('fun'))}
              >
                Fun
              </button>
              <button
                id='mood'
                value='serious'
                onClick={(e) => (e.preventDefault(), setMood('serious'))}
              >
                Serious
              </button>
              <button
                id='mood'
                value='inspiring'
                onClick={(e) => (e.preventDefault(), setMood('inspiring'))}
              >
                Inspiring
              </button>
              <button
                id='mood'
                value='scary'
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
      )}
    </>
  );
};

export default Questions;
