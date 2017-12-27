import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';


// import the root reducer
import rootReducer from './modules/index';

// create an object for the default data
const defaultState = {
  likes: 0,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
