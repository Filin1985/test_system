import {useEffect} from 'react';
import {mount, unmount} from './model';
import {questionModel} from '../../entities/questions';
import {useStore} from 'effector-react';
import styles from './styles.module.css';
import Question from '../../components/question/question';

const QuestionPage = () => {
  const {questions} = useStore(questionModel.store.$questionsState);

  useEffect(() => {
    mount();

    return () => {
      unmount();
    };
  }, []);

  return (
    <div className={styles.question}>
      <Question questions={questions} />
    </div>
  );
};

export default QuestionPage;
