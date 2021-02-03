import React, { useState } from 'react'
import '../01-useState/CounterApp.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

	const [show, setShow] = useState(false);

	return (
		<>
			<h1>RealExampleRef</h1>	
			<hr />


			<div>
				{ show && <MultipleCustomHooks />}
			</div>
			
			<button
				className="btn btn-primary mt-4"
				onClick= {() => {
					setShow( !show );
				}}
			>
				Show/Hide
			</button>
		</>
	)
}
