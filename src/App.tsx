import styles from './App.module.scss';
import Header from './components/Header';
import Questions from './components/Questions';

function App() {
  return (
    <div className={styles['container']}>
      <Header />
      <Questions />
      <h1>Testing this new function</h1>
    </div>
  );
}

export default App;
