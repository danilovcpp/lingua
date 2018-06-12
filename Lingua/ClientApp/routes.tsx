import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Courses from './containers/Courses';

export const routes = (
	<Layout>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/courses' component={Courses} />
		</Switch>
	</Layout>
)