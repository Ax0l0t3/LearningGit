import React from 'react';
import LstElmnt from './Components/ListElementComponent';
import PlusButtn from './Components/plusButtnComponent';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Tasks</h1>
      <div className="inputDiv">
        <input className="inputTask" type="text" placeholder="Type Your Task..." />
        <PlusButtn />
      </div>
      <p>TL4K4® 2022©</p>
    </div>
  );
}

export default App;
