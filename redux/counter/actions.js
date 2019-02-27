export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const GET_COUNTER = 'GET_COUNTER';

export const incrementCounter = (counter) => {
  return {
    type: INCREMENT_COUNTER,
    counter,
  }
}

export const decrementCounter = (counter) => {
  return {
    type: DECREMENT_COUNTER,
    counter,
  }
}