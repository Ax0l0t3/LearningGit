import React from 'react';
import nextArrow from '../Images/nextProcessArrow.png';
import './CardListComponent.css';

function CardList( {
  valuesList,
  setValuesList,
  optionsList,
  headerTitle
} ){
  
  const handleClickProgress = x => {
    const newValues = valuesList.map( z => {
      if( z.id === x){
        z.progress = 'InProgress';
      }
      return z;
    }); 
    setValuesList(newValues);
  };
  
  const handleClickHold = x => {
    const newValues = valuesList.map( z => {
      if( z.id === x){
        z.progress = 'InHold';
      }
      return z;
    });
    setValuesList(newValues);
  };
  
  const handleClickDone = x => {
    const newValues = valuesList.map( z => {
      if( z.id === x){
        z.progress = 'Done';
      }
      return z;
    });
    setValuesList(newValues);
  };
  
  return (
     <div className="ListStyle">
       <h3 className="toDoTitle">{headerTitle}</h3>
       <div className="TasksBody">
         {
           optionsList.map( passedTask =>
            <div className="TaskContainer">
             <p className="task" keys={ passedTask.id } > Task: {passedTask.value} </p>
             <img className="toInProgress" src={ nextArrow } onClick={ () => handleClickProgress(passedTask.id) } alt="arrow" />
             <img className="toHold"src={ nextArrow } onClick={ () => handleClickHold(passedTask.id) } alt="arrow" />
             <img className="toDone"src={ nextArrow } onClick={ () => handleClickDone(passedTask.id) } alt="arrow" />
            </div>
           )
         }
       </div>
     </div>
   );
};

export default CardList;