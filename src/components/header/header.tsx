import {Link} from 'react-router-dom';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <header className={styles.header}>¿Tu sabes español?</header>
      <Link className={styles.link} to='/statistic'>
        View statistics
      </Link>
    </nav>
  );
};
