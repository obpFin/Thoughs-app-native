import { LOGIN, FETCH_THOUGHTS, ADD_THOUGHT } from '../actions/actionTypes';

import uuid from 'uuid';

const testThoughts = [
  {
    id: uuid(),
    text: 'thought1',
    date: new Date('July 17, 2018 03:24:00')
  },
  {
    id: uuid(),
    text: 'thought2',
    date: new Date('May 23, 2018 12:16:00')
  },
  {
    id: uuid(),
    text: 'thought3',
    date: new Date('Aug 30, 2018 21:04:00')
  },
]

const initialState = {
  thoughts: testThoughts
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THOUGHTS: {
      return {
        ...state
      }
    };
    case ADD_THOUGHT: {
      return {
        ...state,
        thoughts: state.thoughts.concat({
          text: action.text,
          date: action.date
        })
      }
    };
    default:
      return state;
  }
}

export default reducer;