import React, { useCallback, useEffect, useState } from 'react'
import '../01-useState/CounterApp.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	
	const [counter, setCounter] = useState(10)

	// const increment = () => {
	// 	setCounter( counter +1 );
	// }

	const increment = useCallback((num) => {
			setCounter( c => c + num );
		},	[ setCounter ])


	useEffect(() => {
		console.log('useEffect ...')
	}, [increment])

	return (
		<>
			<h1>CallbackHook : {counter}</h1>	
			<hr />

		 	<ShowIncrement increment={ increment } />

		</>
	)
}
