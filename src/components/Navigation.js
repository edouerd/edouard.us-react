import React, { Component } from 'react'
import { Link } from 'react-router'
import 'tachyons/css/tachyons.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="center w-90 w-70-ns mw8 ma4 mv5-ns fixed bottom-0 z-999">
          <Link to='/' className="ph2 fl link black navshadow">Édouard U.</Link>
          <Link to='/info' className="ph2 fr link black navshadow">Información</Link>
        {this.props.children}
      </nav>
    );
  }
}

export default Navigation;
