import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { history } from './store';
import App from './containers/App';

import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  target,
);
