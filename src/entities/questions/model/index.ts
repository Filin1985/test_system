import {combine, createEffect, createStore, createEvent} from 'effector';
import {getQuestions} from '../../../shared/api';

const $questions = createStore<Question[]>([]);
const $currentQuestion = createStore<Question | null>(null);

const clear = createEvent();

export const getAllQuestions = createEffect(async () => {
  const data = await getQuestions();
  return data;
});

$questions.on(getAllQuestions.doneData, (_, data) => data);
$currentQuestion.on(getAllQuestions.doneData, (_, data) => data[0]);

const $questionsState = combine({
  questions: $questions,
  currentQuestion: $currentQuestion,
});

export const store = {
  $questionsState,
  getAllQuestions,
  clear,
};
