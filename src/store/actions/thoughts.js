import { ADD_THOUGHT } from './actionTypes';

export const addThought = (thought) => {
  console.log('action', thought)
  return {
    type: ADD_THOUGHT,
    creatorName: 'Testi',
    text: thought.text,
    thoughtType: thought.type
  }
}