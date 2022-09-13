import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducer';

export const store = createStore(combineReducers({
  counter: counterReducer
}));
