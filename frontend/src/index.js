import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import NearbyShopsPage from "./containers/NearbyShopsPage";
import {registerObserver} from "react-perf-devtool";

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'));
registerObserver();
registerServiceWorker();
