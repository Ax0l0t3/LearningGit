import React from 'react';
import './ToDoComponent.css';

function ToDoList ( { listValues } ) {
  
   return (
     <div className="toDoLis">
     {
       listValues.map( id =>
         <p className="task" keys={ id.toString() } > Task: {id} </p>
       )
     }
     </div>
   );
}

export default ToDoList;