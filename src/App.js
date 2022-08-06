import React, { useState, useEffect } from 'react';
import CardList from './Components/CardListComponent';
import PlusButtn from './Components/plusButtnComponent';
import './App.css';

function App() {
  
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
    if(task === '')return;
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
  
  // console.log('taskArray', taskArray);
  // console.log(task);
  
  return (
    <div className="App">
      <div className="Titles">
        <h1>Tasks</h1>
        <div className="inputDiv">
          <input className="inputTask" type="text" placeholder="Type Your Task..." onChange={ handleChange } value={ task }/>
          <div onClick={ handleClick } >
            <PlusButtn />
          </div>
        </div>
        <p>TL4K4® 2022©</p>
      </div>
      <div className="Cards">
        {/*To Do List*/}
          <CardList
            headerTitle = "Tasks To Do"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { toDoList }
          />
        {/*In Progress List*/}
          <CardList
            headerTitle = "In Progress"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { progressList }
          />
        {/*In Hold List*/}
          <CardList
            headerTitle = "In Hold"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { holdList }
          />
        {/*Done List*/}
          <CardList
            headerTitle = "Tasks Done"
            valuesList = {taskArray}
            setValuesList = {setTaskArray}
            optionsList = { doneList }
          />
      </div>
    </div>
  );
}

export default App;
