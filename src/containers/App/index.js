import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, { ...this.props })}
      </div>
    );
  }
}

export default App;
