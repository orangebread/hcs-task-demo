import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SignupForm from './SignupForm';
import { createUser } from '../actions';

const Login = () => {
    const dispatch = useDispatch();
    const onSubmit = formValues => dispatch(createUser(formValues));
    
	return (
		<div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                           Sign up for HCS Todo!
                        </div>
                    </h2>
                    <SignupForm onSubmit={onSubmit} />
                    <div className="ui message">Already signed up? <Link to="/login">Back to login</Link></div>
                </div>
            </div>
		</div>
	);

}

export default Login;