import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import AlbumDetail from './albumDetail';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App Page</h1>
        <Nav />
        <Switch>
          <Route path='/' exact component={() => <h1>Home Page</h1>} />
          <Route path='/about' component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:id' component={AlbumDetail}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
