import {combine, createEffect, createStore, createEvent} from 'effector';
import {getQuestions} from '../../../shared/api';

const $questions = createStore<Question[]>([]);
const $storedAnswers = createStore<Record<string, string[]>[] | never[]>([]);
const $questionsLength = createStore<number>(0);

const clear = createEvent();
const insert = createEvent();

export const getAllQuestions = createEffect(async () => {
  const data = await getQuestions();
  return data;
});

$storedAnswers.on(insert, (_, answers) => answers);
$questions.on(getAllQuestions.doneData, (_, data) => data);
$questionsLength.on(getAllQuestions.doneData, (_, data) => data.length);

const $questionsState = combine({
  questions: $questions,
  questionsLength: $questionsLength,
  storedAnswers: $storedAnswers,
});

export const store = {
  $questionsState,
  getAllQuestions,
  clear,
  insert,
};
