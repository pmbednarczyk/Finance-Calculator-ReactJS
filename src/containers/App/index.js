import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>

    );
  }
}


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Router,
//   Route,
//   IndexRoute,
//   hashHistory,
// } from 'react-router';
// import { Contact } from '../Contact';
// import { Menu } from './components/Header';
// import { Home } from '../Home';
// import { Calculator } from '../Calculator';
//
// document.addEventListener('DOMContentLoaded', () => {
//   class App extends React.Component {
//     render() {
//       return (
//           <Router history={hashHistory}>
//             <Route path="/" component={Menu}>
//               <IndexRoute component={Home} />
//               <Route path="/calc" component={Calculator} />
//               <Route path="/contact" component={Contact} />
//             </Route>
//           </Router>
//       );
//     }
//   }
//
//   ReactDOM.render(
//       <App />,
//       document.querySelector('#app'),
//   );
// });
