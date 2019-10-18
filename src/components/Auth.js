import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isUserLoggedIn, logOut } from '../actions';

const Auth = () => {
    const isLoggedIn = useSelector(state => state.login);
    const dispatch = useDispatch();
    const logOutHandler = () => dispatch(logOut());

    useEffect(() => {
        dispatch(isUserLoggedIn())
    }, []);

    if (!isLoggedIn) {
        return <div>Not logged in</div>
    }

	return (
		<div>
            You are logged in! 	<button onClick={() => logOutHandler()}>Log out</button>
		</div>
	);
	
}

export default Auth;