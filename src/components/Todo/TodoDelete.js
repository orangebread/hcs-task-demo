import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTask } from "../../actions";
import Modal from '../Modal';
import history from '../../history';


const TodoDelete = props => {
	const { id } = props.match.params;
	const dispatch = useDispatch();
	const deleteTaskHandler = id => dispatch(deleteTask(id));

	const renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={() => deleteTaskHandler(id)} className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
			</React.Fragment>
		);
	}

	const renderContent = () => {
		return 'Are you sure you want to delete this task?'
	}

	return (
		<Modal
			title="Delete Task"
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => history.push('/')}
		/>
	);

}

export default TodoDelete;
