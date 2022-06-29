import React from 'react';
import LstElmnt from './Components/ListElementComponent';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Git Learning App</h1>
        <LstElmnt
          initValue = { 0 }
        />
    </div>
  );
}

export default App;
