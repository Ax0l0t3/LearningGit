import React, { useState } from 'react';

function Counter({resetValue}){
  
  const[countValue, setCountValue] = useState(resetValue);
  const handlePlus = () => setCountValue( countValue + 1 );
  const handleSubs = () => setCountValue( countValue - 1 );
  const handleRese = () => setCountValue( resetValue );
  
  return(
  <>
    <h3>{countValue}</h3>
    <button type="button" onClick={ handlePlus }>+</button>
    <button type="button" onClick={ handleSubs }>-</button>
    <button type="button" onClick={ handleRese }>Rest</button>
  </>
  );
}

export default Counter;
