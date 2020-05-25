import React from 'react';
import Nav from './Nav';
import About from './About';
import Albums from './Albums/Albums';
import AlbumDetail from './Albums/albumDetail';
import '../style.css';
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
          <Route path='/albums' exact component={Albums} />
          <Route path='/albums/:id' component={AlbumDetail}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
