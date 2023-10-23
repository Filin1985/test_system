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
      <h4 className={styles.title}>Статистика по текущей попытке</h4>
      <p className={styles.right}>
        Верных ответов:{' '}
        <span className={styles.text}>{results.fullAnswers}</span>
      </p>
      <p className={styles.middle}>
        Частично верных ответов:{' '}
        <span className={styles.text}>{results.partlyAnswers}</span>
      </p>
      <p className={styles.error}>
        Неверных ответов:{' '}
        <span className={styles.text}>{results.incorrectAnswers}</span>
      </p>
      <p className={styles.percent}>
        Общий процент верных значений слов и фраз:{' '}
        <span className={styles.total}>
          {results.totalPercent.toFixed(2) || 0} %
        </span>
      </p>
    </div>
  );
};

export default LastStatistic;
