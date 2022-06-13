import React from 'react';

function LstElmnt(){
	
	const handleAdd = () => setElementView ( true );
	return(
		<>
			<button type='button' onClick={ handleAdd }>Add</button>
			<p>List Element</p>
		</>
	);
}
