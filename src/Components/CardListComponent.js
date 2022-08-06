import React from 'react';
import { NxtButtn } from './nxtButtnComponent';
import { DtailsButtn } from './dtailsButtnComponent';
import { PrvsButtn } from './pvsBttnComponent';
import { DoneButtn } from './doneButtnComponent';
import '../Styles/CardListComponent.css';

function CardList( {
  valuesList,
  setValuesList,
  optionsList,
  headerTitle,
} ){
  
  const handleForward = x => {
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
        console.log('Default', x.progress);
      break;
    }
  }
  
  const handleBackward = x => {
    switch(x.progress){
      case 'InProgress':
        const progValues = valuesList.map( z => {
          if( z.id === x.id){
            z.progress = 'ToDo';
          }
          return z;
        });
        setValuesList(progValues);
      break;
      case 'InHold':
        const holdValues = valuesList.map( z => {
            if( z.id === x.id){
              z.progress = 'InProgress';
            }
            return z;
          });
          setValuesList(holdValues);
      break;
      case 'Done':
        const doneValues = valuesList.map( z => {
              if( z.id === x.id){
                z.progress = 'InHold';
              }
              return z;
            });
            setValuesList(doneValues);
      break;
      default:
        console.log('Default', x.progress);
      break;
    }
  }
  
  const handleDone = (x) => {
    const removeValues = valuesList.filter( z => z.id !== x.id );
    setValuesList(removeValues);
  }
  
  
  return (
     <div className="cardStyle">
       <h3 className="cardTitle">{ headerTitle }</h3>
       <div className="TasksBody">
         {
           optionsList.map( passedTask =>
            <div className="TaskContainer">
             <div onClick={ () => handleBackward(passedTask) }>
               {
                 passedTask.progress !== "ToDo"
                 ? <PrvsButtn />
                 : ''
               }
             </div>
             <p className="task" keys={ passedTask.id } > { passedTask.value } </p>
             <div className="bttnsCntner">
                <div ><DtailsButtn /></div>
                <div onClick={ () => handleForward(passedTask) }>
                  {
                    passedTask.progress !== "Done"
                    ? <NxtButtn />
                    : ''
                  }
                </div>
                <div onClick={ () => handleDone(passedTask) }>
                  {
                    passedTask.progress === "Done"
                    ? <DoneButtn />
                    : ''
                  }
                </div>
             </div>
            </div>
           )
         }
       </div>
     </div>
   );
};

export default CardList;