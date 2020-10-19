import React from 'react';
import logo from './logo.svg';

import './App.css';
import './assets/css/style.css'

import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
