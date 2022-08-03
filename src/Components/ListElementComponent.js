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
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };
    const taskObject = {
      id: `${ task.length }-${ task.slice(0,3) }-${ getRandomIntInclusive( 0, task.length ) }`,
      value: task,
      progress: 'ToDo'
    };
    setTaskArray( [...taskArray, taskObject] );
    console.log('taskArray', taskArray);
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
      <div className="Tasks">
        {/*To Do List*/}
          <CardList
            listStyle="todoClassName"
            classNameHeader="toDoHeaderStyle"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { toDoList }
            headerTitle = "To Do Tasks"
          />
        {/*In Progress List*/}
          <CardList
            listStyle="inprogClassName"
            classNameHeader="inPrHeaderStyle"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { progressList }
            headerTitle = "In Progress"
          />
        {/*In Hold List*/}
          <CardList
            listStyle="inholdClassName"
            classNameHeader="inHoHeaderStyle"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { holdList }
            headerTitle = "In Hold"
          />
        {/*Done List*/}
          <CardList
            listStyle="doneClassName"
            classNameHeader="doneHeaderStyle"
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