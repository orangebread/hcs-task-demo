import React from 'react';
import { useDispatch } from 'react-redux';

import TodoForm from './TodoForm';
import { createTask } from "../../actions";

const TodoCreate = () => {
	const dispatch = useDispatch();
	const onSubmit = formValues => dispatch(createTask(formValues));
	
	return (
		<div>
			<h3>Create a task</h3>
			<TodoForm onSubmit={onSubmit}/>
		</div>
	);
	
}

export default TodoCreate;