import React from 'react';
import './app.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../pages/main/main';
import Search from '../pages/week1/week1';
import Like from '../pages/like/like';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/likes" component={Like}></Route>
      </Router>
    </div>
  );
}

export default App;
