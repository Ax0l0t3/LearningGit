import React, { useState } from 'react';

function Counter({resetValue}){
  
  const[countValue, setCountValue] = useState(resetValue);
  const handlePlus = () => setCountValue( countValue + 1 );
  const handleSubs = () => setCountValue( countValue - 1 );
  
  return(
  <>
    <h3>{countValue}</h3>
    <button type="button" onClick={ handlePlus }>+</button>
    <button type="button" onClick={ handleSubs }>-</button>
  </>
  );
}

export default Counter;