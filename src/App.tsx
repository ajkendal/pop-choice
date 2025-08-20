import styles from './App.module.scss';
import Header from './components/Header';
import Questions from './components/Questions';

function App() {
  return (
    <div className={styles['container']}>
      <Header />
      <Questions />
    </div>
  );
}

export default App;
