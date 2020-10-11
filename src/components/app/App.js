import React from 'react';
import StartDate from './StartDate.js';
import EndDate from "./EndDate.js";
import Repeat from "./Repeat.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <StartDate />
      <Repeat />
      <EndDate /> 
    </div>
  );
}

export default App;
