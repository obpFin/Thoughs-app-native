import { LOGIN, FETCH_THOUGHTS, ADD_THOUGHT } from '../actions/actionTypes';

const initialState = {
  thoughts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_THOUGHTS: {
      return {
        ...state
      }
    }
  }
}