import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = props => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	const renderInput = ({ input, label, type, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} type={type} autoComplete="off"/>
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
                <Field name="email" type="text" component={renderInput} label="Enter Email"/>
                <Field name="password" type="password" component={renderInput} label="Enter Password"/>
        
                <button className="ui button primary">Sign Up</button>
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
	form: 'signupForm',
	validate
})(SignupForm);