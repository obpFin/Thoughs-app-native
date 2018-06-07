import { createStore, combineReducers, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import thoughtsReducer from './reducers/thoughts';

const rootReducer = combineReducers({
  thoughts: thoughtsReducer
});

const configureStore = () => {
  return createStore(
    rootReducer, devToolsEnhancer()
  );
}

export default configureStore;