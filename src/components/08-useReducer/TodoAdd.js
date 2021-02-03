import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const TodoAdd = ({ handleTodoAdd }) => {

	const [ { description } , handleInputChange , reset ] = useForm({
		description: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;			
		}

	   const newtodo = {
			id: new Date().getTime(),
			desc : description,
			done : false
		}

		handleTodoAdd( newtodo );
		reset();
		
	}

	return (
		<>
					<h4>Agregar Tarea</h4>
					<hr/>

					<form onSubmit= { handleSubmit } >
						<input 
							className="form-control"
							type ="text"
							name="description"
							placeholder="apreder ...."
							autoComplete="off"
							value={description}
							onChange= { handleInputChange }
						/>

						<button
							type="submit"
							className="btn btn-outline-primary mt-1 btn-block"
						>
							Agregar
						</button>
					</form>			
		</>
	)
}
