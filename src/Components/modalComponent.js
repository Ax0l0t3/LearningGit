import React from 'react';
import ReactDom from 'react-dom';
import '../Styles/modalComponent.css';

export function Modal ({ modalStatus, handleCloseProp, modalTaskProp }){
  if(modalStatus === false) return;
	return ReactDom.createPortal(
    <div className="backgrnd">
      <div className="modal">
        <div className="modalHead">
          <h2 className="modalTitle">{modalTaskProp.value}</h2>
          <div className="modalList">
            <p>{modalTaskProp.progress}</p>
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

