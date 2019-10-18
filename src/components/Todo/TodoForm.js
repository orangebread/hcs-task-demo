import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TodoForm = props => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	const renderInput = ({ input, label, meta }) => { 
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				{renderError(meta)}
			</div>
		);
	}

	const onSubmit = (formValues) => {
		props.onSubmit(formValues);
	}

	return (
		<form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
			<Field name="description" component={renderInput} label="Enter Description"/>
			<Field name="due_date" component={renderInput} label="Enter Due Date"/>
			<br />
			<button className="ui button primary">Submit</button>
		</form>
	);
}

const validate = formValues => {
	const errors = {};

	if (!formValues.description) {
		errors.description = 'Description is required';
	}

	if (!formValues.due_date) {
		errors.due_date = 'Due date is required';
    }

	return errors;
};

export default reduxForm({
	form: 'todoForm',
	validate
})(TodoForm);