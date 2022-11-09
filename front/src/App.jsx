import React, { useLayoutEffect, useState } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './pages/privateRoute';
import routes from './pages/routes';

const privateRoutesList = Object.values(routes);

const App = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const getWidth = () => {
		setWidth(window.innerWidth);
	}
	useLayoutEffect(() => {
		window.addEventListener('resize', getWidth);
		return () => window.removeEventListener('resize', getWidth)
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				{privateRoutesList.map((route) => <PrivateRoute key={route.path} exact path={route.path} component={route.component} width={width} />)}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
