import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Contact } from '../Contact';
import { Menu } from './components/Header';
import { Home } from '../Home';
import { Calculator } from '../Calculator';

document.addEventListener('DOMContentLoaded', () => {
  class App extends React.Component {
    render() {
      return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Menu}>
            <IndexRoute component={Home} />
            <Route path="/calc" component={Calculator} />
            <Route path="/contact" component={Contact} />
          </Route>
        </Router>
      </Provider>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
});
