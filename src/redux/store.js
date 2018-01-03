import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { hashHistory } from 'react-router';


// import the root reducer
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
