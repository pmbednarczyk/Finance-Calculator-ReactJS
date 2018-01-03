import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import calculator from './calculator';

const rootReducer = combineReducers({ calculator, routing: routerReducer });

export default rootReducer;
