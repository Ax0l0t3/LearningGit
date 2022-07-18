import React, { useState } from 'react';
import ToDoList from './ToDoComponent';
import HoldList from './HoldComponent';
import DoneList from './DoneComponent';
import './ListElementComponent.css';

function LstElmnt() {
  
  const [task, setTask] = useState ('');
  const [taskArray, setTaskArray] = useState([]);
  const handleClick = () => {
    setTaskArray( [...taskArray, task] );
    setTask('');
  }
	const handleChange = x => {
    setTask( x.target.value );
  };
  
	return(
		<>
      <div className="textInputs">
        <input type="text" placeholder="Type Task" onChange={ handleChange } value={task}/>
        <button type='button' className="AddButton" onClick={ handleClick }>Add</button>
      </div>
      <div className="Tasks">
        <ToDoList
          listValues = {taskArray}
        />
        <HoldList />
        <DoneList />
      </div>
		</>
	);
}

export default LstElmnt;