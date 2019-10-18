import { combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

import {
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_LOGOUT,
    IS_LOGGED_IN,

    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,
    TASK_LIST
} from './types';

const loginReducer = (state = null, action) => {
    switch(action.type) {
        case USER_AUTH_SUCCESS:
            const { token } = action.payload;
            localStorage.setItem('user_token', token);
            return true;
        case USER_AUTH_FAIL:
            return false;
        case USER_LOGOUT:
            localStorage.removeItem('user_token');
            return false;
        case IS_LOGGED_IN:
            if (localStorage.getItem('user_token')) {
                return true;
            } else {
                return false;
            }
        default:
            return state;
    }
}

const taskReducer = (state = [], action) => {
    switch(action.type) {
        case TASK_LIST:
            return action.payload;
        case TASK_CREATE_SUCCESS:
            return state;
        case TASK_CREATE_FAIL:
            return state;
        case TASK_DELETE_SUCCESS:
            return state.filter(obj => {
                return obj._id === action.payload.id;
            });
        case TASK_DELETE_FAIL:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
	form: formReducer,
    login: loginReducer,
    tasks: taskReducer
});