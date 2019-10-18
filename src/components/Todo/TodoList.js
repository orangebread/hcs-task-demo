import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getTasks } from '../../actions';

const TodoList = () => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTasks());
	}, []);

	if (!tasks) {
		return <div>Loading tasks...</div>
	}
	const renderActions = (task) => {
		return (
			<div className="right floated content">
				<Link to={`/task/delete/${task._id}`} className="ui button negative">DELETE</Link>
			</div>
		)
	}

	const renderCreate = () => {
		return (
			<div>
				<Link to="/task/create" className="ui button primary">Create Task</Link>
			</div>
		);
	}

	const renderList = () => {
		return tasks.map(task => {
			return (
				<div className="item" key={task._id}>
					{renderActions(task)}
					<div className="content">
						<h3>{task.description}</h3>
						<div className="description">Due date: {task.due_date}</div>
					</div>
				</div>
			);
		})
	}

	return (
		<div>
			<div className="ui celled list">
				<h2>Todo List</h2>
				{renderList()}
			</div>
			{renderCreate()}
		</div>
	);

}

export default TodoList;