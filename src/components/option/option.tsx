import cn from 'classnames';
import styles from './styles.module.css';

type Option = {
  handleCheck: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  option: string;
  answerType: string;
  answered: boolean;
  checked: boolean;
};

const Option = ({
  handleCheck,
  option,
  answerType,
  answered,
  checked,
}: Option) => {
  return (
    <li
      className={cn(styles.answer, {
        [styles.wrong]: answerType === 'wrong' && answered,
        [styles.right]: answerType === 'right' && answered,
      })}
    >
      <label className={styles.checkbox}>
        <input
          id={option}
          type='checkbox'
          className={styles.checkbox_input}
          onChange={handleCheck}
          disabled={answered}
          checked={checked}
        />
      </label>
      <p className={styles.text}>{option}</p>
    </li>
  );
};

export default Option;
