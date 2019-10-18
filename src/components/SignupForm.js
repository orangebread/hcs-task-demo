import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const LoginForm = props => {
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
            <div className="ui stacked segment">    
                <Field name="email" component={renderInput} label="Enter Email"/>
                <Field name="password" component={renderInput} label="Enter Password"/>
        
                <button className="ui button primary">Login</button>
            </div>
        </form>
	);
}

const validate = formValues => {
	const errors = {};

	if (!formValues.email) {
		errors.email = 'Email is required';
	}

	if (!formValues.password) {
		errors.password = 'Password is required';
    }
    
	return errors;
};

export default reduxForm({
	form: 'loginForm',
	validate
})(LoginForm);