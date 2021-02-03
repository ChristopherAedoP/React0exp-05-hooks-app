import React, { useEffect, useReducer } from 'react'

import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const init = () => {
	
	return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

	const [ todos, dispatch ] = useReducer(todoReducer, [] , init)



	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify( todos ) )
	}, [todos])

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload : todoId
		}

		dispatch( action );
	}

	const handleTodoAdd = ( newTodo ) => {
		dispatch({
			type: 'add',
			payload : newTodo
		})
	}



	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload : todoId
		})
	}

	return (
		<>
			<h1>Todo App ({ todos.length })</h1>
			<hr />

			<div className="row">
				<div className="col-7" >
					<TodoList 
						todos={ todos }
						handleToggle={ handleToggle }
						handleDelete={ handleDelete }	
						/>

				</div>
				<div className="col-5">
					
					<TodoAdd
						handleTodoAdd={ handleTodoAdd }

					/>


				</div>

			</div>
		</>
	)
}
