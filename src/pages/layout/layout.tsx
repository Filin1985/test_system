import {useMemo} from 'react';
import {Header} from '../../components/header/header';
import styles from './styles.module.css';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  const content = useMemo(() => {
    return (
      <>
        <section className={styles.content}>
          <Outlet />
        </section>
      </>
    );
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>{content}</main>
    </>
  );
};

export default Layout;
