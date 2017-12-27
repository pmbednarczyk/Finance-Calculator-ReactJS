import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import { Contact } from '../Contact';
import { Menu } from './components/Header';
import { Home } from '../Home';
import { Calculator } from '../Calculator';

document.addEventListener('DOMContentLoaded', () => {
  class App extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Menu}>
            <IndexRoute component={Home} />
            <Route path="/calc" component={Calculator} />
            <Route path="/contact" component={Contact} />
          </Route>
        </Router>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
});