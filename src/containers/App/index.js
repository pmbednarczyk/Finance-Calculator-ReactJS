import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';

const App = props => (
  <div>
    <Header />
    {React.cloneElement(props.children, { ...props })}
  </div>
);


App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
