import cn from 'classnames';
import styles from './styles.module.css';

type Option = {
  handleCheck: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  option: string;
  answerType: string;
  answered: boolean;
};

const Option = ({handleCheck, option, answerType, answered}: Option) => {
  return (
    <li
      className={cn(styles.answer, {
        [styles.wrong]: answerType === 'wrong' && answered,
        [styles.right]: answerType === 'right' && answered,
      })}
    >
      <input
        id={option}
        type='checkbox'
        onChange={handleCheck}
        disabled={answered}
      />
      <p className={styles.text}>{option}</p>
    </li>
  );
};

export default Option;
