import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Map from '../pages/map';
import Layer from '../pages/layer';
import Geometry from '../pages/geometry';

const mainRouter = [
  {
    name: '地图',
    key: 'map',
    route: {
      path: '/map',
      component: Map
    }
  },
  {
    name: '图层',
    key: 'layer',
    route: {
      path: '/layer',
      component: Layer
    }
  },
  {
    name: '要素',
    key: 'geometry',
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
