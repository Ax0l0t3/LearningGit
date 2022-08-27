import React from 'react';
import ReactDom from 'react-dom';
import '../Styles/modalComponent.css';

export function Modal ({ modalStatus, handleCloseProp }){
  if(modalStatus === false) return;
	return ReactDom.createPortal(
    <div className="backgrnd" onClick={ handleCloseProp }>
		  <h4 className="modal" >Task</h4>
      <p>Elemento Seleccionado</p>
      <ul>
        <li>Elementos</li>
      </ul>
      <input type="text" placeholder="Type your task description..." />
      // <button type="button">Save</button>
      // <button type="button">Back</button>
    </div>,
    document.getElementById('portal')
	);
}

