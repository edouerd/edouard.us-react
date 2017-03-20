import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import 'tachyons/css/tachyons.css'
import './index.css'

import App from './components/App'
import Home from './components/Home'
import Info from './components/Info'
import Pgp from './components/Pgp'

ReactDOM.render((
  <div className="center w-90 w-70-ns mw8 mt4 mh4 mv5-ns f6 f3-ns">

    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/info" component={Info}/>
        <Route path="/pgp" component={Pgp}/>
      </Route>
    </Router>

</div>
), document.getElementById('root'))
