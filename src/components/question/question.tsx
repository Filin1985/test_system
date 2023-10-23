import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Option from '../option/option';
import {Button} from '../../ui-kit/button/button';

type QuestionsProps = {
  questions: Question[];
};

const Question = ({questions}: QuestionsProps) => {
  const [checkedAnswers, setCheckedAnswers] = useState<string[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    setFilteredQuestions(questions);
  }, [questions]);

  const handleAnswer = () => {
    setAnswered(true);
  };

  const handleCheck = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = evt.target.id;
    if (evt.target.checked) {
      const newAnswers = [...checkedAnswers, newChecked];
      setCheckedAnswers([...new Set(newAnswers)]);
    } else {
      setCheckedAnswers((items) => items.filter((item) => item !== newChecked));
    }
  };

  const handleNextQuestion = (id: string) => {
    setFilteredQuestions((questions) =>
      questions.filter((question) => question.id !== id)
    );
  };

  return (
    <>
      <h3 className={styles.title}>{filteredQuestions[0]?.question}</h3>
      <ul className={styles.answers}>
        {filteredQuestions[0]?.options.map((option, index) => (
          <Option
            key={index}
            handleCheck={handleCheck}
            option={option}
            answerType={
              filteredQuestions[0].answer.includes(option) ? 'right' : 'wrong'
            }
            answered={answered}
          />
        ))}
      </ul>
      <Button
        htmlType='button'
        size='small'
        onClick={handleAnswer}
        disabled={checkedAnswers.length === 0 || answered}
      >
        Ответить
      </Button>
      <Button
        htmlType='button'
        onClick={() => handleNextQuestion(filteredQuestions[0].id)}
      >
        Следующий вопрос
      </Button>
    </>
  );
};

export default Question;
