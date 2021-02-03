import React, { useState } from 'react'
import '../01-useState/CounterApp.css';
import { useCounter } from '../../Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

	const { counter ,  increment  } = useCounter(10);
	const [show, setShow] = useState(false)

	return (
		<>
			<h1>Memorize</h1>	
			<hr />

			<h1>Counter : <Small  value={counter}></Small> </h1>
			
			<button 
				className="btn btn-primary"
				onClick = { () => increment() }
			>
				+1
			</button>

			<button 
				className="btn btn-outline-primary ml-3"
				onClick = { () => {
					setShow(!show);
				} }
			>
				Show/Hide : {JSON.stringify( show )}
			</button>

		</>
	)
}
