import React, { Component } from 'react';
import 'tachyons/css/tachyons.css';
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
        <section>
          <Navigation />
            {this.props.children}
        </section>
    );
  }
}

export default App;
