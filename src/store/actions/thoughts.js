import { ADD_THOUGHT } from './actionTypes';

export const addThought = (thought) => {
  return {
    type: ADD_THOUGHT,
    creatorName: 'Testi',
    text: thought.text,
  }
}