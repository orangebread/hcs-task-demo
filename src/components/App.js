import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from './_shared/PrivateRoute';
import Login from './Login';
import TodoList from './Todo/TodoList';
import TodoCreate from './Todo/TodoCreate';
import TodoDelete from './Todo/TodoDelete';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
                        <PrivateRoute exact path="/" component={TodoList} />
						<Route path="/login" exact component={Login} />
						<Route path="/task/create" exact component={TodoCreate} />
						<Route path="/task/delete/:id" exact component={TodoDelete} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;