import styles from './styles.module.css';

type Result = {
  fullAnswers: number;
  partlyAnswers: number;
  incorrectAnswers: number;
  totalPercent: number;
};

type LastStatisticProps = {
  results: Result;
};

const LastStatistic = ({results}: LastStatisticProps) => {
  return (
    <div>
      <h4 className={styles.title}>Statistics for the current attempt</h4>
      <p className={styles.right}>
        Correct answers:{' '}
        <span className={styles.text}>{results.fullAnswers}</span>
      </p>
      <p className={styles.middle}>
        Partially correct answers:{' '}
        <span className={styles.text}>{results.partlyAnswers}</span>
      </p>
      <p className={styles.error}>
        Wrong answers:{' '}
        <span className={styles.text}>{results.incorrectAnswers}</span>
      </p>
      <p className={styles.percent}>
        Overall percentage of correct meanings of words and phrases:{' '}
        <span className={styles.total}>
          {results.totalPercent.toFixed(2) || 0} %
        </span>
      </p>
    </div>
  );
};

export default LastStatistic;
