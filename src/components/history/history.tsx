import styles from './styles.module.css';
import {StoredHistory} from '../../pages/statisticPage/statisticPage';

type HistoryProps = {
  storedHistory: StoredHistory[];
};

const History = ({storedHistory}: HistoryProps) => {
  return (
    <div className={styles.history}>
      <h4 className={styles.title}>History of attempts</h4>
      <p className={styles.attempts}>Total attempts: {storedHistory.length}</p>
      {storedHistory.length > 0 && (
        <>
          <ul className={styles.container}>
            {storedHistory.map((item) => (
              <li key={item.attempt}>
                <p className={styles.item}>Attempt № {item.attempt}</p>
                <p className={styles.item}>
                  Pass date <span className={styles.text}>{item.date}</span>
                </p>
                <p className={styles.item}>
                  Percentage of correct answers{' '}
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
