import cn from 'classnames';
import {useStore} from 'effector-react';
import {questionModel} from '../../entities/questions';
import styles from './completion.module.css';
import {useMemo} from 'react';

type CompletionProps = {
  filteredQuestions: Question[];
};

const Completion = ({filteredQuestions}: CompletionProps) => {
  const {questionsLength} = useStore(questionModel.store.$questionsState);

  const percents = 100 - (filteredQuestions.length / questionsLength) * 100;

  const classType = useMemo(() => {
    switch (true) {
      case percents <= 50:
        return 'red';
      case percents >= 51 && percents <= 75:
        return 'yellow';
      case percents > 75:
        return 'green';
      default:
        return '';
    }
  }, [percents]);

  return (
    <p
      className={cn(styles.percent, {
        [styles[classType]]: classType,
      })}
    >
      Вы прошли {percents}%
    </p>
  );
};

export default Completion;
