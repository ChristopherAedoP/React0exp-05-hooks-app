import React, { useContext } from 'react'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

	const [ { name } , handleInputChange , reset ] = useForm({
		name: ''
	})

	const { setUser } = useContext( UserContext );

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim().length <= 1) {
			return;			
		}

	   const user = {
			id: new Date().getTime(),
			name
		}

		setUser(user);
		reset();
		
	}

	return (
		<>
			<h1>LoginScreen</h1>
			<hr/>


			<form onSubmit= { handleSubmit } >
				<input 
					className="form-control"
					type ="text"
					name="name"
					placeholder="Nombre......"
					autoComplete="off"
					value={name}
					onChange= { handleInputChange }
				/>
				<button
					type="submit"
					className="btn btn-outline-primary mt-1 btn-block"
				>
					Login
				</button>
			</form>		
		</>
	)
}
