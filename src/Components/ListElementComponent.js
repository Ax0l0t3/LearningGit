import React, { useState } from 'react';
import './ListElementComponent.css'

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
      <div className="textInputs">
        <input type="text" placeholder="Type Task" />
        <button type='button' className="AddButton" onClick={ handleAdd }>Add</button>
      </div>
      <div className="Task">
        <p>Tasks To Do000000</p>
        {
          chowElement.map(( id ) =>
          <div className="ListElemento" key={id.toString()}>
            <p className="peragraph"> Task {id} </p>
            <button type='button' className="SbsButton" onClick={ handleSbs }>Sbs</button>
          </div>)
        }
      </div>
		</>
	);
}

export default LstElmnt;