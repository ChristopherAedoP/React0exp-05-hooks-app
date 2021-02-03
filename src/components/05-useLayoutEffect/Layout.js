import React, { useLayoutEffect,  useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './Layout.css';

export const Layout = () => {

	const { counter ,  increment  } = useCounter(1);
	const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
	const { quote  } = !!data && data[0];

	const PTag = useRef();

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		console.log(PTag.current.getBoundingClientRect());
		setBoxSize(PTag.current.getBoundingClientRect());
	}, [quote])

	return (
		<>
			<h1>Layout</h1>
			<hr/>

					<blockquote className="blockquote text-right">
						<p 
							className="md-0" 
							ref={ PTag }
						>
							{quote} 
						</p>
					</blockquote>
				

			

			<button 
				className="btn btn-primary"
				onClick = { () => increment() }
			>
				Next Quote
			</button>

			<pre>
					{ JSON.stringify( boxSize , null ,3) }
				</pre>
				
			
		</>
	)
}
