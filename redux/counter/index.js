import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      state += 1;
      return state;
    case DECREMENT_COUNTER:
      state -= 1;
      return state;
    default:
      return state;
  }
}