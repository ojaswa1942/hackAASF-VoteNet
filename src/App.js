import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import Vote from './Components/Vote/Vote'
import Offline from './Components/_Offline/Offline'; 

class App extends Component {
  render() {
    return (
      <div className="App">
          <Offline />
      		<Switch>
      			<Route path="/" exact component={Homepage} />
      			<Route path="/admin" exact component={Dashboard} />
      			<Route path="/vote" exact component={Vote} />
      		</Switch>
      </div>
    );
  }
}

export default App;
