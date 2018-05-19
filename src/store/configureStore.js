import { createStore, combineReducers, compose } from 'redux';
import thoughtsReducer from './reducers/thoughts';

const rootReducer = combineReducers({
  thoughts: thoughtsReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}