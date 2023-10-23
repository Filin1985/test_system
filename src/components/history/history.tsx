import styles from './styles.module.css';
import {StoredHistory} from '../../pages/statisticPage/statisticPage';

type HistoryProps = {
  storedHistory: StoredHistory[];
};

const History = ({storedHistory}: HistoryProps) => {
  return (
    <div className={styles.history}>
      <h4 className={styles.title}>История попыток</h4>
      <p className={styles.attempts}>Всего попыток: {storedHistory.length}</p>
      {storedHistory.length > 0 && (
        <>
          <ul className={styles.container}>
            {storedHistory.map((item) => (
              <li key={item.attempt}>
                <p className={styles.item}>Попытка № {item.attempt}</p>
                <p className={styles.item}>
                  Дата прохождения{' '}
                  <span className={styles.text}>{item.date}</span>
                </p>
                <p className={styles.item}>
                  Процент верных ответов{' '}
                  <span className={styles.text}>{item.percent} %</span>{' '}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default History;
