import React, { useState, useEffect } from 'react';
import CardList from './CardListComponent';
import './ListElementComponent.css';

function LstElmnt() {
  
  const [task, setTask] = useState ('');
  const [taskArray, setTaskArray] = useState([]);
  const [toDoList, setToDoList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [holdList, setHoldList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  
	const handleChange = x => {
    setTask( x.target.value );
  };
  
  const handleClick = () => {
    const taskObject = {
      id: `${ task.length }-${ task.slice(0,3) }`,
      value: task,
      progress: 'ToDo'
    };
    setTaskArray( [...taskArray, taskObject] );
    setTask('');
  };
  
  useEffect( () => {
    const toDoArray = taskArray.filter( h => h.progress === 'ToDo');
    const progressArray = taskArray.filter( h => h.progress === 'InProgress');
    const holdArray = taskArray.filter( h => h.progress === 'InHold');
    const doneArray = taskArray.filter( h => h.progress === 'Done');
    setToDoList(toDoArray);
    setProgressList(progressArray);
    setHoldList(holdArray);
    setDoneList(doneArray);
  }, [taskArray]);
  
	return(
		<>
      <div className="textInputs">
        <input type="text" placeholder="Type Task" onChange={ handleChange } value={task}/>
        <button type='button' className="AddButton" onClick={ handleClick }>Add</button>
      </div>
      <div className="Tasks">
        {/*To Do List*/}
        <CardList
          className="todoClassName"
          valuesList = {taskArray}
          setValuesList = {setTaskArray}
          optionsList = { toDoList }
          headerTitle = "To Do Tasks"
        />
        {/*In Progress List*/}
        <CardList
          className="inprogClassName"
          valuesList = {taskArray}
          setValuesList = {setTaskArray}
          optionsList = { progressList }
          headerTitle = "In Progress"
        />
        {/*In Hold List*/}
        <CardList
          className="inholdClassName"
          valuesList = {taskArray}
          setValuesList = {setTaskArray}
          optionsList = { holdList }
          headerTitle = "In Hold"
        />
        {/*Done List*/}
        <CardList
          className="doneClassName"
          valuesList = {taskArray}
          setValuesList = {setTaskArray}
          optionsList = { doneList }
          headerTitle = "Done Tasks"
        />
      </div>
		</>
	);
}

export default LstElmnt;