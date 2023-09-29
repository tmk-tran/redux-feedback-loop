import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import Header from '../Header/Header';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
