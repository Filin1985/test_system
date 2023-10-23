import {Link} from 'react-router-dom';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>Do you know English?</header>
      <Link className={styles.link} to='/statistic'>
        Посмотреть статистику
      </Link>
    </nav>
  );
};
