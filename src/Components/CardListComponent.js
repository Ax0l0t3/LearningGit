import React from 'react';
import { NxtButtn } from './nxtButtnComponent';
import { DtailsButtn } from './dtailsButtnComponent';
import { PrvsButtn } from './pvsBttnComponent';
import '../Styles/CardListComponent.css';

function CardList( {
  valuesList,
  setValuesList,
  optionsList,
  headerTitle,
} ){
  
  const handleClickProgress = x => {
    switch(x.progress){
      case 'ToDo':
        const progValues = valuesList.map( z => {
          if( z.id === x.id){
            z.progress = 'InProgress';
          }
          return z;
        });
        setValuesList(progValues);
      break;
      case 'InProgress':
        const holdValues = valuesList.map( z => {
            if( z.id === x.id){
              z.progress = 'InHold';
            }
            return z;
          });
          setValuesList(holdValues);
      break;
      case 'InHold':
        const doneValues = valuesList.map( z => {
              if( z.id === x.id){
                z.progress = 'Done';
              }
              return z;
            });
            setValuesList(doneValues);
      break;
      default:
        console.log('Default');
      break;
    }
  }
  
  return (
     <div className="cardStyle">
       <h3 className="cardTitle">{ headerTitle }</h3>
       <div className="TasksBody">
         {
           optionsList.map( passedTask =>
            <div className="TaskContainer">
             <div>
               {
                 passedTask.progress === "InProgress" || passedTask.progress === "InHold"
                 ? <PrvsButtn />
                 : ''
               }
             </div>
             <p className="task" keys={ passedTask.id } > { passedTask.value } </p>
             <div className="bttnsCntner">
               <div ><DtailsButtn /></div>
               <div onClick={() => handleClickProgress(passedTask) }><NxtButtn /></div>
             </div>
            </div>
           )
         }
       </div>
     </div>
   );
};

export default CardList;