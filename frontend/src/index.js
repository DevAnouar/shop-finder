import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { registerObserver } from "react-perf-devtool";
import { Provider } from "react-redux";
import store from "./store";
import {authenticationSuccessful} from "./actions";
import {isJwtExpired} from "./services/security";

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

const jwt = localStorage.getItem("jwt")
if (jwt) {
  !isJwtExpired(jwt) ? store.dispatch(authenticationSuccessful()) : localStorage.clear()
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)

registerObserver()
registerServiceWorker()
