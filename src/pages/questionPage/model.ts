import {createEvent, sample} from 'effector';
import {questionModel} from '../../entities/questions';

export const mount = createEvent();
export const unmount = createEvent();

sample({
  clock: mount,
  target: questionModel.store.getAllQuestions,
});

sample({
  clock: unmount,
  target: questionModel.store.clear,
});
