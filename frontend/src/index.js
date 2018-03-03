import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { registerObserver } from "react-perf-devtool";
import { Provider } from "react-redux";
import store from "./store";

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)

registerObserver()
registerServiceWorker()
