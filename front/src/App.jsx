import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { InputForm } from './components/inputForm';
import PrivateRoute from './pages/privateRoute';
import routes from './pages/routes';

const privateRoutesList = Object.values(routes);

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  });

  const isOpen = window.localStorage.getItem('login') === '';

  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {privateRoutesList.map((route) => (
            <PrivateRoute
              key={route.path}
              exact
              path={route.path}
              component={route.component}
              width={width}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
