import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Map from '../pages/map';
import Geometry from '../pages/geometry';

const mainRouter = [
  {
    name: '工作区',
    key: 'index',
    route: {
      path: '/map',
      component: Map
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
    <Redirect to="/map" />
  </Switch>
);

export default routes;
