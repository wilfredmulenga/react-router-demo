import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import PlanetList from './PlanetList'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/planetlist' component={PlanetList} />
        <Route path='/planetlist/:planet' component={PlanetList} />
      </Router>
    )
  }
}

export default App;
