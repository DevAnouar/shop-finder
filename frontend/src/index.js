import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {registerObserver} from "react-perf-devtool";
import {Provider} from "react-redux";
import store from "./store";
import {ConnectedRouter} from "react-router-redux";
import history from './history'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerObserver();
registerServiceWorker();

window.store = store