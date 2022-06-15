import React from 'react';
import Counter from './Components/CounterComponent';
import LstElmnt from '/Components/ListElementComponent';
import './App.css';

function App() {
  
  return (
    <div className="App">
    <h1>Git Learning App</h1>
    <Counter
      resetValue = { 5 }
    />
	  <LstElmnt />
    </div>
  );
}

export default App;
