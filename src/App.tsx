import styles from './App.module.scss';

import Questions from './components/Questions';

function App() {
  return (
    <div className={styles['container']}>
      <Questions />
    </div>
  );
}

export default App;
