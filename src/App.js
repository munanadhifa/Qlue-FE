import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard'
import Map from './Map'




class App extends Component {
  render() {
    return (
      <div className="home">
        <Router>
          <Switch>
          <Route exact path="/" component={Login} />
          <div>
          <Sidebar />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Map" component={Map}/>
            </div>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App