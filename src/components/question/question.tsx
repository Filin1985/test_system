import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Option from '../option/option';
import {Button} from '../../ui-kit/button/button';
import Completion from '../completion/completition';
import {useNavigate} from 'react-router-dom';
import {save} from '../../pages/questionPage/model';

type QuestionsProps = {
  questions: Question[];
};

const Question = ({questions}: QuestionsProps) => {
  const [checkedAnswers, setCheckedAnswers] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string[]>[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [answered, setAnswered] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const localQuestions = localStorage.getItem('filteredQuestions');
    if (localQuestions) {
      setFilteredQuestions(JSON.parse(localQuestions));
    } else {
      setFilteredQuestions(questions);
    }
  }, [questions]);

  const handleAnswer = (id: string) => {
    const currentAnswers = [...answers, {[id]: [...checkedAnswers]}];
    setAnswers(currentAnswers);
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
    const leftQuestions = filteredQuestions.filter(
      (question) => question.id !== id
    );
    setFilteredQuestions(leftQuestions);
    localStorage.setItem('filteredQuestions', JSON.stringify(leftQuestions));
    setAnswered(false);
    setCheckedAnswers([]);
    console.log(answers);
    if (filteredQuestions.length === 1) {
      localStorage.removeItem('filteredQuestions');
      save(answers as any);
      navigate('/statistic', {replace: true});
    }
  };

  return (
    <>
      <Completion filteredQuestions={filteredQuestions} />
      <h3 className={styles.title}>{filteredQuestions[0]?.question}</h3>
      <ul className={styles.answers}>
        {filteredQuestions[0]?.options.map((option, index) => (
          <Option
            key={index}
            handleCheck={handleCheck}
            option={option}
            checked={checkedAnswers.includes(option)}
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
        onClick={() => handleAnswer(filteredQuestions[0].id)}
        disabled={checkedAnswers.length === 0 || answered}
      >
        Answer
      </Button>
      <Button
        htmlType='button'
        onClick={() => handleNextQuestion(filteredQuestions[0].id)}
        disabled={!answered}
      >
        {filteredQuestions.length === 1 ? 'Complete the test' : 'Continue'}
      </Button>
    </>
  );
};

export default Question;
