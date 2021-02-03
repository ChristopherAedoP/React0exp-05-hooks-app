import React, { useMemo, useState } from 'react'
import '../01-useState/CounterApp.css';
import { useCounter } from '../../Hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {

	const { counter ,  increment  } = useCounter(5000);
	const [show, setShow] = useState(false)




	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<>
			<h1>MemoHook</h1>	
			<hr />

			<h3>Counter : <small>{counter}</small></h3>
			<hr />

			<p>{memoProcesoPesado}</p>

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
