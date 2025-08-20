import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <img src='/static/images/PopChoice_icon.png' alt='PopChoice Icon' />
      <h1 className={styles['header-text']}>PopChoice</h1>
    </header>
  );
};

export default Header;
