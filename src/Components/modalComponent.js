import React from 'react';
import ReactDom from 'react-dom';
import '../Styles/modalComponent.css';

export function Modal ({ modalStatus, handleCloseProp }){
  if(modalStatus === false) return;
	return ReactDom.createPortal(
    <div className="backgrnd">
      <div className="modal">
        <div className="modalHead">
          <h2 className="modalTitle">Design Headgear for ABSA</h2>
          <div className="modalList">
            <p>Selected</p>
            {/*<ul>
              <li>To Do</li>
              <li>In Progress</li>
              <li>In Hold</li>
              <li>Done</li>
            </ul>*/}
          </div>
        </div>
        <input type="text" placeholder="Type your task description..." />
        <div className="modalFooter">
          <button type="button" className="saveButton">Save</button>
          <button type="button" className="backButton" onClick={ handleCloseProp }>Back</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
	);
}

