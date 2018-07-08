import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Index from '../views/index';

const mainRouter = [
  {
    name: '工作区',
    icon: 'workspace',
    key: 'index',
    route: {
      path: '/index',
      component: Index
    }
  }
];

const routes = (
  <Switch>
    {mainRouter.map((route, i) => <Route key={i} {...route.route} />)}
    <Redirect to='/index' />
  </Switch>
);

export default routes;
