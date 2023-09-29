import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
      <div>
      <Header />
      <Feeling />
      <Understanding />
      </div>


    //   <Router>
    //   <Switch>
    //     <Route exact path='/' />
    //     <Route exact path='/feeling' />
    //     <Route exact path='/register' />
    //     <Route exact path='/dashboard' />
    //   </Switch>
    // </Router>
  );
}

export default App;
