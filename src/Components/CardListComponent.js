import React from 'react';
import { NxtButtn } from './nxtButtnComponent';
import { DtailsButtn } from './dtailsButtnComponent';
import { PrvsButtn } from './pvsBttnComponent';
import { DoneButtn } from './doneButtnComponent';
import '../Styles/CardListComponent.css';

function CardList( {
  columnKey,
  valuesList,
  setValuesList,
  optionsList,
  headerTitle,
  modalStatus,
  handleOpenProp,
  taskReaded
} ){
  const handleForward = x => {
    switch(x.progress){
      case 'To Do':
        const progValues = valuesList.map( z => {
          if( z.id === x.id){
            z.progress = 'In Progress';
          }
          return z;
        });
        setValuesList(progValues);
      break;
      case 'In Progress':
        const holdValues = valuesList.map( z => {
            if( z.id === x.id){
              z.progress = 'In Hold';
            }
            return z;
          });
          setValuesList(holdValues);
      break;
      case 'In Hold':
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
  
  const handleBackward = x => {
    switch(x.progress){
      case 'In Progress':
        const progValues = valuesList.map( z => {
          if( z.id === x.id){
            z.progress = 'To Do';
          }
          return z;
        });
        setValuesList(progValues);
      break;
      case 'In Hold':
        const holdValues = valuesList.map( z => {
            if( z.id === x.id){
              z.progress = 'In Progress';
            }
            return z;
          });
          setValuesList(holdValues);
      break;
      case 'Done':
        const doneValues = valuesList.map( z => {
              if( z.id === x.id){
                z.progress = 'In Hold';
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
  
  const handleDone = (x) => {
    const removeValues = valuesList.filter( z => z.id !== x.id );
    setValuesList(removeValues);
  }
  
  return (
    <div className="cardStyle">
      <h3 className="cardTitle">{ headerTitle }</h3>
      <div className="TasksBody">
      {
        valuesList.map( passedTask => {
          switch(columnKey){
            case 0:
            if(passedTask.progress !== 'To Do') return null;
              return (
                <div className="TaskContainer">
                  <p className="task" key={ passedTask.id } > { passedTask.value } </p>
                  <div className="bttnsCntner">
                    <div onClick={ () => handleOpenProp(passedTask) }>
                      <DtailsButtn />
                    </div>
                    <div onClick={ () => handleForward(passedTask) }>
                      <NxtButtn />
                    </div>
                  </div>
                </div>
              );
            case 1:
            if(passedTask.progress !== 'In Progress') return null;
              return (
                <div className="TaskContainer">
                  <div onClick={ () => handleBackward(passedTask) }>
                    <PrvsButtn />
                  </div>
                  <p className="task" key={ passedTask.id } > { passedTask.value } </p>
                  <div className="bttnsCntner">
                    <div onClick={ () => handleOpenProp(passedTask) }>
                      <DtailsButtn />
                    </div>
                    <div onClick={ () => handleForward(passedTask) }>
                      <NxtButtn />
                    </div>
                  </div>
                </div>
              );
            case 2:
            if(passedTask.progress !== 'In Hold') return null;
              return (
                <div className="TaskContainer">
                  <div onClick={ () => handleBackward(passedTask) }>
                    <PrvsButtn />
                  </div>
                  <p className="task" key={ passedTask.id } > { passedTask.value } </p>
                  <div className="bttnsCntner">
                    <div onClick={ () => handleOpenProp(passedTask) }>
                      <DtailsButtn />
                    </div>
                    <div onClick={ () => handleForward(passedTask) }>
                      <NxtButtn />
                    </div>
                  </div>
                </div>
              );
            case 3:
            if(passedTask.progress !== 'Done') return null;
              return (
                <div className="TaskContainer">
                  <div onClick={ () => handleBackward(passedTask) }>
                    <PrvsButtn />
                  </div>
                  <p className="task" key={ passedTask.id } > { passedTask.value } </p>
                  <div className="bttnsCntner">
                    <div onClick={ () => handleOpenProp(passedTask) }>
                      <DtailsButtn />
                    </div>
                    <div onClick={ () => handleDone(passedTask) }>
                      <DoneButtn />
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })
      }
      </div>
    </div>
   );
};

export default CardList;