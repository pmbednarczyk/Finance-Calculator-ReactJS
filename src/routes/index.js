import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import { Contact } from '../containers/Contact';
import Connect from './helpers/connect';
import { Home } from '../containers/Home';
import Calculator from '../containers/Calculator';

const Application = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Connect}>
        <IndexRoute component={Home} />
        <Route path="/calc" component={Calculator} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  <Application />,
  document.querySelector('#app'),
);

