import api from './apis/api';
import history from './history';

import {
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_LOGOUT,
    IS_LOGGED_IN,
    TASK_LIST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL
} from "./types";

export const authUser = formValues => async dispatch => {
    const response = await api.post('/user/login', { ...formValues });
    console.log('response', response);
    if (response.data.success === true) {
        dispatch({ type: USER_AUTH_SUCCESS, payload: response.data });
    } else {
        dispatch({ type: USER_AUTH_FAIL, payload: response.data });
    }
    history.push('/');
}

export const logOut = () => async dispatch => {
    console.log('logging out');
    dispatch({ type: USER_LOGOUT });
    history.push('/');
}

export const isUserLoggedIn = () => async dispatch => {
    dispatch({ type: IS_LOGGED_IN });
    history.push('/');
}

export const createTask = formValues => async dispatch => {
    const response = await api.post('/task', { ...formValues });
    if (response.data.success === true) {
        dispatch({ type: TASK_CREATE_SUCCESS, payload: response.data });
    } else {
        dispatch({ type: TASK_CREATE_FAIL, payload: response.data });
    }
    history.push('/');
}

export const deleteTask = id => async dispatch => {
    const response = await api.delete(`/task/${id}`);
    if (response.data.success === true) {
        dispatch({ type: TASK_DELETE_SUCCESS, payload: id });
    } else {
        dispatch({ type: TASK_DELETE_FAIL, payload: id });
    }
    history.push('/');
}

export const getTasks = () => async dispatch => {
    const response = await api.get('/task');
    dispatch({ type: TASK_LIST, payload: response.data.result });
}