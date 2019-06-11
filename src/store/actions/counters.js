import { INCREASE_COUNTER, DECREASE_COUNTER } from 'store/actions/types';

export const increaseCountAction = target => ({
  type: INCREASE_COUNTER,
  target,
});

export const decreaseCountAction = target => ({
  type: DECREASE_COUNTER,
  target,
});
