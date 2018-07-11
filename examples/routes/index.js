import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../views/index';
import Geometry from '../views/geometry';

const mainRouter = [
  {
    name: '工作区',
    key: 'index',
    route: {
      path: '/index',
      component: Index
    }
  },
  {
    name: '要素',
    key: 'index',
    route: {
      path: '/geometry',
      component: Geometry
    }
  }
];

const routes = (
  <Switch>
    {mainRouter.map((route) => <Route key={route.key} {...route.route} />)}
    <Redirect to="/index" />
  </Switch>
);

export default routes;
