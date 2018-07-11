import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes/index';

const env = process.env.NODE_ENV || 'development';
const browserHistory = createBrowserHistory();

const RootApp = () => {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
};

// Render the main component into the dom
if (env === 'development') {
  window.onload = function () {
    const render = Component => {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('app')
      );
    };
    render(RootApp);

    // HMR
    // tslint:disable-line
    if (module.hot) {
      module.hot.accept('./routes', () => {
        render(RootApp);
      });
    }
  };
} else {
  window.onload = function () {
    ReactDOM.render(
      <RootApp />,
      document.getElementById('app')
    );
  };
}

registerServiceWorker();
