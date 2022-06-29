import React, { useState } from 'react';
import './CounterComponent.css';

function Counter({resetValue}){
  
  const[countValue, setCountValue] = useState(resetValue);
  const handlePlus = () => setCountValue( countValue + 1 );
  const handleSubs = () => setCountValue( countValue - 1 );
  const handleRese = () => setCountValue( resetValue );
  
  return(
  <div className="CounterElement">
    <h3>{countValue}</h3>
    <div className="Buttons">
      <button type="button" onClick={ handlePlus }>+</button>
      <button type="button" onClick={ handleSubs }>-</button>
      <button type="button" onClick={ handleRese }>Rest</button>
    </div>
  </div>
  );
}

export default Counter;
