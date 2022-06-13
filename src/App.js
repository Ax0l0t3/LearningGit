import React from 'react';
import Counter from './Components/CounterComponent';
import './App.css';

function App() {
  
  return (
    <div className="App">
    <h1>Git Learning App</h1>
    <Counter
      resetValue = { 5 }
    />
    </div>
  );
}

export default App;
