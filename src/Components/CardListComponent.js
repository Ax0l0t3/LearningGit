import React from 'react';
import NxtButtn from './nxtButtnComponent';
import DtailsButtn from './dtailsButtnComponent';
import '../Styles/CardListComponent.css';

function CardList( {
  valuesList,
  setValuesList,
  optionsList,
  headerTitle,
} ){
  
  // const handleClickProgress = x => {
    // const newValues = valuesList.map( z => {
      // if( z.id === x){
        // z.progress = 'InProgress';
      // }
      // return z;
    // }); 
    // setValuesList(newValues);
  // };
  
  // const handleClickHold = x => {
    // const newValues = valuesList.map( z => {
      // if( z.id === x){
        // z.progress = 'InHold';
      // }
      // return z;
    // });
    // setValuesList(newValues);
  // };
  
  // const handleClickDone = x => {
    // const newValues = valuesList.map( z => {
      // if( z.id === x){
        // z.progress = 'Done';
      // }
      // return z;
    // });
    // setValuesList(newValues);
  // };
  
  return (
     <div className="cardStyle">
       <h3 className="cardTitle">{ headerTitle }</h3>
       <div className="TasksBody">
         {
           optionsList.map( passedTask =>
            <div className="TaskContainer">
             <p className="task" keys={ passedTask.id } > { passedTask.value } </p>
             <DtailsButtn />
             <NxtButtn />
            </div>
           )
         }
       </div>
     </div>
   );
};

export default CardList;