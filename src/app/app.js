import React from 'react';
import './app.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../pages/main/main';
import Week1 from '../pages/week1/week1';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}></Route>
        <Route path="/week1" component={Week1}></Route>
      </Router>
    </div>
  );
}

export default App;
