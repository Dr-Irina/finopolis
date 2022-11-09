import React, { useCallback } from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../layouts/default';

const PrivateRoute = ({
	component: PrivateComponent,
	location,
	width,
	setTheme,
	theme,
	...rest
}) => {
	const renderedComponent = useCallback(
		(prop) => <PrivateComponent {...prop} width={width} theme={theme} />,
		[PrivateComponent, width, theme]);

	return (
	// @ts-ignore
		<DefaultLayout width={width} setTheme={setTheme} theme={theme}>
			<Route
				exact
				{...rest}
				component={renderedComponent}
			/>
		</DefaultLayout>
	);
};

export default PrivateRoute;
