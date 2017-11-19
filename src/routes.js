import React from 'react';
import {IndexRoute, Route} from 'react-router';

import { Contact } from './containers/Contact/index';
import { Home } from './containers/Home/index';
import { Calculator } from './containers/Calculator/index';


export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="/calc" component={Calculator} />
      <Route path="/contact" component={Contact} />

      { /* Catch all route */ }
      {/* <Route path="*" component={NotFound} status={404} /> */}
    </Route>
  );
};

