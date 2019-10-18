import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from './LoginForm';
import { authUser } from '../actions';

const Login = () => {
    const dispatch = useDispatch();
    const onSubmit = formValues => dispatch(authUser(formValues));
    
	return (
		<div>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                            Log in to your HCS Todo account
                        </div>
                    </h2>
                    <LoginForm onSubmit={onSubmit} />
                    <div className="ui message">New user? <Link to="/sign-up">Sign Up</Link></div>
                </div>
            </div>
		</div>
	);

}

export default Login;