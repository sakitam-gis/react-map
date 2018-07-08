import * as React from 'react';
// import { hot } from 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes/index';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './utils/registerServiceWorker';

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
          <Component/>
        </AppContainer>,
        document.getElementById('app')
      );
    };
    render(RootApp);

    // HMR
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
