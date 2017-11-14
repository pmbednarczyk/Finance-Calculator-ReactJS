import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import spendings from './spendings';

const rootReducer = combineReducers({ spendings });

export default rootReducer;
