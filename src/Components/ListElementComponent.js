import React, { useState } from 'react';

function LstElmnt({ initValue }){
	
  const [chowElement, setChowElement] = useState([]);
  const [newValue, setNewValue] = useState( initValue );
  
	const handleAdd = () =>{
    setNewValue ( newValue + 1 );
    setChowElement ( [ ...chowElement, newValue ] );
  };
  const handleSbs = () =>{
    setNewValue ( newValue - 1 );
    chowElement.shift();
    setChowElement ( [ ...chowElement ] );  
  };
  
  console.log(chowElement);
  
	return(
		<>
			<button type='button' onClick={ handleAdd }>Add</button>
      <button type='button' onClick={ handleSbs }>Sbs</button>
      {
        chowElement.map(( id ) => <p key={id.toString()} > {id} </p>)
      }
		</>
	);
}

export default LstElmnt;