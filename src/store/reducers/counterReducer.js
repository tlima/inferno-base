import { INCREASE_COUNTER, DECREASE_COUNTER } from 'store/actions/types';

const counters = ['home', 'one', 'two'];

const initialState = {
  home: 0,
  one: 0,
  two: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      if (counters.includes(action.target)) return Object.assign({}, state)[action.target]++;
      return state;
    case DECREASE_COUNTER:
      if (counters.includes(action.target)) return Object.assign({}, state)[action.target]--;
      return state;
    default:
      return state;
  }
};

export default counterReducer;
