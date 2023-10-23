import {useStore} from 'effector-react';
import {useNavigate} from 'react-router-dom';
import {questionModel} from '../../entities/questions';
import {useEffect, useState} from 'react';
import {countStatistic} from '../../utils/utils';
import History from '../../components/history/history';
import styles from './styles.module.css';
import LastStatistic from '../../components/lastStatistic/lastStatistic';
import {Button} from '../../ui-kit/button/button';

export type StoredHistory = {
  attempt: number;
  date: number;
  percent: number;
  storedAnswers: Record<string, string[]>[];
};

const StatisticPage = () => {
  const {storedAnswers, questions} = useStore(
    questionModel.store.$questionsState
  );
  const [storedHistory, setStoredHistory] = useState<StoredHistory[] | null>(
    null
  );

  const results = countStatistic(storedAnswers, questions);
  const navigate = useNavigate();

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('results')!) || [];
    if (storedAnswers.length > 0) {
      const resultToSave = {
        attempt: history.length + 1,
        date: new Date().toLocaleDateString(),
        percent: results.totalPercent.toFixed(2),
        storedAnswers,
      };
      localStorage.setItem(
        'results',
        JSON.stringify([...history, resultToSave])
      );
    }
    setStoredHistory(JSON.parse(localStorage.getItem('results')!) || []);
  }, []);

  const handleTestAgain = () => {
    navigate('/test');
  };

  if (!storedHistory) {
    return <h1>Загружаем информацию...</h1>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ваша стаститика</h3>
      <div className={styles.results}>
        <History storedHistory={storedHistory} />
        {storedAnswers.length > 0 && <LastStatistic results={results} />}
      </div>

      <Button htmlType='button' type='primary' onClick={handleTestAgain}>
        Пройти еще раз
      </Button>
    </div>
  );
};

export default StatisticPage;
