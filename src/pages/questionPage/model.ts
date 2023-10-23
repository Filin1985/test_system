import {createEvent, sample} from 'effector';
import {questionModel} from '../../entities/questions';

export const mount = createEvent();
export const unmount = createEvent();
export const save = createEvent();

sample({
  clock: mount,
  target: questionModel.store.getAllQuestions,
});

sample({
  clock: unmount,
  target: questionModel.store.clear,
});

sample({
  clock: save,
  target: questionModel.store.insert,
});
