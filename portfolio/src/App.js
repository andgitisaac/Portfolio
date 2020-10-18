import React from 'react';
import logo from './logo.svg';

import './App.css';
import './assets/css/style.css'

import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
