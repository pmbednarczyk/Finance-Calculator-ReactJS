import { combineReducers } from 'redux';
import spendings from './spendings';

const todoApp = combineReducers({
  spendings,
});

export default todoApp
