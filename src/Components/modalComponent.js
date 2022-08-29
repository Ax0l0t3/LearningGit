import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import '../Styles/modalComponent.css';

export function Modal ({ modalStatus, handleCloseProp, modalTaskProp }){
  const [dropdown, setDropdown] = useState(false);
  
  const dropdownOpen = () => dropdown === true ? setDropdown(false) : setDropdown(true);
  const dropdownClose = () => { handleCloseProp(); setDropdown(false) }
  const handleMoveTask = taskValue => {
    setDropdown(false);
    return modalTaskProp.progress = taskValue;
  };
  
  // useEffect(() =>{
    
  // },[modalTaskProp])
  
  const progressList = [
    "To Do",
    "In Progress",
    "In Hold",
    "Done"
  ]
  
  if(modalStatus === false) return;
	return ReactDom.createPortal(
    <div className="backgrnd">
      <div className="modal">
        <div className="modalHead">
          <h2 className="modalTitle">{modalTaskProp.value}</h2>
          <div className="modalList">
            <p onClick={ dropdownOpen }>{modalTaskProp.progress}</p>
              {
                dropdown === true
                ? <ul>
                {
                  progressList.map( (y, key) =>{
                    if( y === modalTaskProp.progress) return <li className="selected" key={key}>{y}</li>
                    return <li onClick={ () => handleMoveTask(y) }key={key}>{y}</li>
                  })
                }
                  </ul>
                : null
              }
          </div>
        </div>
        <input type="text" placeholder="Type your task description..." />
        <div className="modalFooter">
          <button type="button" className="saveButton">Save</button>
          <button type="button" className="backButton" onClick={ dropdownClose }>Back</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
	);
}

