import React from 'react';
import ReactDom from 'react-dom';
import '../Styles/modalComponent.css';

export function Modal ({ modalStatus, handleCloseProp }){
  if(modalStatus === false) return;
	return ReactDom.createPortal(
    <div className="backgrnd" onClick={ handleCloseProp }>
		  <p className="modal" >Modal Working</p>
    </div>,
    document.getElementById('portal')
	);
}

