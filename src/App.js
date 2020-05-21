import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App Page</h1>
        <Nav />
        <Route path='/about' component={About}/>
        <Route path='/shop' component={Shop} />
      </div>
    </Router>

  );
}

export default App;
